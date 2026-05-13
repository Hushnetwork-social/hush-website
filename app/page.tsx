import {
  BadgeCheck,
  FileCheck2,
  KeyRound,
  LockKeyhole,
  ShieldCheck,
  Users,
  Vote,
} from "lucide-react";
import { createPageMetadata } from "@/app/seo";
import Navbar from "@/components/Navbar";
import {
  IconCard,
  PageFooter,
  PrimaryLink,
  ProductCard,
  ProductIcon,
  SecondaryLink,
  SectionHeader,
  SiteBackground,
  Surface,
} from "@/components/Marketing";

export const metadata = createPageMetadata({
  title: "HushNetwork | Privacy Infrastructure For Governed Remote Voting",
  description:
    "HushNetwork powers HushVoting!, online voting software for associations and organizations that need stronger ballot privacy, role separation, and auditability.",
  path: "/",
  image: "network",
  keywords: [
    "HushNetwork",
    "HushVoting",
    "online voting software",
    "election software",
    "privacy-first remote voting",
    "online voting for associations",
    "association voting",
    "private online voting",
    "digital governance",
  ],
});

const proofPoints = [
  "Validated protected-election implementation baseline",
  "Encrypted ballot persistence for protected election profiles",
  "Separated eligibility, participation, and ballot-choice surfaces",
  "Aggregate-only tally release for final-result workflows",
] as const;

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <SiteBackground />
      <Navbar />

      <section className="relative flex min-h-[92vh] items-center px-6 pb-20 pt-28">
        <div className="absolute right-[-5rem] top-28 hidden h-[36rem] w-[36rem] opacity-20 md:block">
          <ProductIcon product="voting" alt="" className="h-full w-full" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-hush-dark-bg to-transparent" />

        <div className="relative mx-auto w-full max-w-7xl">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-semibold leading-[1.03] tracking-normal text-hush-text-primary md:text-7xl lg:text-8xl">
              <span className="block">HushNetwork powers</span>
              <span className="block">online voting software</span>
              <span className="block">for associations.</span>
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-hush-text-primary/78 md:text-xl">
              HushNetwork connects the election workflow, communication surface, and social layer.
              HushVoting! runs governed remote elections; HushFeeds! notifies owners, trustees,
              auditors, and voters when an action is needed; HushSocial! keeps the broader
              application ecosystem connected.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <PrimaryLink href="/contact">Request a HushVoting! pilot</PrimaryLink>
              <SecondaryLink href="/hush-voting">Explore HushVoting!</SecondaryLink>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Product direction"
            title="People use HushVoting!. HushNetwork provides the trust foundation underneath."
          >
            <p>
              HushVoting! is the application layer for governed remote voting. HushNetwork is the
              privacy, blockchain, validation, availability, and key-management foundation that
              makes the voting workflow defensible.
            </p>
          </SectionHeader>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <IconCard icon={Users} title="Authority-visible checkoff">
              Organizations can manage eligibility and know who consumed a voting right without
              turning the ballot itself into a named public artifact.
            </IconCard>
            <IconCard icon={LockKeyhole} title="Private ballot workflow">
              Ballot choice is protected through encrypted election artifacts and a workflow built
              around final results rather than live plaintext exposure.
            </IconCard>
            <IconCard icon={ShieldCheck} title="Governed result release">
              Elections can use a simpler admin-operated mode or a trustee-threshold path for
              stronger separation of operational authority.
            </IconCard>
            <IconCard icon={FileCheck2} title="Defensible evidence">
              The system is designed to produce result and audit artifacts that support review
              without exposing ordinary voters to unnecessary roster or ballot disclosure.
            </IconCard>
          </div>
        </div>
      </section>

      <section className="soft-band px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionHeader
              align="left"
              eyebrow="HushVoting! focus"
              title="Built for clubs, associations, cooperatives, NGOs, and governance-heavy organizations."
            >
              <p>
                HushVoting! starts with the organizations that already need better remote
                participation: clubs, associations, cooperatives, NGOs, federations, and governance
                teams with members spread across locations.
              </p>
            </SectionHeader>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryLink href="/hush-voting/online-voting-for-associations">
                Online voting for associations
              </PrimaryLink>
              <SecondaryLink href="/hush-voting/secret-ballot-online-voting">
                Secret-ballot voting
              </SecondaryLink>
            </div>
          </div>

          <Surface className="p-5">
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: "Association governance", value: "Routine votes", icon: Vote },
                { label: "Secret-ballot mode", value: "Sensitive elections", icon: KeyRound },
                { label: "Pilot programs", value: "Higher scrutiny", icon: BadgeCheck },
              ].map(item => (
                <div key={item.label} className="deep-well rounded-lg p-5">
                  <item.icon className="h-6 w-6 text-hush-purple-light" aria-hidden="true" />
                  <p className="mt-5 text-sm text-hush-text-primary/62">{item.label}</p>
                  <p className="mt-2 text-xl font-semibold text-hush-text-primary">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </Surface>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Services" title="One connected HushNetwork product stack.">
            <p>
              HushNetwork is the glue between the products. HushVoting! handles the governed
              election workflow, HushFeeds! delivers role-based action notifications, HushSocial!
              supports the social surface, and the network provides the privacy and validation
              foundation underneath.
            </p>
          </SectionHeader>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <ProductCard product="voting" title="HushVoting!" label="Election workflow" href="/hush-voting">
              Governed remote voting with stronger ballot privacy, auditability, and final-result
              discipline for serious organizational decisions.
            </ProductCard>
            <ProductCard product="feeds" title="HushFeeds!" label="Action notifications" href="/live-demo">
              Election owners, trustees, auditors, and voters can be notified when the workflow
              needs their attention or approval.
            </ProductCard>
            <ProductCard product="social" title="HushSocial!" label="Social surface" href="/live-demo">
              The social layer keeps the wider HushNetwork application experience connected to the
              same privacy-first ecosystem.
            </ProductCard>
            <ProductCard product="network" title="HushNetwork" label="Trust foundation" href="/technology">
              The infrastructure layer for privacy, validation, tamper-evident records, and
              availability across Hush products.
            </ProductCard>
          </div>
        </div>
      </section>

      <section className="soft-band px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <SectionHeader align="left" eyebrow="Current evidence" title="Validated privacy and trust foundation.">
              <p>
                HushVoting! has demonstrated the protected-election mechanics that matter for real
                governance: encrypted ballots, clear separation between voter rights and ballot
                choice, and aggregate-only result release.
              </p>
            </SectionHeader>
          </div>
          <Surface className="space-y-3">
            {proofPoints.map(point => (
              <div key={point} className="flex gap-3 rounded-lg bg-hush-dark-well/82 p-4">
                <ShieldCheck className="mt-0.5 h-5 w-5 flex-none text-hush-purple-light" />
                <p className="text-sm leading-6 text-hush-text-primary/78">{point}</p>
              </div>
            ))}
          </Surface>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <SectionHeader title="Open the current applications, then follow the HushVoting! build-out.">
            <p>
              The live demo remains the entry point for the web application and Windows or Android
              downloads, connecting visitors directly to the HushNetwork application ecosystem.
            </p>
          </SectionHeader>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <PrimaryLink href="/contact">Request pilot conversation</PrimaryLink>
            <SecondaryLink href="/roadmap">View roadmap</SecondaryLink>
          </div>
        </div>
      </section>

      <PageFooter />
    </main>
  );
}
