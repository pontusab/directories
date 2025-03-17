import { EditMCPForm } from "@/components/forms/edit-mcp";
import { GithubSignin } from "@/components/github-signin";
import { GoogleSignin } from "@/components/google-signin";
import { MCPListingSwitch } from "@/components/mcps/mcps-listing-switch";
import { getMCPBySlug } from "@/data/queries";
import { getSession } from "@/utils/supabase/auth";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

type Params = Promise<{ slug: string }>;

export const metadata: Metadata = {
  title: "Edit MCP | Cursor Directory",
  description:
    "Edit a MCP on Cursor Directory and reach 250k+ developers today.",
};

export default async function Page({ params }: { params: Params }) {
  const { slug } = await params;
  const session = await getSession();
  const { data: mcp } = await getMCPBySlug(slug);

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 w-full max-w-sm mx-auto">
        <div className="max-w-md w-full text-center -mt-32">
          <p className="text-md mt-4">
            Sign in to edit a MCP <br />
            and reach 250k+ developers today.
          </p>

          <div className="mt-10 flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <GithubSignin redirectTo={`/mcp/${slug}/edit`} />
              <GoogleSignin redirectTo={`/mcp/${slug}/edit`} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (mcp?.owner_id !== session.user.id) {
    redirect("/mcp");
  }

  return (
    <div className="mx-auto max-w-screen-sm xl:max-w-screen-sm border-t border-border pt-32 pb-16">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl mb-4">Edit MCP </h1>
        <MCPListingSwitch id={mcp.id} active={mcp.active} />
      </div>

      <EditMCPForm data={mcp} />
    </div>
  );
}
