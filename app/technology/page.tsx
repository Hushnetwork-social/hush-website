import {
  Blocks,
  DatabaseZap,
  FileCheck2,
  KeyRound,
  Layers3,
  LockKeyhole,
  Network,
  Route,
  ShieldCheck,
  Users,
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
  title: "HushNetwork Technology | Protocol Omega And Privacy-First Voting",
  description:
    "Learn how HushNetwork supports HushVoting! with privacy boundaries, encrypted election artifacts, role-aware access, and tamper-evident records.",
  path: "/technology",
  image: "network",
  keywords: [
    "Protocol Omega",
    "privacy-first voting technology",
    "verifiable voting",
    "auditable online voting",
    "end-to-end verifiable voting",
    "encrypted election artifacts",
    "tamper-evident voting records",
    "HushNetwork technology",
  ],
});

const layers = [
  {
    title: "Application layer",
    label: "HushVoting!",
    text: "Voters, organizations, trustees, and auditors use product workflows designed for governed remote voting.",
    icon: Users,
  },
  {
    title: "Election workflow",
    label: "Eligibility, ballot, tally, review",
    text: "The system separates checkoff, private ballot artifacts, governed actions, final result release, and audit review.",
    icon: Route,
  },
  {
    title: "Foundation layer",
    label: "HushNetwork",
    text: "Privacy, validation, tamper-evident records, availability, and key-custody boundaries sit below the product.",
    icon: Network,
  },
] as const;

export default function TechnologyPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <SiteBackground />
      <Navbar />

      <section className="px-6 pb-16 pt-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-lg bg-hush-dark-element/72">
              <ProductIcon product="network" alt="" className="h-16 w-16" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-hush-purple-light">
              Infrastructure
            </p>
            <h1 className="mt-4 text-5xl font-semibold leading-tight text-hush-text-primary md:text-7xl">
              HushNetwork is the trust foundation under HushVoting!.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-hush-text-primary/76 md:text-xl">
              HushNetwork supports privacy-first products with protected communication, encrypted
              election artifacts, tamper-evident records, role-aware reader access, and distributed
              validation underneath the application experience.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <PrimaryLink href="/hush-voting">See HushVoting!</PrimaryLink>
              <SecondaryLink href="/technology/verifiable-voting">Verifiable voting</SecondaryLink>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Architecture"
            title="Three layers work together to protect the election workflow."
          >
            <p>
              People use HushVoting!, the election workflow enforces the process, and HushNetwork
              provides the privacy, validation, and availability foundation below the product.
            </p>
          </SectionHeader>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {layers.map(item => (
              <Surface key={item.title} as="article" className="p-7">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-hush-purple/14 text-hush-purple-light">
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-hush-purple-light/78">
                  {item.title}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-hush-text-primary">{item.label}</h3>
                <p className="mt-4 text-sm leading-6 text-hush-text-primary/74">{item.text}</p>
              </Surface>
            ))}
          </div>
        </div>
      </section>

      <section className="soft-band px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Protocol Omega" title="Privacy boundaries are product behavior, not decoration.">
            <p>
              Protocol Omega is HushNetwork&apos;s own cryptographic process for governed private
              elections, developed by the Hush team with patent work in progress. It separates voter
              authorization, ballot content, tally release, and audit visibility so privacy is built
              into the election workflow itself.
            </p>
          </SectionHeader>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <IconCard icon={LockKeyhole} title="Ballot confidentiality">
              Protected election paths persist encrypted ballot packages instead of plaintext choice
              records.
            </IconCard>
            <IconCard icon={ShieldCheck} title="Tally custody">
              Admin-only and trustee-threshold modes keep governance authority separate from tally
              confidentiality.
            </IconCard>
            <IconCard icon={KeyRound} title="Trustee release">
              Trustee workflows can require configured threshold participation for the exact
              close-counting target.
            </IconCard>
            <IconCard icon={FileCheck2} title="Audit artifacts">
              Results and evidence packages are designed for authorized review without turning
              ordinary voters into public roster data.
            </IconCard>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionHeader align="left" eyebrow="Network capabilities" title="What HushNetwork contributes underneath the products.">
              <p>
                The same foundation supports HushFeeds!, HushSocial!, HushVoting!, and private
                deployments: protected communication, role-aware application state, verifiable
                records, and distributed validation.
              </p>
            </SectionHeader>
          </div>

          <Surface className="p-5">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: Blocks, label: "Tamper-evident record trail" },
                { icon: DatabaseZap, label: "Materialized read models" },
                { icon: Layers3, label: "Role-aware product layers" },
                { icon: Network, label: "Distributed validation foundation" },
              ].map(item => (
                <div key={item.label} className="deep-well flex items-center gap-4 rounded-lg p-5">
                  <item.icon className="h-6 w-6 flex-none text-hush-purple-light" />
                  <p className="font-medium text-hush-text-primary">{item.label}</p>
                </div>
              ))}
            </div>
          </Surface>
        </div>
      </section>

      <section className="soft-band px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <SectionHeader title="Privacy infrastructure for connected HushNetwork products.">
            <p>
              HushNetwork provides the shared privacy and trust layer for governed voting,
              notifications, social interaction, and private deployments.
            </p>
          </SectionHeader>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <PrimaryLink href="/contact">Request pilot conversation</PrimaryLink>
            <SecondaryLink href="/technology/verifiable-voting">Read verifiable voting</SecondaryLink>
          </div>
        </div>
      </section>

      <PageFooter />
    </main>
  );
}
