import { Footer } from "@/emails/components/footer";
import { Logo } from "@/emails/components/logo";
import {
  Body,
  Container,
  Font,
  Head,
  Html,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

export default function FollowerEmail({
  name = "Pontus",
  followerName = "Viktor",
  followerSlug = "viktor",
  followingSlug = "pontus",
}: {
  name: string;
  followerName: string;
  followerSlug: string;
  followingSlug: string;
}) {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Geist Mono"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.googleapis.com/css2?family=Geist+Mono:wght@500&display=swap",
            format: "woff2",
          }}
          fontWeight={500}
          fontStyle="normal"
        />
      </Head>
      <Preview>
        {followerName} is now following you on Cursor Directory!
      </Preview>
      <Tailwind>
        <Body className="bg-white font-mono">
          <Container className="mx-auto py-5 pb-12 max-w-[580px]">
            <Logo />
            <Text className="text-xs leading-7 mb-6 font-mono">Hi {name},</Text>
            <Text className="text-xs leading-7 pb-2 font-mono">
              Great news!{" "}
              <Link
                href={`https://cursor.directory/u/${followerSlug}`}
                className="underline text-black font-mono"
              >
                {followerName}
              </Link>{" "}
              is now following you on Cursor Directory. This means they'll get
              notified when you share new rules and{" "}
              <Link
                href="https://cursor.directory/board"
                className="underline text-black font-mono"
              >
                posts
              </Link>{" "}
              with the community.
            </Text>
            <Text className="text-xs leading-7 pb-2 font-mono">
              Following allows developers to stay connected with creators whose
              work they find valuable. When someone follows you, they're
              expressing interest in your contributions to the Cursor ecosystem.
            </Text>
            <Section className="mt-2">
              <Text className="text-xs leading-7 mb-2 font-mono">
                Why not explore what others are building? You can:
              </Text>
              <Text className="text-xs leading-7 mb-1 font-mono">
                •{" "}
                <Link
                  href="https://cursor.directory/members"
                  className="underline text-black font-mono"
                >
                  Search for developers and creators
                </Link>
              </Text>
              <Text className="text-xs leading-7 mb-1 font-mono">
                •{" "}
                <Link
                  href="https://cursor.directory/board"
                  className="underline text-black font-mono"
                >
                  Discover trending posts
                </Link>
              </Text>

              <Text className="text-xs leading-7 mb-6 font-mono">
                Start exploring:{" "}
                <Link
                  href="https://cursor.directory"
                  className="underline text-black font-mono"
                >
                  cursor.directory
                </Link>
              </Text>
            </Section>
            <Text className="text-xs leading-7 font-mono">
              Looking forward to seeing what you create!
            </Text>
            <Text className="text-xs leading-7 mt-2 font-mono">
              Best,
              <br />
              <Link
                href="https://twitter.com/pontusab"
                className="text-black font-mono text-xs leading-7 underline"
              >
                @Pontus
              </Link>{" "}
              &{" "}
              <Link
                href="https://twitter.com/viktorhofte"
                className="text-black font-mono text-xs leading-7 underline"
              >
                @Viktor
              </Link>
            </Text>
            <Link
              href={`https://cursor.directory/u/${followingSlug}/settings`}
              className="text-xs leading-7 font-mono underline text-black"
            >
              Manage your notification settings
            </Link>
            <br /> <br />
            <Footer />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
