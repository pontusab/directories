import Link from "next/link";
import { BoardPost, type BoardPostProps } from "../board/board-post";
import { Button } from "../ui/button";

export function ProfilePosts({
  data,
  isOwner,
}: {
  data: BoardPostProps[];
  isOwner: boolean;
}) {
  if (!data?.length) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center h-full mt-12">
        <p className="text-[#878787] mb-4 text-sm font-mono">
          No posts added yet
        </p>

        {isOwner && (
          <Link href="/board">
            <Button variant="outline" className="border-border rounded-full">
              Add post
            </Button>
          </Link>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-10">
      {data?.map((post) => (
        // @ts-ignore
        <div key={post.id}>
          <BoardPost {...post} />
        </div>
      ))}
    </div>
  );
}
