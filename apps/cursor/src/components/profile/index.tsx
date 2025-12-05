import { getUserProfile } from "@/data/queries";
import { getSession } from "@/utils/supabase/auth";
import { format } from "date-fns";
import { Suspense } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { ProfileCompanies } from "./profile-companies";
import { ProfileContent } from "./profile-content";

import { ProfilePosts } from "./profile-posts";
import { ProfileTop } from "./profile-top";

export async function Profile({
  slug,
  isProfilePage = false,
}: {
  slug: string;
  isProfilePage?: boolean;
}) {
  const session = await getSession();
  const { data } = await getUserProfile(
    slug,
    isProfilePage ? session?.user?.id : undefined,
  );

  const isOwner = session?.user?.id === data?.id;

  if (!data) {
    return (
      <div className="flex justify-center items-center -mt-28 w-full h-screen text-sm text-[#878787]">
        User not found
      </div>
    );
  }

  return (
    <div className="w-full">
      <ProfileTop data={data} isOwner={isOwner} />

      <ProfileContent
        bio={data?.bio}
        work={data?.work}
        website={data?.website}
        social_x_link={data?.social_x_link}
      />

      <Tabs defaultValue="posts" className="w-full mt-14">
        <TabsList className="w-full justify-start border-b rounded-none h-12 bg-transparent p-0 gap-2">
          <TabsTrigger
            value="posts"
            className="rounded-none h-full data-[state=active]:border-b-2 data-[state=active]:border-primary px-0"
          >
            Posts
          </TabsTrigger>
          <TabsTrigger
            value="companies"
            className="rounded-none h-full data-[state=active]:border-b-2 data-[state=active]:border-primary"
          >
            Companies
          </TabsTrigger>
        </TabsList>

        <TabsContent value="posts" className="mt-6 space-y-10 min-h-[300px]">
          {/* @ts-ignore */}
          <ProfilePosts data={data?.posts} isOwner={isOwner} />
        </TabsContent>

        <TabsContent value="companies" className="mt-6 min-h-[300px]">
          <Suspense fallback={<div>Loading...</div>}>
            <ProfileCompanies userId={data?.id} isOwner={isOwner} />
          </Suspense>
        </TabsContent>
      </Tabs>

      <div className="text-sm text-[#878787] flex justify-between items-center border-t border-border pt-6 mt-10">
        <span>Joined Cursor Directory</span>
        {format(new Date(data?.created_at), "MMM d, yyyy")}
      </div>
    </div>
  );
}
