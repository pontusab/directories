import { motion } from "framer-motion";
import { CopyIcon, ShareIcon } from "lucide-react";
import { useEffect, useRef } from "react";

interface GeneratedResultsProps {
  result: string;
  onNew: () => void;
}

export function GeneratedResults({ result, onNew }: GeneratedResultsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [result]);

  const handleShare = () => {
    const tweetText =
      "✨ I just generated my optimized cursor rules with @cursordirectory!\n\nCreate your own at cursor.directory";
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      tweetText,
    )}`;
    window.open(
      twitterUrl,
      "TwitterShare",
      "width=600,height=400,resizable=yes",
    );
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-[210mm] mx-auto shadow-md fixed top-0 left-0 right-0 pt-16 bg-[#161515] h-[85vh] glass"
      >
        <div className="flex flex-col w-full h-20 border-b border-border border-dashed justify-between px-4">
          <span className="text-[11px] text-primary font-mono text-center mt-4">
            Generated by cursor.directory
          </span>

          <div className="flex items-center justify-between mb-4">
            <span className="text-[11px] text-[#878787] font-mono">
              Optimzed rules
            </span>

            <span className="text-[11px] text-[#878787] font-mono">
              {new Date().toLocaleString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit",
                hour12: true,
              })}
            </span>
          </div>
        </div>

        <div className="p-8 overflow-auto h-[calc(100%-80px)]" ref={scrollRef}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="whitespace-pre-wrap font-mono text-sm text-[#878787]"
          >
            {result}
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-8 flex items-end overflow-hidden">
          <div className="flex gap-[1px] px-1">
            {Array.from({ length: 80 }).map((_, i) => (
              <div
                key={i.toString()}
                className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[10px] border-b-background"
              />
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 20, stiffness: 300, delay: 0.5 }}
        className="fixed bottom-10 left-0 right-0 bg-[#121212] p-3 w-full max-w-[210mm] mx-auto border border-border"
      >
        <div className="flex justify-between">
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => navigator.clipboard.writeText(result)}
              className="px-4 py-2 rounded-full text-sm text-primary border border-border transition-colors flex items-center gap-2 h-[32px]"
            >
              <span>Copy</span>
              <CopyIcon className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={handleShare}
              className="px-4 py-2 rounded-full text-sm text-primary border border-border transition-colors flex items-center gap-2 h-[32px]"
            >
              <span>Share</span>
              <ShareIcon className="w-4 h-4" />
            </button>
          </div>
          <button
            type="button"
            onClick={onNew}
            className="bg-white text-black px-4 py-2 rounded-full flex items-center justify-center font-medium text-sm h-[32px]"
          >
            Generate New
          </button>
        </div>
      </motion.div>
    </div>
  );
}
