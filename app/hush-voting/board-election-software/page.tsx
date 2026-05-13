import { ClipboardList, FileSearch, Gavel, ShieldCheck } from "lucide-react";
import { createPageMetadata } from "@/app/seo";
import { SeoLandingPage } from "@/components/SeoLandingPage";

export const metadata = createPageMetadata({
  title: "Board Election Software | HushVoting!",
  description:
    "Board election software for organizations that need private online voting, governed result release, trustee options, and audit-ready evidence.",
  path: "/hush-voting/board-election-software",
  image: "voting",
  keywords: [
    "board election software",
    "governance voting",
    "online elections",
    "private online voting",
    "trustee online voting",
  ],
});

export default function BoardElectionSoftwarePage() {
  return (
    <SeoLandingPage
      eyebrow="Board election software"
      title="Board election software for sensitive organizational governance."
      intro="HushVoting! supports remote board and governance elections where privacy, role separation, final-result discipline, and evidence matter."
      cards={[
        {
          icon: Gavel,
          title: "Governed actions",
          body: "Election open, close, finalize, and review actions can follow a clearer governance path.",
        },
        {
          icon: ShieldCheck,
          title: "Trustee options",
          body: "Trustee-threshold workflows can add stronger separation for higher-scrutiny elections.",
        },
        {
          icon: ClipboardList,
          title: "Board workflows",
          body: "Use the same product model for officer elections, committee votes, and sensitive resolutions.",
        },
        {
          icon: FileSearch,
          title: "Audit review",
          body: "Give authorized reviewers evidence without turning every voter or ballot detail public.",
        },
      ]}
      sections={[
        {
          eyebrow: "Governance",
          title: "Board elections need legitimacy after the vote.",
          body: "A board election can be challenged because of eligibility, process, result timing, role conflict, or privacy concern. HushVoting! is built to make the workflow clearer before, during, and after the election.",
        },
        {
          eyebrow: "Operating model",
          title: "Match the voting mode to the seriousness of the decision.",
          body: "Admin-only elections can fit lower-governance contexts. Trustee-threshold elections add stronger separation when result release should not depend on one ordinary operator path. The product message should stay careful: validated baseline and pilot readiness, not formal certification.",
        },
      ]}
      faqs={[
        {
          question: "Can HushVoting! support board elections?",
          answer:
            "Board elections are one of the target use cases, especially when privacy, eligibility, and evidence matter more than a casual poll.",
        },
        {
          question: "What is trustee-threshold voting?",
          answer:
            "It is a stronger governance model where configured trustees participate in governed election actions and result-release workflows for the exact election target.",
        },
        {
          question: "Can voters see whether they were counted?",
          answer:
            "The product direction includes personal counted-status visibility while keeping broader participation and ballot artifacts limited to the appropriate roles.",
        },
        {
          question: "Does HushVoting! publish live results?",
          answer:
            "The first-rollout model is final-results-only, avoiding live plaintext result behavior during the voting window.",
        },
      ]}
    />
  );
}
