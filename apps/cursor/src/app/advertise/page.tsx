import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Advertise on Cursor Directory",
  description:
    "Reach over 120,000 developers monthly and showcase your product or service on Cursor Directory, the community-driven platform for Cursor AI rules and prompts.",
};

export default function Advertise() {
  return (
    <>
      <div className="flex flex-col items-center justify-center max-w-screen-md mx-auto px-6 py-12 pb-32">
        <h1 className="text-4xl mb-12 mt-20 text-center">
          Advertise on <br />
          Cursor Directory
        </h1>

        <div className="space-y-12 mt-10">
          <section>
            <h2 className="text-xl mb-2">
              Reach an Engaged Developer Audience
            </h2>
            <p className="text-[#878787] leading-relaxed text-sm">
              Cursor Directory attracts over{" "}
              <a
                href="https://dashboard.openpanel.dev/share/overview/a5hhbY?range=6m"
                className="text-primary border-border border-dashed border-b-[1px]"
                target="_blank"
                rel="noopener noreferrer"
              >
                250,000 unique visitors monthly
              </a>{" "}
              - and we're growing steadily. Our audience consists of developers,
              engineering leaders, and technical decision-makers who are
              actively seeking ways to improve their development workflow and
              productivity.
            </p>
          </section>

          <section>
            <h2 className="text-xl mb-2">Why Advertise With Us</h2>
            <p className="text-[#878787] leading-relaxed text-sm">
              Our community is highly engaged with developer tools, AI
              solutions, and productivity enhancers. If you're offering
              developer tools, APIs, cloud services, or any tech product, our
              platform provides direct access to your ideal audience. Our users
              are early adopters who actively influence technology choices
              within their organizations.
            </p>
          </section>

          <section>
            <h2 className="text-xl mb-2">Our Audience</h2>
            <p className="text-[#878787] leading-relaxed text-sm">
              • Software Engineers & Developers (65%)
              <br />• Technical Leaders & Engineering Managers (20%)
              <br />• Startup Founders & CTOs (10%)
              <br />• Other Technical Professionals (5%)
              <br />
              <br />
              Our visitors come from leading tech companies, innovative
              startups, and development agencies worldwide, all united by their
              interest in AI-enhanced development tools and workflow
              optimization.
              <br />
              <br />
              View our{" "}
              <a
                href="https://dashboard.openpanel.dev/share/overview/a5hhbY?range=30d"
                className="text-primary border-border border-dashed border-b-[1px]"
                target="_blank"
                rel="noopener noreferrer"
              >
                real-time analytics dashboard
              </a>{" "}
              for up-to-date visitor statistics.
            </p>
          </section>

          <section>
            <h2 className="text-xl mb-2">Advertising Options</h2>
            <p className="text-[#878787] leading-relaxed text-sm">
              We offer various advertising opportunities including:
              <br />• Featured listings in our directory
              <br />• Sponsored content and tutorials
              <br />• Newsletter sponsorships
              <br />• Custom partnership opportunities
              <br />
              <br />
              Contact Pontus at{" "}
              <a
                href="https://twitter.com/pontusab"
                className="text-primary border-border border-dashed border-b-[1px]"
              >
                @pontusab
              </a>{" "}
              to discuss how we can help you reach our engaged developer
              community.
            </p>

            <p className="text-primary mt-8 text-sm w-full">
              <Button asChild className="w-full">
                <a href="https://buy.polar.sh/polar_cl_XZNMJtIvsTBndqeeVF5Xf1CNMBzpb0N69IpOc0hhCpX">
                  Buy ad slot
                </a>
              </Button>
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
