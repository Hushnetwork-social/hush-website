import { LockKeyhole, MessageSquareText, Network, Users } from "lucide-react";
import { createPageMetadata } from "@/app/seo";
import { SeoLandingPage } from "@/components/SeoLandingPage";

export const metadata = createPageMetadata({
  title: "Private Social Network Infrastructure | HushNetwork",
  description:
    "HushNetwork connects HushVoting!, HushFeeds!, and HushSocial! as a privacy-first ecosystem for governance, notifications, and community workflows.",
  path: "/hushnetwork/private-social-network",
  image: "social",
  keywords: [
    "private social network",
    "social media privacy",
    "privacy-first social network",
    "private messaging",
    "decentralized social network",
  ],
});

export default function PrivateSocialNetworkPage() {
  return (
    <SeoLandingPage
      eyebrow="Private social network"
      title="Private social-network infrastructure around serious governance workflows."
      intro="HushNetwork is not marketed as a generic social network first. HushVoting! is the commercial wedge; HushFeeds! and HushSocial! provide the connected privacy-first application surfaces around it."
      secondaryCta="Explore services"
      secondaryHref="/services"
      cards={[
        {
          icon: Network,
          title: "Shared foundation",
          body: "HushNetwork provides the privacy and validation layer underneath the product stack.",
        },
        {
          icon: MessageSquareText,
          title: "Action channel",
          body: "HushFeeds! can route election prompts and workflow notifications to the right roles.",
        },
        {
          icon: Users,
          title: "Community surface",
          body: "HushSocial! keeps the wider organization connected around formal governance moments.",
        },
        {
          icon: LockKeyhole,
          title: "Privacy posture",
          body: "The ecosystem should be explained through practical privacy boundaries, not vague social claims.",
        },
      ]}
      sections={[
        {
          eyebrow: "Positioning",
          title: "Do not make social network the HushVoting front door.",
          body: "Google Trends showed that social network is noisy and often film-related. HushNetwork should use private social network and social media privacy content for ecosystem authority, while HushVoting! pages stay focused on online voting, election software, and association governance.",
        },
        {
          eyebrow: "Ecosystem",
          title: "Organizations are communities before and after the vote.",
          body: "A serious vote needs context, reminders, member communication, and continuity after the result. HushFeeds! and HushSocial! support those surrounding workflows while HushVoting! remains the main commercial product.",
        },
      ]}
      faqs={[
        {
          question: "Is HushNetwork only a voting product?",
          answer:
            "No. HushVoting! is the first commercial focus, but HushNetwork also includes HushFeeds! and HushSocial! as connected application surfaces.",
        },
        {
          question: "Why not lead with social-network SEO?",
          answer:
            "The term is broad and noisy. It is weaker for acquiring HushVoting! pilot conversations than online voting, election software, and association voting phrases.",
        },
        {
          question: "How does HushSocial! relate to HushVoting!?",
          answer:
            "HushSocial! provides community context around organizations, while HushVoting! handles formal governed voting workflows.",
        },
        {
          question: "Is this a decentralized social network?",
          answer:
            "HushNetwork has privacy and distributed-validation foundations, but the marketing should stay practical and explain the product workflows before technical labels.",
        },
      ]}
    />
  );
}
