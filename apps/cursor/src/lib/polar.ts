import { createClient } from "@/utils/supabase/admin-client";
import { Polar } from "@polar-sh/sdk";
import { revalidatePath } from "next/cache";

export const polar = new Polar({
  accessToken: process.env.POLAR_ACCESS_TOKEN!,
  server: process.env.POLAR_ENVIRONMENT as "production" | "sandbox",
});

export const PRODUCTS_PRODUCTION = {
  jobs: {
    standard: {
      id: "4ca0256a-62c8-4110-8aaf-b27e7d96b6cb",
      name: "Standard Job Listing",
      price: 99,
    },
    featured: {
      id: "4504bcd0-576c-423f-959c-9ce4ae1ae685",
      name: "Featured Job Listing",
      price: 299,
    },
    premium: {
      id: "c39ab0dd-f9c4-4e0d-bd37-a722e490b1b8",
      name: "Premium Job Listing",
      price: 999,
    },
  },
  mcps: {
    featured: {
      id: "d0024ef4-1ea1-454f-a36e-b79abca97180",
      name: "Featured MCP Listing",
      price: 299,
    },
    premium: {
      id: "122a4b4b-0da8-4a4d-8af8-062b0c440ab4",
      name: "Premium MCP Listing",
      price: 499,
    },
  },
};

export const PRODUCTS_SANDBOX = {
  jobs: {
    standard: {
      id: "5534a87b-72cd-424e-bdeb-856970689a9a",
      name: "Standard Job Listing",
      price: 99,
    },
    featured: {
      id: "33c524d0-9177-44e8-87b5-2beaf0588ee6",
      name: "Featured Job Listing",
      price: 299,
    },
    premium: {
      id: "5de476d6-da90-41f7-9022-ec22ff7e1feb",
      name: "Premium Job Listing",
      price: 999,
    },
  },
  mcps: {
    featured: {
      id: "7580b2bc-6385-4f3b-a53e-99d20f792b00",
      name: "Featured MCP Listing",
      price: 299,
    },
    premium: {
      id: "f4b744a1-94d0-47bc-abd7-405384df664e",
      name: "Premium MCP Listing",
      price: 499,
    },
  },
};

export function getJobListingProduct(plan: string) {
  if (process.env.POLAR_ENVIRONMENT === "production") {
    return PRODUCTS_PRODUCTION.jobs[
      plan as keyof typeof PRODUCTS_PRODUCTION.jobs
    ];
  }

  return PRODUCTS_SANDBOX.jobs[plan as keyof typeof PRODUCTS_SANDBOX.jobs];
}

export function getMCPListingProduct(plan: string) {
  if (process.env.POLAR_ENVIRONMENT === "production") {
    return PRODUCTS_PRODUCTION.mcps[
      plan as keyof typeof PRODUCTS_PRODUCTION.mcps
    ];
  }

  return PRODUCTS_SANDBOX.mcps[plan as keyof typeof PRODUCTS_SANDBOX.mcps];
}

export async function createJobListingCheckoutSession({
  plan,
  jobListingId,
  companyId,
  email,
  customerName,
}: {
  plan: string;
  jobListingId: string;
  companyId: string;
  email: string;
  customerName: string;
}) {
  const productId = getJobListingProduct(plan).id;

  const session = await polar.checkouts.create({
    products: [productId],
    externalCustomerId: companyId,
    customerEmail: email,
    customerName,
    successUrl: `${process.env.NEXT_PUBLIC_APP_URL}/jobs`,
    metadata: {
      jobListingId,
      plan,
    },
  });

  return session;
}

export async function createMCPListingCheckoutSession({
  plan,
  mcpListingId,
  companyId,
  email,
  customerName,
}: {
  plan: string;
  mcpListingId: string;
  companyId: string;
  email: string;
  customerName: string;
}) {
  const productId = getMCPListingProduct(plan).id;

  const session = await polar.checkouts.create({
    products: [productId],
    externalCustomerId: companyId,
    customerEmail: email,
    customerName,
    successUrl: `${process.env.NEXT_PUBLIC_APP_URL}/mcp`,
    metadata: {
      mcpListingId,
      plan,
    },
  });

  return session;
}

export function getJobListingOrderPlan(plan: string) {
  switch (plan) {
    case "featured":
      return 1;
    case "premium":
      return 2;
    default:
      return 0;
  }
}

export async function activateJobListing(
  jobListingId: string,
  productId: string,
) {
  const supabase = await createClient();

  const { data } = await supabase
    .from("jobs")
    .update({
      active: true,
      order: getJobListingOrderPlan(productId),
    })
    .eq("id", jobListingId)
    .select("*")
    .single();

  revalidatePath("/");
  revalidatePath("/jobs");
  revalidatePath(`/jobs/${jobListingId}`);

  return data;
}

export async function activateMCPListing(mcpListingId: string) {
  const supabase = await createClient();

  const { data } = await supabase
    .from("mcps")
    .update({ active: true })
    .eq("id", mcpListingId)
    .select("*")
    .single();

  revalidatePath("/");
  revalidatePath("/mcp");

  return data;
}

export async function downgradeMCPListing(mcpListingId: string) {
  const supabase = await createClient();

  await supabase
    .from("mcps")
    .update({ plan: "standard" })
    .eq("id", mcpListingId);

  revalidatePath("/");
  revalidatePath("/mcp");
}
