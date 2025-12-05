import { MembersCard } from "@/components/members/members-card";
import { ProfileTop } from "@/components/profile/profile-top";
import { getUserFollowing, getUserProfile } from "@/data/queries";
import { getSession } from "@/utils/supabase/auth";
import { redirect } from "next/navigation";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;

  const { data } = await getUserProfile(slug);

  return {
    title: `${data?.name}'s Following | Cursor Directory`,
  };
}

export default async function Page({ params }: { params: Params }) {
  const { slug } = await params;

  const { data } = await getUserProfile(slug);

  const { data: following } = await getUserFollowing(data?.id);
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  if (!data) {
    return (
      <div className="flex justify-center items-center -mt-28 w-full h-screen text-sm text-[#878787]">
        User not found
      </div>
    );
  }

  return (
    <div className="flex mx-auto max-w-4xl min-h-screen w-full md:mt-28 mt-14 px-6 lg:px-0">
      <div className="w-full">
        <ProfileTop data={data} isOwner={false} />

        <div className="mt-10">
          <h3 className="text-lg font-mono">Following</h3>
          <div className="flex flex-col gap-2 mt-4">
            {following?.length === 0 && (
              <div className="text-sm text-[#878787]">No following</div>
            )}
            {following?.map((user) => (
              <MembersCard
                // @ts-ignore
                key={user.following.id}
                // @ts-ignore
                member={user.following}
                noBorder
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
