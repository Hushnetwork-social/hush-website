import { BarChart3, ClipboardCheck, FileCheck2, Vote } from "lucide-react";
import { createPageMetadata } from "@/app/seo";
import { SeoLandingPage } from "@/components/SeoLandingPage";

export const metadata = createPageMetadata({
  title: "Election Software Vs Survey Tools | HushVoting!",
  description:
    "Compare survey tools with serious online election software for associations, boards, cooperatives, NGOs, and federations.",
  path: "/hush-voting/election-software-vs-survey-tools",
  image: "voting",
  keywords: [
    "election software",
    "online voting tool",
    "online voting system",
    "association voting",
    "online elections",
  ],
});

export default function ElectionSoftwareVsSurveyToolsPage() {
  return (
    <SeoLandingPage
      eyebrow="Election software"
      title="Election software for decisions too serious for survey tools."
      intro="Survey tools are useful for feedback. HushVoting! is for organizational votes where eligibility, ballot privacy, role separation, and final evidence matter."
      cards={[
        {
          icon: Vote,
          title: "Formal votes",
          body: "Board elections, member votes, statute changes, delegate decisions, and sensitive governance questions.",
        },
        {
          icon: ClipboardCheck,
          title: "Eligibility checkoff",
          body: "A voting right should be managed and consumed intentionally, not inferred from a generic form response.",
        },
        {
          icon: BarChart3,
          title: "Final results only",
          body: "Avoid live plaintext result behavior when a vote needs final-result discipline.",
        },
        {
          icon: FileCheck2,
          title: "Evidence after the vote",
          body: "Create a review path that can answer questions after the meeting is over.",
        },
      ]}
      sections={[
        {
          eyebrow: "Comparison",
          title: "A survey collects preferences. An election creates a decision record.",
          body: "The difference matters when members, boards, auditors, or trustees may later ask whether the right people voted, whether the ballot was private, whether the result was final, and whether the process can be explained without exposing too much personal data.",
        },
        {
          eyebrow: "HushVoting! angle",
          title: "More serious than a survey, more focused than public-election infrastructure.",
          body: "HushVoting! targets private organizational governance first. It is designed for associations, clubs, cooperatives, NGOs, federations, and boards that need stronger election evidence without entering a public-election procurement process.",
        },
      ]}
      faqs={[
        {
          question: "Why not use a free online voting tool?",
          answer:
            "Free tools may be enough for casual preferences. They are often weak when the organization needs eligibility control, ballot privacy, role-specific review, and defensible evidence.",
        },
        {
          question: "What makes election software different?",
          answer:
            "Election software should model voting rights, participation, ballot acceptance, result publication, and post-election review as part of one workflow.",
        },
        {
          question: "Is HushVoting! for public elections?",
          answer:
            "The current commercial focus is private organizational governance and pilots, not a claim of public-election certification.",
        },
        {
          question: "When should an organization consider HushVoting!?",
          answer:
            "Consider it when a vote needs more trust than a survey link because the decision is sensitive, contested, recurring, or formally governed.",
        },
      ]}
    />
  );
}
