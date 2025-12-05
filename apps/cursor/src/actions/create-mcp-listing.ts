"use server";

import { createMCPListingCheckoutSession } from "@/lib/polar";
import { createPostRatelimit } from "@/lib/ratelimit";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { authActionClient } from "./safe-action";

export const createMCPListingAction = authActionClient
  .metadata({
    actionName: "create-mcp-listing",
  })
  .schema(
    z.object({
      name: z.string(),
      company_id: z.string().nullable(),
      logo: z.string().nullable(),
      description: z.string(),
      mcp_link: z.string().nullable().optional(),
      link: z.string().url(),
      plan: z.enum(["standard", "featured", "premium"]),
    }),
  )
  .action(
    async ({
      parsedInput: {
        name,
        company_id,
        logo,
        description,
        link,
        plan,
        mcp_link,
      },
      ctx: { userId, email, name: customerName },
    }) => {
      const supabase = await createClient();

      const { success } = await createPostRatelimit.limit(
        `create-mcp-listing-${userId}`,
      );

      if (!success) {
        throw new Error("Too many requests. Please try again later.");
      }

      const { data, error } = await supabase
        .from("mcps")
        .insert({
          name,
          company_id: company_id === "" ? null : company_id,
          logo: logo === "" ? null : logo,
          description,
          mcp_link: mcp_link === "" ? null : mcp_link,
          link,
          plan,
          active: plan === "standard",
        })
        .select("id")
        .single();

      if (error) {
        throw new Error(error.message);
      }

      revalidatePath("/mcp");

      const { data: mcp } = await supabase
        .from("mcps")
        .select("slug")
        .eq("id", data.id)
        .single();

      if (plan === "standard" && mcp) {
        redirect(`/mcp/${mcp.slug}`);
      }

      const session = await createMCPListingCheckoutSession({
        plan,
        mcpListingId: data.id,
        companyId: company_id ?? "",
        email: email ?? "",
        customerName: customerName ?? "",
      });

      redirect(session.url);
    },
  );
