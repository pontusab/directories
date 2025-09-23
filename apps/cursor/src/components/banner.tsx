"use client";

import { useOpenPanel } from "@openpanel/nextjs";
import { XIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Banner() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const pathname = usePathname();
  const op = useOpenPanel();

  useEffect(() => {
    setCurrentBannerIndex(Math.floor(Math.random() * 2));
  }, []);

  const [isAnimating, setIsAnimating] = useState(true); // Start as true
  const [animateDirection, setAnimateDirection] = useState<"up" | "down">("up");

  const banners = [
    {
      id: "coderabbit",
      href: "https://coderabbit.link/cdir",
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={32} // Reduced width
          height={28} // Reduced height maintaining aspect ratio (approx 94/82)
          fill="none"
          className="absolute left-4 top-5" // Added positioning like other logos
          viewBox="0 0 94 82" // Added viewBox to scale correctly
        >
          <path
            fill="#FF570A"
            fillRule="evenodd"
            d="M49.45.297C73.526 1.41 93.007 21.056 93.955 45.15v-.02c.411 10.996-2.966 21.17-8.917 29.345-3.42 4.696-8.938 7.373-14.746 7.373h-2.45c.226-.536.7-2.183-.412-3.666-.49-.652-1.33-1.04-2.207-1.445-1.56-.719-3.23-1.49-3.23-3.889 0-7.441 5.595-10.317 11.58-13.394 6.884-3.54 14.286-7.345 14.286-18.67 0 0-8.176-10.44-18.452-11.038-6.631-.391-8.238.494-8.526 1.153-.412-3.418-3.336-19.255-23.538-22.611 1.775 11.35 6.51 14.431 11.099 17.417 3.237 2.106 6.401 4.165 8.403 9.045 0 0-10.585-14.374-27.987-9.081 0 0 6.343 13.303 25.104 16.021 0 0 1.503 5.149 1.956 6.055 0 0-28.893-15.054-37.665 13.839-4.387-.878-5.318 1.43-5.71 2.4l-.036.092s-1.36 4.324 4.53 7.949c0 0 1.277-5.066 4.387-6.57 0 0-6.672 7.435 1.174 16.331a18.42 18.42 0 0 1-13.407-7.64C3.713 66.506.5 57.136.5 47.004.5 20.459 22.617-.918 49.45.297Zm5.903 76.246c2.005 2.382 3.938 4.678 5.898 5.326H50.748c.618-1.03 3.83-7.064-3.727-11.615 3.04 0 5.746 3.215 8.332 6.289Z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "CodeRabbit",
      description:
        "AI Code Reviews. Spot bugs, 1-click fixes, refactor effortlessly. ↗",
    },
    {
      id: "braingrid",
      href: "https://dub.sh/qNdeluS",
      logo: (
        <img
          src="https://pub-abe1cd4008f5412abb77357f87d7d7bb.r2.dev/ads-braingrid-logo.svg"
          alt="BrainGrid"
          className="absolute left-4 top-5"
          width={32}
          height={32}
        />
      ),
      title: "BrainGrid AI",
      description:
        "Ship 100x faster with Cursor - AI-Powered Requirements & Task Management for Developers. ↗",
    },
    {
      id: "keboola",
      href: "https://go.midday.ai/DzbAojh",
      logo: (
        <img
          src="https://pub-abe1cd4008f5412abb77357f87d7d7bb.r2.dev/ads-keboola-logo.webp"
          alt="Keboola MCP"
          className="absolute left-4 top-5"
          width={32}
          height={32}
        />
      ),
      title: "Keboola MCP",
      description:
        "From words to production data pipelines and trusted analyses. Governed, secure, and deterministic—never shadow AI. ↗",
    },
  ];

  useEffect(() => {
    // Show banner after 2s delay on pathname change
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    if (!isVisible) return;

    // Initial animation up
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);

    const switchBanner = () => {
      setIsAnimating(true);
      setAnimateDirection("down");
      // Animate current banner down
      setTimeout(() => {
        setCurrentBannerIndex((prev) => (prev + 1) % banners.length);
        setAnimateDirection("up");
        // Animate next banner up
        setTimeout(() => {
          setIsAnimating(false);
        }, 300);
      }, 300);
    };

    // Initial switch after 8 seconds
    const timer = setTimeout(switchBanner, 8000);

    // Set up recurring switches every 16 seconds
    const interval = setInterval(switchBanner, 16000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [isVisible]);

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsAnimating(true);
    setAnimateDirection("down");
    setTimeout(() => {
      setIsVisible(false);
      setIsAnimating(false);
    }, 300);
  };

  const slideClass = isAnimating
    ? animateDirection === "down"
      ? "animate-out slide-out-to-bottom duration-300"
      : "animate-in slide-in-from-bottom-full duration-300"
    : "";

  const currentBanner = banners[currentBannerIndex];

  if (!isVisible) return null;

  // Hide banner on /generate page
  if (
    pathname === "/generate" ||
    pathname.includes("/games") ||
    pathname.includes("/board") ||
    pathname.endsWith("/new") ||
    pathname.endsWith("/edit")
  ) {
    return null;
  }

  return (
    <a
      href={currentBanner.href}
      target="_blank"
      rel="noreferrer"
      onClick={() => {
        op.track("banner_clicked", {
          banner_id: currentBanner.id,
          banner_url: currentBanner.href,
          type: "banner",
        });
      }}
    >
      <div
        className={`fixed overflow-hidden ${slideClass} z-50 bottom-4 md:bottom-4 left-4 md:left-auto right-4 md:right-4 w-[calc(100vw-32px)] md:w-[calc(100vw-16px)] md:max-w-[370px] border border-border p-4 transition-all bg-background h-[95px] group`}
      >
        {currentBanner.logo}

        <div className="flex justify-between">
          <div className="flex flex-col space-y-0.5 pl-[40px]">
            <div className="flex space-x-2 items-center">
              <span className="text-sm font-medium">{currentBanner.title}</span>
            </div>
            <p className="text-xs text-[#878787]">
              {currentBanner.description}
            </p>
          </div>

          <button
            type="button"
            className="absolute right-1.5 top-1.5 text-[#878787] hidden group-hover:block"
            onClick={handleClose}
          >
            <XIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </a>
  );
}
