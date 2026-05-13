import { EyeOff, FileSearch, LockKeyhole, ShieldCheck } from "lucide-react";
import { createPageMetadata } from "@/app/seo";
import { SeoLandingPage } from "@/components/SeoLandingPage";

export const metadata = createPageMetadata({
  title: "Secret Ballot Online Voting | HushVoting!",
  description:
    "Secret-ballot online voting for organizations that need private ballot workflows, eligibility checkoff, trustee options, and careful privacy claims.",
  path: "/hush-voting/secret-ballot-online-voting",
  image: "voting",
  keywords: [
    "secret ballot online voting",
    "private online voting",
    "anonymous voting",
    "secure online voting",
    "privacy-first voting software",
  ],
});

export default function SecretBallotOnlineVotingPage() {
  return (
    <SeoLandingPage
      eyebrow="Secret ballot online voting"
      title="Secret-ballot online voting with honest privacy boundaries."
      intro="HushVoting! follows the practical paper-election split: the organization can check eligibility and participation, while ballot choice belongs in a protected ballot workflow."
      cards={[
        {
          icon: LockKeyhole,
          title: "Ballot separation",
          body: "Keep voter eligibility and ballot choice in different surfaces instead of one named record.",
        },
        {
          icon: ShieldCheck,
          title: "Protected artifacts",
          body: "Use encrypted election artifacts and final-result discipline for serious votes.",
        },
        {
          icon: EyeOff,
          title: "No total-anonymity claim",
          body: "Explain privacy carefully without claiming protection against every observer or threat model.",
        },
        {
          icon: FileSearch,
          title: "Review path",
          body: "Support authorized evidence review without exposing ordinary voters to unnecessary disclosure.",
        },
      ]}
      sections={[
        {
          eyebrow: "Plain language",
          title: "Secret ballot does not mean hiding the whole process.",
          body: "A serious election can require evidence about eligibility, participation, result publication, and audit review. The privacy question is which surfaces must remain separated: who had a voting right, who consumed a voting right, what protected ballot was accepted, and what final result was released.",
        },
        {
          eyebrow: "Careful claim posture",
          title: "HushVoting! avoids inflated anonymity claims.",
          body: "The current product direction uses careful wording: stronger ballot privacy, separated voter-right and ballot-choice surfaces, validated technical baseline, and pilot or external-validation readiness. HushVoting! should not be described as total anonymity, certified secure, or public-election ready.",
        },
      ]}
      faqs={[
        {
          question: "Does HushVoting! provide anonymous voting?",
          answer:
            "HushVoting! is designed for stronger ballot privacy and separated election surfaces. It should not be marketed as total anonymity against every observer or every possible threat model.",
        },
        {
          question: "Can the organization know who voted?",
          answer:
            "Yes. HushVoting! is built around a paper-equivalent model where eligibility and checkoff can be reviewed while the ballot choice remains separate.",
        },
        {
          question: "Who can see participation evidence?",
          answer:
            "Participation evidence belongs to authorized organization and audit roles, not ordinary public ballot artifacts.",
        },
        {
          question: "Is this the same as a hidden survey?",
          answer:
            "No. A serious secret-ballot workflow needs clearer eligibility, accepted-ballot handling, final result discipline, and post-election evidence.",
        },
      ]}
    />
  );
}
