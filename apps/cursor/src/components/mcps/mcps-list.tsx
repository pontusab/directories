"use client";

import { getMCPsClient } from "@/data/client-queries";
import { useQueryState } from "nuqs";
import { useCallback, useEffect, useRef, useState } from "react";
import { SearchInput } from "../search-input";
import { Button } from "../ui/button";
import { MCPsCard } from "./mcps-card";
import type { MCP } from "./mcps-featured";

export function MCPsList({ data }: { data?: MCP[] | null }) {
  const [mcps, setMcps] = useState<MCP[]>(data ?? []);
  const [search, setSearch] = useQueryState("q");
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef<IntersectionObserver | null>(null);

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 150);

    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    async function searchData() {
      const { data } = await getMCPsClient({
        page: 1,
        search: debouncedSearch,
      });

      if (data) {
        setMcps(data);
      }
    }

    if (debouncedSearch && debouncedSearch?.length > 0) {
      searchData();
    } else {
      setMcps(data ?? []);
    }
  }, [debouncedSearch, data]);

  // Function to load more MCPs
  const loadMoreMCPs = useCallback(async () => {
    if (loading || !hasMore || debouncedSearch) return;

    setLoading(true);
    try {
      const nextPage = page + 1;
      const { data: newData, error } = await getMCPsClient({
        page: nextPage,
        limit: 36 * 2,
      });

      if (error) {
        console.error("Error fetching more MCPs:", error);
        return;
      }

      if (newData && newData.length > 0) {
        // Filter out any MCPs that already exist in the current list
        const existingIds = new Set(mcps.map((mcp) => mcp.id));
        const uniqueNewData = newData.filter((mcp) => !existingIds.has(mcp.id));

        if (uniqueNewData.length > 0) {
          setMcps((prevMcps) => [...prevMcps, ...uniqueNewData]);
          setPage(nextPage);
        } else {
          // If we received data but all IDs were duplicates, we've reached the end
          setHasMore(false);
        }
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Failed to fetch more MCPs:", error);
    } finally {
      setLoading(false);
    }
  }, [page, loading, hasMore, debouncedSearch, mcps]);

  // Setup intersection observer for infinite scroll
  const lastMCPElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMoreMCPs();
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore, loadMoreMCPs],
  );

  return (
    <div className="mt-8">
      <SearchInput
        placeholder="Search 1800+ MCPs"
        className="border-l-0 border-r-0 border-t-0 border-b-[1px] border-border px-0"
      />

      {mcps.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
          {mcps.map((mcp, index) => (
            <div
              key={mcp.id}
              ref={index === mcps.length - 1 ? lastMCPElementRef : undefined}
            >
              <MCPsCard data={mcp} />
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-24 flex flex-col items-center">
          <div className="text-center text-sm text-[#878787]">
            No MCPs found
          </div>

          <Button
            variant="outline"
            className="mt-4 rounded-full border-border"
            onClick={() => setSearch(null)}
          >
            Clear search
          </Button>
        </div>
      )}

      {loading && (
        <div className="mt-8 text-center text-sm text-[#878787]">
          Loading more MCPs...
        </div>
      )}
    </div>
  );
}
