import {
  CheckCircle2,
  Circle,
  CircleDot,
  ClipboardCheck,
  FileSearch,
  Handshake,
  Rocket,
  ShieldCheck,
  TrendingUp,
  Vote,
} from "lucide-react";
import { createPageMetadata } from "@/app/seo";
import Navbar from "@/components/Navbar";
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
  title: "HushNetwork Roadmap | HushVoting! And Privacy Infrastructure",
  description:
    "Follow HushNetwork's product roadmap for HushVoting!, HushFeeds!, HushSocial!, private deployments, and privacy-first governance infrastructure.",
  path: "/roadmap",
  image: "voting",
  keywords: [
    "HushNetwork roadmap",
    "HushVoting roadmap",
    "privacy infrastructure roadmap",
    "digital governance roadmap",
  ],
});

type RoadmapStatus = "completed" | "in-progress" | "planned";
type RoadmapItemState = "done" | "active" | "planned";

const roadmap = [
  {
    phase: "01",
    window: "Q1 2026",
    title: "Foundation",
    status: "Completed",
    tone: "completed",
    icon: ShieldCheck,
    items: [
      { text: "Core ZK proof engine", state: "done" },
      { text: "HushNetwork API integration", state: "done" },
      { text: "Prototype ballot flow", state: "done" },
    ],
  },
  {
    phase: "02",
    window: "Q2-Q3 2026",
    title: "Pilot",
    status: "In Progress",
    tone: "in-progress",
    icon: Vote,
    items: [
      { text: "First pilot election", state: "done" },
      { text: "Trustee onboarding", state: "done" },
      { text: "Security audit", state: "active" },
    ],
  },
  {
    phase: "03",
    window: "Q4 2026",
    title: "Launch",
    status: "Planned",
    tone: "planned",
    icon: Rocket,
    items: [
      { text: "Public product launch", state: "planned" },
      { text: "Swiss market rollout", state: "planned" },
      { text: "Partnership agreements", state: "planned" },
    ],
  },
  {
    phase: "04",
    window: "2027",
    title: "Scale",
    status: "Planned",
    tone: "planned",
    icon: TrendingUp,
    items: [
      { text: "EU market expansion", state: "planned" },
      { text: "Enterprise tier launch", state: "planned" },
      { text: "Open-source SDK", state: "planned" },
    ],
  },
] as const;

const statusStyles: Record<RoadmapStatus, string> = {
  completed: "bg-emerald-400/16 text-emerald-300",
  "in-progress": "bg-hush-purple-hover/42 text-hush-text-primary",
  planned: "bg-hush-dark-well text-hush-purple-light",
};

const markerStyles: Record<RoadmapStatus, string> = {
  completed: "bg-emerald-400 text-hush-dark-bg",
  "in-progress": "bg-hush-purple-hover text-white",
  planned: "bg-hush-dark-well text-hush-purple-light",
};

export default function RoadmapPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <SiteBackground />
      <Navbar />

      <section className="px-6 pb-16 pt-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-lg bg-hush-dark-element/72">
              <ProductIcon product="voting" alt="" className="h-16 w-16" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-hush-purple-light">
              Roadmap
            </p>
            <h1 className="mt-4 text-5xl font-semibold leading-tight text-hush-text-primary md:text-7xl">
              Four phases to market leadership.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-hush-text-primary/76 md:text-xl">
              The HushVoting! roadmap moves from completed foundation work into pilot execution,
              public launch, and later European scale. The sequence is disciplined: prove the
              product, validate the security posture, then expand.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <PrimaryLink href="/hush-voting">Explore HushVoting!</PrimaryLink>
              <SecondaryLink href="/live-demo">Open live demo</SecondaryLink>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Roadmap" title="Four Phases to Market Leadership">
            <p>
              This follows the HushVoting! pitch-deck roadmap: Foundation, Pilot, Launch, and
              Scale. Completed work is shown as a status, while the security audit and launch items
              stay explicit as active or planned work.
            </p>
          </SectionHeader>

          <div className="relative mt-14">
            <div className="absolute left-6 right-6 top-7 hidden h-1 rounded-full bg-gradient-to-r from-emerald-400 via-hush-purple-hover to-hush-dark-outer lg:block" />
            <div className="grid gap-5 lg:grid-cols-4">
              {roadmap.map(item => (
                <RoadmapPhase key={item.phase} phase={item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="soft-band px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Pilot discipline" title="The next work is about validation, not overclaiming.">
            <p>
              The path is clear: complete the demo, run serious pilots, gather external validation,
              and build reference cases for broader market expansion.
            </p>
          </SectionHeader>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <IconCard icon={ClipboardCheck} title="Pilot execution">
              Turn the prototype ballot flow into a first pilot election with real trustee
              onboarding and operational support.
            </IconCard>
            <IconCard icon={FileSearch} title="Security review">
              Continue the security audit and external validation path for a stronger launch
              package.
            </IconCard>
            <IconCard icon={Handshake} title="Reference cases">
              Use the pilot phase to build credible partner evidence before the public launch and
              Swiss market rollout.
            </IconCard>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <SectionHeader align="left" eyebrow="Launch path" title="Q4 2026 is the planned launch gate.">
              <p>
                The roadmap puts public product launch, Swiss market rollout, and partnership
                agreements together in Q4 2026. That keeps launch tied to pilot learning and
                validation work.
              </p>
            </SectionHeader>
          </div>

          <Surface className="p-5">
            <div className="grid gap-4">
              {[
                "Foundation phase is complete for core ZK direction, API integration, and prototype ballot flow.",
                "Pilot phase is active, with first pilot election, trustee onboarding, and security audit work.",
                "Launch phase targets public product launch, Swiss rollout, and partnership agreements in Q4 2026.",
                "Scale phase targets EU expansion, enterprise tier launch, and an open-source SDK in 2027.",
              ].map(item => (
                <div key={item} className="deep-well flex gap-3 rounded-lg p-4">
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-none text-hush-purple-light" />
                  <p className="text-sm leading-6 text-hush-text-primary/78">{item}</p>
                </div>
              ))}
            </div>
          </Surface>
        </div>
      </section>

      <PageFooter />
    </main>
  );
}

function RoadmapPhase({
  phase,
}: {
  phase: (typeof roadmap)[number];
}) {
  const Icon = phase.icon;
  const tone = phase.tone as RoadmapStatus;

  return (
    <article className="relative">
      <div className="relative z-10 mb-5 flex justify-center lg:justify-start lg:pl-8">
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-full text-lg font-semibold shadow-xl shadow-black/20 ${markerStyles[tone]}`}
        >
          {phase.phase}
        </div>
      </div>
      <Surface className="h-full p-6">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="text-lg text-hush-purple-light">{phase.window}</p>
            <h3 className="mt-1 text-2xl font-semibold text-hush-text-primary">{phase.title}</h3>
            <span
              className={`mt-3 inline-flex rounded-lg px-3 py-1 text-sm font-semibold ${statusStyles[tone]}`}
            >
              {phase.status}
            </span>
          </div>
          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-hush-dark-well text-hush-purple-light">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>
        </div>

        <ul className="space-y-3">
          {phase.items.map(item => (
            <li key={item.text} className="flex gap-3 text-sm leading-6 text-hush-text-primary/78">
              <RoadmapItemIcon state={item.state} />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </Surface>
    </article>
  );
}

function RoadmapItemIcon({
  state,
}: {
  state: RoadmapItemState;
}) {
  if (state === "done") {
    return <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-emerald-300" aria-hidden="true" />;
  }

  if (state === "active") {
    return <CircleDot className="mt-0.5 h-5 w-5 flex-none text-amber-300" aria-hidden="true" />;
  }

  return <Circle className="mt-0.5 h-5 w-5 flex-none text-hush-text-primary/48" aria-hidden="true" />;
}
