import {
  Building2,
  ClipboardCheck,
  DatabaseZap,
  FileCheck2,
  LockKeyhole,
  Network,
  ServerCog,
  ShieldCheck,
} from "lucide-react";
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

const deploymentModels = [
  {
    title: "Managed HushVoting! pilot",
    text: "A controlled deployment for one organization, focused on setup, voter-list handling, rehearsal, live election support, and final reporting.",
  },
  {
    title: "Private network environment",
    text: "An isolated HushNetwork deployment model for organizations that need tighter operational boundaries or specialized governance flows.",
  },
  {
    title: "Public-body discovery",
    text: "Feasibility and architecture work for higher-scrutiny institutions with procurement, audit, and validation requirements.",
  },
] as const;

export default function PrivateServerPage() {
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
              Private Networks
            </p>
            <h1 className="mt-4 text-5xl font-semibold leading-tight text-hush-text-primary md:text-7xl">
              Private HushNetwork deployments for organizations that need tighter control.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-hush-text-primary/76 md:text-xl">
              Private deployments give organizations a controlled HushNetwork environment for
              managed pilots, isolated operating boundaries, and governance workflows that need
              closer operational support.
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
          <SectionHeader eyebrow="Deployment models" title="Private networks are a delivery option for serious governance use cases.">
            <p>
              Some elections need more than a shared web application. HushNetwork can support
              controlled pilots, private operating environments, and feasibility work for
              institutions with higher scrutiny requirements.
            </p>
          </SectionHeader>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {deploymentModels.map(item => (
              <Surface key={item.title} as="article" className="p-7">
                <ServerCog className="mb-6 h-7 w-7 text-hush-purple-light" aria-hidden="true" />
                <h3 className="text-2xl font-semibold text-hush-text-primary">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-hush-text-primary/74">{item.text}</p>
              </Surface>
            ))}
          </div>
        </div>
      </section>

      <section className="soft-band px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeader align="left" eyebrow="Deployment fit" title="Control, support, and evidence matter more than generic hosting.">
              <p>
                HushVoting! deployments can be shaped around the election itself: electorate size,
                voter registry, support window, audit depth, identity or verifier needs, and the
                level of managed service.
              </p>
            </SectionHeader>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <IconCard icon={Building2} title="Organization-managed eligibility">
              Clubs, associations, NGOs, chambers, unions, and cooperatives often define voter
              rights through their own membership records.
            </IconCard>
            <IconCard icon={LockKeyhole} title="Privacy-first ballot posture">
              Private deployments reinforce the separation between eligibility, checkoff, ballot
              content, and result release.
            </IconCard>
            <IconCard icon={FileCheck2} title="Evidence package">
              Audit and reporting materials can be scoped to the roles and visibility model the
              organization requires.
            </IconCard>
            <IconCard icon={ClipboardCheck} title="Managed election support">
              Higher-scrutiny elections may need setup, rehearsal, support windows, and review
              workflows beyond self-service configuration.
            </IconCard>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Operating boundaries" title="A controlled deployment for sensitive election workflows.">
            <p>
              Stronger deployment boundaries support tighter access control, clearer data handling,
              and focused operational ownership for organizations running sensitive election
              workflows.
            </p>
          </SectionHeader>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <IconCard icon={ShieldCheck} title="Security boundary">
              Isolated deployment can support tighter access control, monitoring, and operational
              ownership for a defined organization.
            </IconCard>
            <IconCard icon={DatabaseZap} title="Data handling">
              Voter registry, participation, audit, and result surfaces are scoped around the
              agreed election roles and retention model.
            </IconCard>
            <IconCard icon={Network} title="Validation foundation">
              HushNetwork infrastructure remains the underlying foundation for validation and
              tamper-evident election state.
            </IconCard>
          </div>
        </div>
      </section>

      <section className="soft-band px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <SectionHeader title="Start from the election need.">
            <p>
              Each deployment starts with the governance decision the organization needs to run, the
              privacy boundary it expects, and the evidence it must be able to defend afterward.
            </p>
          </SectionHeader>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <PrimaryLink href="/hush-voting">Start with HushVoting!</PrimaryLink>
            <SecondaryLink href="/services">Back to services</SecondaryLink>
          </div>
        </div>
      </section>

      <PageFooter />
    </main>
  );
}
