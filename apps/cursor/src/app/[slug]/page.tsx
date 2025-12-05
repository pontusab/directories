import { Menu } from "@/components/menu";
import { RuleCard } from "@/components/rule-card";
import { RuleSidebar } from "@/components/rule-sidebar";
import { getRuleBySlug, rules } from "@directories/data/rules";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const rule = getRuleBySlug(slug);

  return {
    title: `${rule?.title} rule by ${rule?.author?.name}`,
    description: rule?.content,
  };
}

export async function generateStaticParams() {
  return rules.map((rule) => ({
    slug: rule.slug,
  }));
}

export default async function Page({ params }: { params: Params }) {
  const { slug } = await params;
  const rule = getRuleBySlug(slug);

  if (!rule) {
    return <div>Rule not found</div>;
  }

  return (
    <div className="flex w-full h-full">
      <div className="hidden md:flex mt-12 sticky top-12 h-[calc(100vh-3rem)]">
        <Menu />
      </div>

      <main className="flex-1 p-6 pt-24 flex flex-col-reverse xl:flex-row gap-4 xl:gap-8">
        <div className="w-full max-w-[1000px]">
          <RuleCard rule={rule} isPage={true} />
        </div>
        <div className="w-full lg:w-auto lg:flex-shrink-0">
          <RuleSidebar rule={rule} />
        </div>
      </main>
    </div>
  );
}

export const revalidate = 86400; // Revalidate every 24 hours (86400 seconds)
