import { ClipboardCheck, FileSearch, ShieldCheck, Vote } from "lucide-react";
import { createPageMetadata } from "@/app/seo";
import { ContactForm } from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
import {
  IconCard,
  PageFooter,
  ProductIcon,
  SectionHeader,
  SiteBackground,
  Surface,
} from "@/components/Marketing";

export const metadata = createPageMetadata({
  title: "Request A HushVoting! Pilot | HushNetwork",
  description:
    "Contact HushNetwork about a HushVoting! pilot, association election, secret-ballot online voting workflow, or verifiable voting review.",
  path: "/contact",
  image: "voting",
  keywords: [
    "HushVoting pilot",
    "online voting pilot",
    "association voting consultation",
    "secret ballot online voting",
    "private online voting",
  ],
});

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <SiteBackground />
      <Navbar />

      <section className="px-6 pb-16 pt-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-lg bg-hush-dark-element/72">
              <ProductIcon product="voting" alt="" className="h-16 w-16" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-hush-purple-light">
              Contact
            </p>
            <h1 className="mt-4 text-5xl font-semibold leading-tight text-hush-text-primary md:text-7xl">
              Request a HushVoting! pilot conversation.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-hush-text-primary/76 md:text-xl">
              Use this form for association voting, club elections, cooperative governance, NGO
              votes, federation workflows, verifiable voting review, or a private HushNetwork pilot.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      <section className="soft-band px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Best fit" title="Useful requests are tied to a real governance workflow.">
            <p>
              HushVoting! is strongest when the organization needs more than a survey link:
              eligibility, ballot privacy, final-result discipline, and evidence that can be
              reviewed after the vote.
            </p>
          </SectionHeader>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <IconCard icon={Vote} title="Association or club vote">
              Member votes, board elections, delegate decisions, statute changes, or recurring
              annual meeting workflows.
            </IconCard>
            <IconCard icon={ClipboardCheck} title="Pilot planning">
              A controlled pilot for one real election with rehearsal, operating model, and result
              review expectations.
            </IconCard>
            <IconCard icon={ShieldCheck} title="Privacy posture">
              Secret-ballot online voting with separated eligibility, participation, and ballot
              choice surfaces.
            </IconCard>
            <IconCard icon={FileSearch} title="Evidence review">
              Questions about verifiable voting, audit-ready artifacts, external review, or current
              validation limits.
            </IconCard>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <Surface className="p-8">
            <h2 className="text-3xl font-semibold text-hush-text-primary">
              What to include in the message
            </h2>
            <div className="mt-5 grid gap-4 text-sm leading-7 text-hush-text-primary/74 md:grid-cols-2">
              <p>
                Mention the organization type, approximate number of voters, vote type, target
                timeline, and whether the decision needs a secret ballot, trustee review, or audit
                evidence.
              </p>
              <p>
                Do not include private member lists, voter data, credentials, or confidential
                election records in the first message.
              </p>
            </div>
          </Surface>
        </div>
      </section>

      <PageFooter />
    </main>
  );
}
