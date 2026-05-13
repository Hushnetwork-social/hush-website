import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  ClipboardCheck,
  FileCheck2,
  FileSearch,
  Gavel,
  KeyRound,
  LockKeyhole,
  ShieldCheck,
  Users,
  Vote,
} from "lucide-react";
import { createPageMetadata, hushVotingJsonLd } from "@/app/seo";
import Navbar from "@/components/Navbar";
import { StructuredData } from "@/components/StructuredData";
import {
  IconCard,
  PageFooter,
  PrimaryLink,
  ProductIcon,
  SecondaryLink,
  SectionHeader,
  SiteBackground,
  Surface,
} from "@/components/Marketing";

export const metadata = createPageMetadata({
  title: "HushVoting! | Online Voting Software For Associations",
  description:
    "Privacy-first online voting software for associations, clubs, cooperatives, NGOs, and federations that need secret-ballot workflows, eligibility checkoff, trustee options, and audit-ready evidence.",
  path: "/hush-voting",
  image: "voting",
  keywords: [
    "HushVoting",
    "online voting",
    "online voting for associations",
    "online voting software for associations",
    "election software",
    "private online voting",
    "secret ballot online voting",
    "privacy-first voting software",
    "association voting",
    "club voting",
    "member voting software",
    "trustee online voting",
  ],
});

const workflow = [
  {
    step: "01",
    title: "Eligibility and checkoff",
    text: "The organization controls the eligible voter list and can confirm that a voting right has been consumed.",
  },
  {
    step: "02",
    title: "Anonymous ballot box",
    text: "The protected ballot artifact is separated from the voter identity surface, following the paper-equivalent model.",
  },
  {
    step: "03",
    title: "Governed tally release",
    text: "Admin-only elections use a simpler governance model; trustee-threshold elections require configured trustee participation.",
  },
  {
    step: "04",
    title: "Final result and audit package",
    text: "The ordinary path releases final aggregate results and evidence artifacts rather than live plaintext ballot feeds.",
  },
] as const;

const HUSH_VOTING_VIDEO_SRC = "/videos/hushvoting-launch-video.mp4";

const seoGuides = [
  {
    href: "/hush-voting/online-voting-for-associations",
    title: "Online voting for associations",
    text: "For clubs, cooperatives, NGOs, federations, and member organizations.",
  },
  {
    href: "/hush-voting/secret-ballot-online-voting",
    title: "Secret-ballot online voting",
    text: "How HushVoting! separates checkoff from ballot choice without overclaiming anonymity.",
  },
  {
    href: "/hush-voting/election-software-vs-survey-tools",
    title: "Election software vs survey tools",
    text: "Why serious organizational votes need more than a form or meeting poll.",
  },
  {
    href: "/technology/verifiable-voting",
    title: "Verifiable voting evidence",
    text: "Technical posture, audit artifacts, and current validation limits.",
  },
  {
    href: "/hush-voting/board-election-software",
    title: "Board election software",
    text: "For board, committee, trustee, and sensitive governance elections.",
  },
  {
    href: "/hush-voting/online-voting-switzerland",
    title: "Online voting Switzerland",
    text: "Swiss private-organizational voting without public-election compliance overclaims.",
  },
] as const;

export default function HushVotingPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <StructuredData data={hushVotingJsonLd} />
      <SiteBackground />
      <Navbar />

      <section className="relative px-6 pb-16 pt-32">
        <div className="absolute right-0 top-20 hidden h-[30rem] w-[30rem] opacity-[0.18] lg:block">
          <ProductIcon product="voting" alt="" className="h-full w-full" />
        </div>
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="max-w-4xl">
            <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-lg bg-hush-dark-element/72">
              <Image
                src="/icons/HushVoting-Icon.svg"
                alt=""
                width={64}
                height={64}
                className="h-16 w-16"
                unoptimized
              />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-hush-purple-light">
              HushVoting!
            </p>
            <h1 className="mt-4 text-5xl font-semibold leading-tight text-hush-text-primary md:text-7xl">
              Online voting software for associations and real organizational governance.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-hush-text-primary/76 md:text-xl">
              HushVoting! helps clubs, associations, cooperatives, NGOs, federations, and
              organizational governance teams run private online voting workflows with stronger
              ballot privacy, clearer process control, and more defensible outcomes than ad hoc
              polls, survey tools, or meeting chat.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <PrimaryLink href="/contact">Request a HushVoting! pilot</PrimaryLink>
              <SecondaryLink href="/live-demo">Open live demo</SecondaryLink>
            </div>
          </div>

          <Surface className="relative overflow-hidden p-3">
            <div className="deep-well rounded-lg p-3">
              <div className="mb-3 flex items-center justify-between gap-4 px-1">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-hush-purple-light/78">
                    Product explainer
                  </p>
                  <h2 className="mt-1 text-xl font-semibold text-hush-text-primary">
                    HushVoting! in 40 seconds
                  </h2>
                </div>
                <ProductIcon product="voting" alt="" className="h-12 w-12 flex-none" />
              </div>
              <video
                className="aspect-video w-full rounded-lg bg-hush-dark-bg object-cover shadow-2xl shadow-black/25"
                src={HUSH_VOTING_VIDEO_SRC}
                autoPlay
                muted
                loop
                playsInline
                controls
                preload="metadata"
                aria-label="HushVoting! product explainer video"
              >
                Your browser does not support the HushVoting! explainer video.
              </video>
            </div>
          </Surface>
        </div>
      </section>

      <section className="soft-band px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Online voting software"
            title="Designed for associations, clubs, cooperatives, NGOs, and federations."
          >
            <p>
              HushVoting! is not a generic survey tool. It is election software for organizations
              that need member eligibility, private ballot handling, governed result release, and an
              evidence path for serious online elections.
            </p>
          </SectionHeader>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <IconCard icon={Users} title="Association voting">
              Member organizations can start from their own voter eligibility records and governance
              rules.
            </IconCard>
            <IconCard icon={LockKeyhole} title="Private online voting">
              Eligibility, participation, and ballot choice are treated as separate surfaces.
            </IconCard>
            <IconCard icon={FileCheck2} title="Online elections">
              Board elections, delegate votes, statute votes, and sensitive decisions need more than
              a poll link.
            </IconCard>
            <IconCard icon={FileSearch} title="Verifiable evidence">
              Final result and audit artifacts give authorized roles a review path after the vote.
            </IconCard>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Paper-equivalent model"
            title="Secret-ballot online voting with separate eligibility and ballot-choice surfaces."
          >
            <p>
              HushVoting! is designed around the same practical split people expect from a serious
              paper election: eligibility and participation can be checked, while the vote choice
              remains protected in the ballot box.
            </p>
          </SectionHeader>

          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {workflow.map(item => (
              <Surface key={item.step} as="article" className="flex flex-col">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-hush-dark-well text-sm font-semibold text-hush-purple-light">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-hush-text-primary">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-hush-text-primary/72">{item.text}</p>
              </Surface>
            ))}
          </div>
        </div>
      </section>

      <section className="soft-band px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Election software vs surveys"
              title="More serious than a survey. More focused than public-election infrastructure."
            >
              <p>
                HushVoting! targets private organizational governance first: association voting,
                board elections, cooperative decisions, NGO votes, club ballots, and federation
                workflows that need trust after the meeting is over.
              </p>
            </SectionHeader>
          </div>

          <Surface className="p-5">
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "Eligibility and voting-right checkoff",
                "Private ballot workflow",
                "Trustee-threshold option for stronger separation",
                "Final result and audit-ready evidence",
              ].map(item => (
                <div key={item} className="deep-well rounded-lg p-5">
                  <p className="text-sm font-semibold text-hush-text-primary">{item}</p>
                </div>
              ))}
            </div>
          </Surface>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Election modes" title="Two operating models for different governance needs.">
            <p>
              Both modes keep election governance, tally confidentiality, and reader access as
              separate jobs. The difference is who approves key election actions and how result
              release is governed.
            </p>
          </SectionHeader>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <Surface as="article" className="p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="rounded-lg bg-hush-purple/14 p-3 text-hush-purple-light">
                  <Gavel className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-hush-purple-light/78">
                    Simpler governance
                  </p>
                  <h3 className="text-2xl font-semibold text-hush-text-primary">Admin-only elections</h3>
                </div>
              </div>
              <p className="text-sm leading-7 text-hush-text-primary/76">
                One designated organization admin controls the election governance actions. This is
                appropriate for lower-governance contexts while still keeping the protected tally
                boundary separate from an ordinary reusable ballot-decryption key.
              </p>
            </Surface>

            <Surface as="article" className="p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="rounded-lg bg-hush-purple/14 p-3 text-hush-purple-light">
                  <KeyRound className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-hush-purple-light/78">
                    Stronger separation
                  </p>
                  <h3 className="text-2xl font-semibold text-hush-text-primary">
                    Trustee-threshold elections
                  </h3>
                </div>
              </div>
              <p className="text-sm leading-7 text-hush-text-primary/76">
                Independent trustees approve governed actions and participate in the exact-target
                close-counting release path. This is the better fit when the election needs stronger
                operational separation and a more challenge-resistant posture.
              </p>
            </Surface>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Role model" title="Built for the people who actually run and review elections.">
            <p>
              The product is designed around role-specific surfaces for owner/admin, trustee, voter,
              and auditor workflows instead of treating every user as the same generic participant.
            </p>
          </SectionHeader>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <IconCard icon={ClipboardCheck} title="Owners and admins">
              Create elections, manage voter eligibility, open and close the election, and review
              the result posture before finalization.
            </IconCard>
            <IconCard icon={Users} title="Voters">
              Link eligibility, cast a ballot, and later see personal counted status without being
              exposed to the full named participation roster.
            </IconCard>
            <IconCard icon={ShieldCheck} title="Trustees">
              Approve governed actions and, where required, participate in the bound close-counting
              release workflow for the exact election target.
            </IconCard>
            <IconCard icon={FileSearch} title="Auditors">
              Review artifacts, provenance, participation evidence, and verification materials with
              clear boundaries between roster evidence and anonymous ballot artifacts.
            </IconCard>
          </div>
        </div>
      </section>

      <section className="soft-band px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionHeader align="left" eyebrow="Validated baseline" title="Credible for pilots and external validation conversations.">
              <p>
                Fresh hardening and red-team retests strengthen the protected-election baseline:
                encrypted ballots, separated voter-right and ballot-choice surfaces, aggregate-only
                tally release, and durable evidence for review.
              </p>
            </SectionHeader>
          </div>

          <div className="grid gap-4">
            <Surface className="p-5">
              <div className="flex gap-4">
                <BadgeCheck className="mt-1 h-6 w-6 flex-none text-hush-purple-light" />
                <div>
                  <h3 className="text-lg font-semibold text-hush-text-primary">Validated technical baseline</h3>
                  <p className="mt-2 text-sm leading-6 text-hush-text-primary/72">
                    HushVoting! has demonstrated a validated technical baseline for protected
                    private elections and is ready for pilots, expert review, and external
                    validation planning.
                  </p>
                </div>
              </div>
            </Surface>
            <Surface className="p-5">
              <div className="flex gap-4">
                <ShieldCheck className="mt-1 h-6 w-6 flex-none text-hush-purple-light" />
                <div>
                  <h3 className="text-lg font-semibold text-hush-text-primary">Ready for pilots and expert review</h3>
                  <p className="mt-2 text-sm leading-6 text-hush-text-primary/72">
                    The current baseline supports pilot conversations, trustee workflow testing,
                    audit-package review, and external cryptographic validation planning.
                  </p>
                </div>
              </div>
            </Surface>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Commercial fit" title="Packaged around seriousness, not commodity polling.">
            <p>
              HushVoting! is designed for organizations that need stronger privacy posture, process
              evidence, and support for important governance decisions.
            </p>
          </SectionHeader>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <IconCard icon={Vote} title="Association governance">
              For routine votes in clubs, NGOs, chambers, and member associations where remote
              participation and orderly administration matter.
            </IconCard>
            <IconCard icon={LockKeyhole} title="Premium secret-ballot mode">
              For board, executive, union, federation, cooperative, or professional-body elections
              where secrecy, scrutiny, and defensible outcomes matter.
            </IconCard>
            <IconCard icon={BadgeCheck} title="Public-body discovery">
              For feasibility, pilot, architecture, and validation conversations with institutions
              that need higher-scrutiny governance workflows.
            </IconCard>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="SEO guides" title="Read the HushVoting! buyer guides.">
            <p>
              These pages answer the main search questions around online voting software,
              secret-ballot workflows, election software, and verifiable voting evidence.
            </p>
          </SectionHeader>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {seoGuides.map(guide => (
              <Link key={guide.href} href={guide.href} className="focus-ring block h-full rounded-lg">
                <Surface as="article" className="flex h-full flex-col transition hover:-translate-y-1 hover:bg-hush-dark-element/90">
                  <h3 className="text-xl font-semibold text-hush-text-primary">{guide.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-hush-text-primary/72">{guide.text}</p>
                  <p className="mt-auto pt-6 text-sm font-semibold text-hush-purple-light">
                    Read guide
                  </p>
                </Surface>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="soft-band px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <SectionHeader title="Ready to discuss a HushVoting! pilot?">
            <p>
              The best first conversation is a real organizational vote where eligibility, privacy,
              and evidence matter.
            </p>
          </SectionHeader>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <PrimaryLink href="/contact">Request a HushVoting! pilot</PrimaryLink>
            <SecondaryLink href="/hush-voting/online-voting-for-associations">
              Online voting for associations
            </SecondaryLink>
          </div>
        </div>
      </section>

      <PageFooter />
    </main>
  );
}
