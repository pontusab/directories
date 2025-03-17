import { MCPForm } from "@/components/forms/mcp";
import { GithubSignin } from "@/components/github-signin";
import { GoogleSignin } from "@/components/google-signin";
import { getSession } from "@/utils/supabase/auth";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add a new MCP | Cursor Directory",
  description:
    "Add a new MCP to Cursor Directory and reach 250k+ developers today.",
};

export default async function Page() {
  const session = await getSession();

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 w-full max-w-sm mx-auto">
        <div className="max-w-md w-full text-center -mt-32">
          <p className="text-md mt-4">
            Sign in to add a new MCP <br />
            and reach 250k+ developers today.
          </p>

          <div className="mt-10 flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <GithubSignin redirectTo="/mcp/new" />
              <GoogleSignin redirectTo="/mcp/new" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-screen-sm xl:max-w-screen-sm border-t border-border pt-32 pb-16">
      <h1 className="text-2xl mb-4">Add a new MCP</h1>
      <MCPForm />
    </div>
  );
}
