import { Card, CardContent } from "@/components/ui/card";

import { cn } from "@/lib/utils";
import type { Rule } from "@directories/data/rules";
import Link from "next/link";
import { CopyButton } from "./copy-button";
import { SaveRuleButton } from "./save-rule-button";
import { ShareButton } from "./share-button";

export function RuleCard({ rule, isPage }: { rule: Rule; isPage?: boolean }) {
  return (
    <Card
      className={cn(
        "bg-background p-4 flex flex-col aspect-square max-h-[calc(100vh-8rem)]",
      )}
    >
      <CardContent
        className={cn(
          "bg-card h-full mb-2 font-mono p-4 pr-1 text-sm opacity-50 hover:opacity-100 transition-opacity group relative flex-grow",
          isPage && "opacity-100",
        )}
      >
        <div className="group-hover:flex hidden right-4 bottom-4 absolute z-10 space-x-2">
          <ShareButton slug={rule.slug} />
          <CopyButton content={rule.content} slug={rule.slug} />
          <SaveRuleButton content={rule.content} slug={rule.slug} />
        </div>

        <Link href={`/${rule.slug}`}>
          <div className="h-full overflow-y-auto">
            <code className="text-sm block pr-3">{rule.content}</code>
          </div>
        </Link>
      </CardContent>
    </Card>
  );
}
