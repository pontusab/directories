import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { EditProfileModal } from "../modals/edit-profile-modal";
import { Followers } from "./followers";

export function ProfileHeader({
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
}: {
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
        <Followers />
      </div>

      {isOwner && (
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
      )}
    </div>
  );
}
