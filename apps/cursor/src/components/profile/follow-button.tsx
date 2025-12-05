"use client";

import { toggleFollowAction } from "@/actions/toggle-follow-action";
import { createClient } from "@/utils/supabase/client";
import { isAuthenticated as isAuthenticatedClient } from "@/utils/supabase/client-session";
import { useAction } from "next-safe-action/hooks";
import { useEffect, useState } from "react";
import { SignInModal } from "../modals/sign-in-modal";
import { Button } from "../ui/button";

type Props = {
  slug: string;
  id: string;
};

export function FollowButton({ slug, id }: Props) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const followAction = useAction(toggleFollowAction);
  const [isFollowing, setIsFollowing] = useState(false);
  const supabase = createClient();

  useEffect(() => {
    setIsAuthenticated(isAuthenticatedClient());
  }, []);

  useEffect(() => {
    const fetchIsFollowing = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      setIsFollowing(false);
      const { data } = await supabase
        .from("followers")
        .select("id")
        .eq("follower_id", session?.user?.id)
        .eq("following_id", id)
        .maybeSingle();

      if (data) {
        setIsFollowing(true);
      }
    };

    fetchIsFollowing();
  }, [id]);

  const handleFollow = () => {
    if (!isAuthenticated) {
      setIsSignInModalOpen(true);
      return;
    }

    followAction.execute({
      userId: id,
      action: isFollowing ? "unfollow" : "follow",
      slug,
    });

    setIsFollowing(!isFollowing);
  };

  return (
    <>
      <Button
        className="rounded-full"
        onClick={handleFollow}
        variant={isFollowing ? "outline" : "default"}
        disabled={followAction.isExecuting}
      >
        {isFollowing ? "Following" : "Follow"}
      </Button>
      <SignInModal
        redirectTo={`/u/${slug}`}
        isOpen={isSignInModalOpen}
        setIsOpen={setIsSignInModalOpen}
      />
    </>
  );
}
