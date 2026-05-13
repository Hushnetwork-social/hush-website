import { ClipboardCheck, FileCheck2, LockKeyhole, Users } from "lucide-react";
import { createPageMetadata } from "@/app/seo";
import { SeoLandingPage } from "@/components/SeoLandingPage";

export const metadata = createPageMetadata({
  title: "Online Voting For Associations | HushVoting!",
  description:
    "Online voting for associations, clubs, cooperatives, NGOs, and federations that need member eligibility, secret-ballot workflows, and audit-ready evidence.",
  path: "/hush-voting/online-voting-for-associations",
  image: "voting",
  keywords: [
    "online voting for associations",
    "association voting",
    "member voting software",
    "club voting",
    "online elections",
  ],
});

export default function OnlineVotingForAssociationsPage() {
  return (
    <SeoLandingPage
      eyebrow="Online voting for associations"
      title="Online voting software for associations, clubs, cooperatives, and NGOs."
      intro="HushVoting! helps member organizations run remote votes with clearer eligibility, stronger ballot privacy, and evidence that can be reviewed after the decision."
      cards={[
        {
          icon: Users,
          title: "Member eligibility",
          body: "Keep voting rights tied to the organization's own member records and election rules.",
        },
        {
          icon: LockKeyhole,
          title: "Private ballot workflow",
          body: "Separate eligibility and participation from the protected ballot-choice surface.",
        },
        {
          icon: ClipboardCheck,
          title: "Role-aware operation",
          body: "Support owner/admin, voter, trustee, and auditor workflows for serious decisions.",
        },
        {
          icon: FileCheck2,
          title: "Reviewable outcome",
          body: "Produce final result and evidence artifacts instead of relying only on meeting chat or a survey export.",
        },
      ]}
      sections={[
        {
          eyebrow: "Why it matters",
          title: "Associations need more than a poll link.",
          body: "A formal association vote often needs eligibility control, quorum awareness, ballot privacy, and a result record that can survive questions after the meeting. HushVoting! is designed for organizations whose votes matter enough to need process evidence, but that are not trying to run a national public election.",
        },
        {
          eyebrow: "Product fit",
          title: "Built around organizational governance.",
          body: "The first HushVoting! beachhead is clubs, associations, cooperatives, NGOs, federations, chambers, unions, foundations, and professional bodies. These organizations already know who their members are, but need a better remote voting workflow than email, spreadsheets, chat messages, or low-assurance survey tools.",
        },
      ]}
      faqs={[
        {
          question: "What is online voting for associations?",
          answer:
            "It is a remote voting workflow for member organizations where eligible voters can participate digitally while the organization keeps control over voter eligibility, voting windows, and result review.",
        },
        {
          question: "Is HushVoting! only for large organizations?",
          answer:
            "No. HushVoting! is intended for serious votes, not only large votes. A small board or member election can still need strong privacy and evidence if the decision is sensitive.",
        },
        {
          question: "Can it support clubs and federations?",
          answer:
            "Yes. Clubs, sport organizations, federations, chambers, cooperatives, NGOs, and professional bodies are the core early market for HushVoting! pilots.",
        },
        {
          question: "Does this replace legal advice for association voting?",
          answer:
            "No. Each organization still needs to confirm whether its statutes and local rules allow the specific remote voting process it wants to run.",
        },
      ]}
    />
  );
}
