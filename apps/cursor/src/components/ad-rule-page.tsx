"use client";

import type { Ad } from "@/data/ads";
import { useOpenPanel } from "@openpanel/nextjs";
import Image from "next/image";
import { useEffect } from "react";

export function AdRulePage({ ad }: { ad: Ad }) {
  const op = useOpenPanel();

  useEffect(() => {
    op.track("ad_rule_page_viewed", {
      ad_id: ad.title,
      ad_url: ad.link,
      type: "ad_rule_page",
    });
  }, [ad]);

  return (
    <div className="flex flex-col border border-border p-3 py-2">
      <a
        href={ad.link}
        target="_blank"
        rel="noopener noreferrer"
        className="h-full"
        onClick={() => {
          op.track("ad_rule_page_clicked", {
            ad_id: ad.id,
            ad_url: ad.link,
            type: "ad_rule_page",
          });
        }}
      >
        <div className="flex items-center gap-2">
          <div className="size-6 rounded-full overflow-hidden">
            <Image
              quality={100}
              src={ad.logoUrl}
              alt={`${ad.title} logo`}
              className="object-contain"
              width={32}
              height={32}
            />
          </div>
          <div>
            <span className="truncate text-xs">{ad.title}</span>
            <div className="h-full overflow-y-auto text-xs text-[#878787]">
              {ad.description}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
