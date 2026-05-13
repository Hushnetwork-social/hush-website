import { Building2, FileCheck2, Landmark, ShieldCheck } from "lucide-react";
import { createPageMetadata } from "@/app/seo";
import { SeoLandingPage } from "@/components/SeoLandingPage";

export const metadata = createPageMetadata({
  title: "Online Voting Switzerland For Associations | HushVoting!",
  description:
    "Online voting in Switzerland for private associations, clubs, cooperatives, NGOs, and federations that need careful privacy and governance workflows.",
  path: "/hush-voting/online-voting-switzerland",
  image: "voting",
  keywords: [
    "online voting Switzerland",
    "Swiss e-voting",
    "association voting Switzerland",
    "Swiss association voting software",
    "digital voting Swiss clubs",
  ],
});

export default function OnlineVotingSwitzerlandPage() {
  return (
    <SeoLandingPage
      eyebrow="Online voting Switzerland"
      title="Online voting for Swiss associations, clubs, cooperatives, and NGOs."
      intro="HushVoting! is positioned first for private organizational governance in Switzerland: member votes, board elections, delegate decisions, and pilots that need stronger privacy and evidence."
      cards={[
        {
          icon: Building2,
          title: "Swiss associations",
          body: "Support member organizations whose voting rights come from their own records and statutes.",
        },
        {
          icon: ShieldCheck,
          title: "Private governance",
          body: "Focus on private organizational votes rather than claiming public-election compliance.",
        },
        {
          icon: Landmark,
          title: "Careful e-voting context",
          body: "Use Swiss e-voting as market context without implying certification or public-law readiness.",
        },
        {
          icon: FileCheck2,
          title: "Pilot evidence",
          body: "Use real organizational pilots to validate workflows, privacy posture, and review expectations.",
        },
      ]}
      sections={[
        {
          eyebrow: "Market position",
          title: "Swiss e-voting is context, not the first claim.",
          body: "Switzerland has public-sector e-voting activity, but HushVoting! should not present itself as certified public-election infrastructure. The reachable opening is private associations, clubs, cooperatives, NGOs, federations, and chambers that need better remote votes.",
        },
        {
          eyebrow: "Buyer fit",
          title: "Start where membership and governance are already defined.",
          body: "Swiss organizations often already know their members, voters, and governance process. HushVoting! can support a pilot conversation when the missing piece is a remote voting workflow with privacy, role separation, and reviewable evidence.",
        },
      ]}
      faqs={[
        {
          question: "Can Swiss associations use online voting?",
          answer:
            "That depends on each association's statutes and applicable rules. HushVoting! can support pilot planning, but the organization should confirm its legal and governance basis.",
        },
        {
          question: "Is HushVoting! Swiss public-election software?",
          answer:
            "No. The current positioning is private organizational governance and pilot readiness, not Swiss public-election certification.",
        },
        {
          question: "Why mention Swiss e-voting?",
          answer:
            "Swiss e-voting shows that verifiable remote voting is an active category. HushVoting! starts with the more reachable private-governance layer.",
        },
        {
          question: "What Swiss organizations are the best early fit?",
          answer:
            "Associations, clubs, cooperatives, NGOs, federations, chambers, foundations, and member organizations with serious votes and distributed participants.",
        },
      ]}
    />
  );
}
