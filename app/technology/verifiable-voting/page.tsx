import { Binary, FileCheck2, FileSearch, ShieldCheck } from "lucide-react";
import { createPageMetadata } from "@/app/seo";
import { SeoLandingPage } from "@/components/SeoLandingPage";

export const metadata = createPageMetadata({
  title: "Verifiable Voting Evidence | HushNetwork Technology",
  description:
    "How HushNetwork supports HushVoting! with verifiable voting evidence, audit-ready artifacts, privacy boundaries, and careful validation claims.",
  path: "/technology/verifiable-voting",
  image: "network",
  keywords: [
    "verifiable voting",
    "auditable online voting",
    "end-to-end verifiable voting",
    "zero knowledge proof voting",
    "privacy-first voting technology",
  ],
});

export default function VerifiableVotingPage() {
  return (
    <SeoLandingPage
      eyebrow="Verifiable voting"
      title="Verifiable voting evidence without public-election overclaims."
      intro="HushNetwork supports HushVoting! with privacy boundaries, protected election artifacts, result evidence, and an external-review path for serious organizational pilots."
      secondaryCta="Read HushVoting!"
      cards={[
        {
          icon: FileCheck2,
          title: "Evidence packages",
          body: "Election artifacts should help authorized reviewers understand what happened after the vote.",
        },
        {
          icon: ShieldCheck,
          title: "Privacy boundary checks",
          body: "Public and restricted materials should keep voter, trustee, and ballot boundaries explicit.",
        },
        {
          icon: Binary,
          title: "Protocol work",
          body: "Protocol Omega records the evidence model and cryptographic review direction for HushVoting!.",
        },
        {
          icon: FileSearch,
          title: "External review path",
          body: "The current baseline supports pilots and validation conversations, not certification claims.",
        },
      ]}
      sections={[
        {
          eyebrow: "Technical posture",
          title: "Verifiability is part of the trust story.",
          body: "HushVoting! should be evaluated by whether it can explain eligibility, accepted ballots, result release, privacy boundaries, and evidence artifacts. The aim is stronger reviewability for organizations whose votes are too important for generic polling software.",
        },
        {
          eyebrow: "Claim limits",
          title: "Credibility depends on stating the limits.",
          body: "The correct wording is validated technical baseline, pilot readiness, and external validation planning. HushVoting! should not claim certified secure, public-election ready, impossible to compromise, or anonymous against every observer.",
        },
      ]}
      faqs={[
        {
          question: "What does verifiable voting mean for HushVoting! today?",
          answer:
            "It means the product is being built around evidence, privacy-boundary checks, and reviewable election artifacts for organizational pilots and external validation conversations.",
        },
        {
          question: "Is HushVoting! externally certified?",
          answer:
            "No. The current claim is a validated technical baseline. Independent cryptographic review and formal certification remain future work.",
        },
        {
          question: "Does HushVoting! use zero-knowledge proof language?",
          answer:
            "The technical roadmap includes cryptographic proof and verification concepts, but public marketing should explain concrete evidence and limits before using deep cryptographic labels.",
        },
        {
          question: "Who is this technical page for?",
          answer:
            "Technical reviewers, privacy/GovTech observers, pilot partners, and organizations that want more than ordinary SaaS voting assurances.",
        },
      ]}
    />
  );
}
