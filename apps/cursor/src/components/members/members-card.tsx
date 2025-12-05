"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function MembersCard({
  member,
  gray = false,
  noBorder = false,
}: {
  member: {
    slug: string;
    image: string;
    name: string;
  };
  gray?: boolean;
  noBorder?: boolean;
}) {
  return (
    <Link
      href={`/u/${member.slug}`}
      className={cn(
        "flex border border-border p-2 items-center gap-2 group",
        noBorder && "border-none",
      )}
    >
      <Avatar className="rounded-none">
        <AvatarImage
          src={member.image}
          alt={member.name}
          className={cn(
            "rounded-none",
            gray
              ? "grayscale group-hover:grayscale-0 transition-all duration-300"
              : "",
          )}
        />
        <AvatarFallback className="rounded-none">
          {member.name.charAt(0)}
        </AvatarFallback>
      </Avatar>
      <div className="text-xs text-[#878787] font-mono font-medium">
        {member.name}
      </div>
    </Link>
  );
}
