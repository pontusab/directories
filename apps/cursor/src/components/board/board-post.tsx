import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import { BoardVotes } from "./board-votes";

export interface BoardPostProps {
  post_id: number;
  title: string;
  has_voted: boolean;
  url?: string;
  content: string;
  user_name?: string;
  user_avatar?: string;
  vote_count?: number;
  created_at?: string;
  user_slug?: string;
  slug: string;
}

export function BoardPost({
  post_id,
  title,
  has_voted,
  content,
  user_avatar,
  user_name,
  vote_count = 0,
  url,
  created_at = "Just now",
  user_slug,
}: BoardPostProps) {
  return (
    <Card className="p-0 border-none bg-transparent">
      <CardHeader className="p-0 space-y-2">
        <Link href={`/u/${user_slug}`} className="flex items-center gap-2">
          <Avatar className="size-4 rounded-none">
            {user_avatar ? (
              <AvatarImage src={user_avatar} alt={user_name} />
            ) : (
              <AvatarFallback className="bg-accent">
                {user_name?.charAt(0)}
              </AvatarFallback>
            )}
          </Avatar>
          <div className="flex flex-row space-x-1">
            <CardTitle className="text-xs text-[#878787] font-mono">
              {user_name}
            </CardTitle>
            {/* <span className="text-xs text-[#878787] font-mono">•</span> */}
            {/* <span className="text-xs text-[#878787] font-mono">
              {formatDistanceToNow(new Date(created_at), {
                addSuffix: true,
              })}
            </span> */}
          </div>
        </Link>
        <div className="flex flex-row justify-between">
          <CardTitle className="text-md font-normal flex items-center gap-2">
            <span>
              {url ? (
                <a
                  href={`${url}?utm_source=cursor.directory&utm_medium=board`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {title}
                </a>
              ) : (
                title
              )}
            </span>
            {url && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={17}
                fill="none"
                className="hidden md:block"
              >
                <mask id="a" width={16} height={17}>
                  <path fill="#D9D9D9" d="M0 .5h16v16H0z" />
                </mask>
                <g mask="url(#a)">
                  <path
                    fill="#878787"
                    d="M7.205 11.526H4.692c-.837 0-1.55-.295-2.14-.885a2.915 2.915 0 0 1-.885-2.14c0-.838.295-1.551.885-2.141a2.916 2.916 0 0 1 2.14-.886h2.513v1H4.692c-.56 0-1.037.198-1.432.593A1.952 1.952 0 0 0 2.667 8.5c0 .56.197 1.037.593 1.433.395.395.873.593 1.432.593h2.513v1ZM5.5 9V8h5v1h-5Zm3.295 2.526v-1h2.513c.56 0 1.037-.198 1.432-.593.396-.396.593-.873.593-1.433s-.197-1.037-.593-1.433a1.952 1.952 0 0 0-1.432-.593H8.795v-1h2.513c.837 0 1.55.295 2.14.885.59.59.885 1.304.885 2.14 0 .838-.295 1.551-.885 2.141-.59.59-1.303.886-2.14.886H8.795Z"
                  />
                </g>
              </svg>
            )}
          </CardTitle>

          <BoardVotes
            votes={vote_count}
            postId={post_id}
            hasVoted={has_voted}
          />
        </div>
      </CardHeader>

      <CardContent className="p-0 mt-2 pr-24">
        <p className="text-sm line-clamp-2">{content}</p>
      </CardContent>
    </Card>
  );
}
