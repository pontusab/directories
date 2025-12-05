"use client";

import { formatNumber } from "@/utils/format";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Link from "next/link";
import { EditProfileModal } from "../modals/edit-profile-modal";
import { FollowButton } from "./follow-button";

export function ProfileHeader({
  id,
  image,
  name,
  status,
  isOwner,
  bio,
  work,
  website,
  social_x_link,
  is_public,
  slug,
  following_count,
  followers_count,
}: {
  id: string;
  image?: string;
  status?: string;
  name: string;
  isOwner: boolean;
  bio?: string;
  work?: string;
  website?: string;
  social_x_link?: string;
  is_public?: boolean;
  slug: string;
  is_following: boolean;
  following_count: number;
  followers_count: number;
}) {
  return (
    <div className="flex items-center gap-4">
      <Avatar className="size-24 border-border border flex items-center justify-center">
        <AvatarImage src={image} />

        <AvatarFallback className="text-sm font-mono">
          {name?.charAt(0)}
        </AvatarFallback>
      </Avatar>

      <div className="flex flex-col">
        <h2 className="text-xl font-mono">{name}</h2>
        <span className="text-sm font-mono text-[#878787]">{status}</span>
        <div className="flex gap-6 mt-2">
          <Link href={`/u/${slug}/following`}>
            <span className="text-xs font-mono text-[#878787]">
              {formatNumber(following_count)} Following
            </span>
          </Link>
          <Link href={`/u/${slug}/followers`}>
            <span className="text-xs font-mono text-[#878787]">
              {formatNumber(followers_count)} Followers
            </span>
          </Link>
        </div>
      </div>

      {isOwner ? (
        <div className="ml-auto">
          <EditProfileModal
            data={{
              name,
              status,
              bio,
              work,
              website,
              social_x_link,
              is_public,
              slug,
            }}
          />
        </div>
      ) : (
        <div className="ml-auto">
          <FollowButton slug={slug} id={id} />
        </div>
      )}
    </div>
  );
}
