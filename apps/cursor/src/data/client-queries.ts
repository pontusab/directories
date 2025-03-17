import { createClient } from "@/utils/supabase/client";

export async function getMCPsClient({
  page = 1,
  limit = 36,
  search,
}: {
  page?: number;
  limit?: number;
  search?: string | null;
} = {}) {
  const supabase = createClient();
  const query = supabase
    .from("mcps")
    .select("*")
    .eq("active", true)
    .order("company_id", { ascending: true, nullsFirst: false })
    .limit(limit)
    .range((page - 1) * limit, page * limit - 1);

  if (search) {
    query.textSearch("fts", `%${search}%:*`);
  }

  const { data, error } = await query;

  return { data, error };
}
