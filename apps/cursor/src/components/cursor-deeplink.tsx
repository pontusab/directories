"use client";

type Props = {
  mcp_link: string | null;
};

export function CursorDeepLink({ mcp_link }: Props) {
  if (!mcp_link) {
    return null;
  }

  return (
    <a href={mcp_link} target="_blank" rel="noreferrer">
      <img
        src="https://cursor.com/deeplink/mcp-install-light.svg"
        alt="Add  MCP server to Cursor"
        height="32"
      />
    </a>
  );
}
