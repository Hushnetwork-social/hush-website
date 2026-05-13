import {
  FileCheck2,
  Globe2,
  LockKeyhole,
  MessageSquareText,
  ServerCog,
  ShieldCheck,
  Vote,
} from "lucide-react";
import { createPageMetadata, serviceStackJsonLd } from "@/app/seo";
import Navbar from "@/components/Navbar";
import { StructuredData } from "@/components/StructuredData";
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
  title: "HushNetwork Services | HushVoting!, HushFeeds!, HushSocial!",
  description:
    "Explore the HushNetwork service stack: HushVoting! for governed remote voting, HushFeeds! for action notifications, and HushSocial! for community workflows.",
  path: "/services",
  image: "network",
  keywords: [
    "HushNetwork services",
    "HushVoting",
    "HushFeeds",
    "HushSocial",
    "privacy infrastructure",
    "digital governance services",
  ],
});

const serviceRows = [
  {
    name: "HushVoting!",
    role: "Election workspace",
    fit: "Owners configure elections, invite trustees and auditors, manage eligible voters, and publish final results.",
  },
  {
    name: "HushFeeds!",
    role: "Action channel",
    fit: "Election participants receive workflow notifications when they need to vote, approve, review, or verify.",
  },
  {
    name: "HushSocial!",
    role: "Community surface",
    fit: "Organizations keep members connected around the same privacy-first HushNetwork application ecosystem.",
  },
  {
    name: "Private HushNetwork",
    role: "Deployment option",
    fit: "Managed or isolated network environments support organizations that need tighter operating boundaries.",
  },
] as const;

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <StructuredData data={serviceStackJsonLd} />
      <SiteBackground />
      <Navbar />

      <section className="px-6 pb-16 pt-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-hush-purple-light">
              Services
            </p>
            <h1 className="mt-4 text-5xl font-semibold leading-tight text-hush-text-primary md:text-7xl">
              HushNetwork is now presented as a service ecosystem.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-hush-text-primary/76 md:text-xl">
              HushNetwork connects governed voting, role-based notifications, social interaction,
              and privacy infrastructure. HushVoting!, HushFeeds!, HushSocial!, and private network
              deployments are designed to work as one connected product stack.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <PrimaryLink href="/contact">Request a HushVoting! pilot</PrimaryLink>
              <SecondaryLink href="/hush-voting">Start with HushVoting!</SecondaryLink>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Product stack" title="Four services, one privacy infrastructure layer.">
            <p>
              Each product has a clear user-facing purpose. HushNetwork provides the shared trust
              foundation so election work, communication, community, and deployment boundaries stay
              connected.
            </p>
          </SectionHeader>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <ProductCard product="voting" title="HushVoting!" label="Governed remote voting" href="/hush-voting">
              Privacy-first voting for organizations that need clearer process, stronger ballot
              privacy, and defensible final outcomes.
            </ProductCard>
            <ProductCard product="feeds" title="HushFeeds!" label="Action notifications" href="/live-demo">
              The notification surface for election owners, trustees, auditors, and voters when the
              workflow needs action.
            </ProductCard>
            <ProductCard product="social" title="HushSocial!" label="Community surface" href="/hushnetwork/private-social-network">
              The social layer that keeps organizations and members connected inside the broader
              HushNetwork ecosystem.
            </ProductCard>
            <ProductCard product="network" title="HushNetwork" label="Infrastructure" href="/technology">
              The common trust foundation for privacy, validation, tamper-evident records, and
              product availability.
            </ProductCard>
          </div>
        </div>
      </section>

      <section className="soft-band px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <SectionHeader align="left" eyebrow="Connected workflow" title="One election can involve many roles and surfaces.">
              <p>
                The election owner, trustees, auditors, and voters each have different actions.
                HushVoting! organizes the election, HushFeeds! brings the right notification to the
                right participant, and HushNetwork keeps the privacy and validation foundation under
                the whole workflow.
              </p>
            </SectionHeader>
          </div>

          <Surface className="overflow-hidden p-0">
            <div className="grid bg-hush-dark-well/70 px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-hush-purple-light/78 md:grid-cols-[0.8fr_0.8fr_1.4fr]">
              <div>Product</div>
              <div className="hidden md:block">Role in the stack</div>
              <div className="hidden md:block">How it helps the election</div>
            </div>
            <div className="divide-y divide-hush-dark-bg/38">
              {serviceRows.map(row => (
                <div key={row.name} className="grid gap-3 px-5 py-5 md:grid-cols-[0.8fr_0.8fr_1.4fr]">
                  <div className="font-semibold text-hush-text-primary">{row.name}</div>
                  <div className="text-sm text-hush-purple-light">{row.role}</div>
                  <div className="text-sm leading-6 text-hush-text-primary/72">{row.fit}</div>
                </div>
              ))}
            </div>
          </Surface>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="HushVoting! service shape" title="A serious election product needs more than a ballot form.">
            <p>
              HushVoting! combines election setup, voter-list handling, role-aware workflows,
              privacy-first ballot handling, and evidence packages for review.
            </p>
          </SectionHeader>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <IconCard icon={Vote} title="Association governance">
              Low-friction remote voting for recurring member votes, ordinary governance, and
              organization-managed voter lists.
            </IconCard>
            <IconCard icon={LockKeyhole} title="Secret-ballot elections">
              Managed setup, stronger privacy posture, and evidence packages for higher-scrutiny
              elections where challenge resistance matters.
            </IconCard>
            <IconCard icon={FileCheck2} title="Audit and review package">
              Result artifacts, participation evidence, and provenance materials for the roles that
              are allowed to review them.
            </IconCard>
          </div>
        </div>
      </section>

      <section className="soft-band px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Live services" title="HushFeeds! and HushSocial! are part of the election experience.">
            <p>
              HushVoting! does not stand alone. Election participants need to be reached, reminded,
              and guided. The live HushNetwork services provide the application surface that can
              carry those workflows.
            </p>
          </SectionHeader>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <IconCard icon={MessageSquareText} title="Web application entry">
              Users can open the live web app today through the existing demo route.
            </IconCard>
            <IconCard icon={Globe2} title="Online service path">
              HushNetwork already has a production-hosted access path for the current application
              surface.
            </IconCard>
            <IconCard icon={ServerCog} title="Release distribution">
              The same live-demo route provides Windows and Android app downloads.
            </IconCard>
            <IconCard icon={ShieldCheck} title="Shared foundation">
              The same privacy-first foundation supports voting, notifications, social interaction,
              and deployments.
            </IconCard>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-6 flex justify-center">
            <ProductIcon product="network" alt="HushNetwork icon" className="h-24 w-24" />
          </div>
          <SectionHeader title="HushNetwork is the glue between the products.">
            <p>
              HushVoting! manages the election, HushFeeds! reaches participants, HushSocial! keeps
              the community surface alive, and HushNetwork provides the privacy and trust layer
              underneath.
            </p>
          </SectionHeader>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <PrimaryLink href="/contact">Request pilot conversation</PrimaryLink>
            <SecondaryLink href="/hush-voting/election-software-vs-survey-tools">
              Election software vs surveys
            </SecondaryLink>
          </div>
        </div>
      </section>

      <PageFooter />
    </main>
  );
}
