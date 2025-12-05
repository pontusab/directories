import { ProfileHeader } from "./profile-header";
import { ProfileHero } from "./profile-hero";

export function ProfileTop({
  data,
  isOwner,
}: {
  data: {
    id: string;
    hero: string;
    image: string;
    name: string;
    status: string;
    bio: string;
    work: string;
    website: string;
    social_x_link: string;
    public: boolean;
    slug: string;
    is_following: boolean;
    following_count: number;
    followers_count: number;
  };
  isOwner: boolean;
}) {
  return (
    <>
      <ProfileHero userId={data?.id} isOwner={isOwner} hero={data?.hero} />
      <ProfileHeader
        id={data?.id}
        image={data?.image}
        name={data?.name}
        status={data?.status}
        isOwner={isOwner}
        bio={data?.bio}
        work={data?.work}
        website={data?.website}
        social_x_link={data?.social_x_link}
        is_public={data?.public}
        slug={data?.slug}
        is_following={data?.is_following}
        following_count={data?.following_count}
        followers_count={data?.followers_count}
      />
    </>
  );
}
