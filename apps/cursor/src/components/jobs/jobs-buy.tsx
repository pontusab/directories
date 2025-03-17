import { Button } from "@/components/ui/button";
import Link from "next/link";

export function JobsBuy() {
  return (
    <div className="relative min-h-[250px] md:min-h-[340px] md:max-w-[350px] flex bg-black p-4 sm:p-6">
      <div
        className="absolute inset-0 border border-border"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -60deg,
            transparent,
            transparent 1px,
            #2C2C2C 1px,
            #2C2C2C 2px,
            transparent 2px,
            transparent 6px
          )`,
        }}
      />

      <div className="relative z-10 text-white">
        <h1 className="text-3xl sm:text-4xl tracking-tight">
          Reach 250k+ developers per <br />
          month.
        </h1>

        <p className="text-sm text-[#878787] mt-4">
          Connect with top talent and grow your team
          <br /> faster by reaching a dedicated community of
          <br /> developers.
        </p>

        <Link href="/jobs/new">
          <Button
            className="font-mono mt-12 text-sm h-9 rounded-full border-white bg-transparent hover:bg-white hover:text-black transition-colors"
            variant="outline"
          >
            Add job listing
          </Button>
        </Link>
      </div>
    </div>
  );
}
