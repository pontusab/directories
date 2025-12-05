"use client";

import { MembersCard } from "./members-card";

export function MembersList({ members }: { members: unknown[] | null }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {members?.map((member) => (
        // @ts-ignore
        <MembersCard key={member.id} member={member} />
      ))}
    </div>
  );
}
