import type { Metadata, MetadataRoute } from "next";

export const siteUrl = "https://www.hushnetwork.social";
export const siteName = "HushNetwork";
export const defaultTitle = "HushNetwork | Privacy Infrastructure For Governed Remote Voting";
export const defaultDescription =
  "HushNetwork powers HushVoting!, a privacy-first remote voting product for organizations that need stronger ballot privacy, role separation, and auditability.";

type ImageKey = "network" | "voting" | "feeds" | "social";

const imageByKey: Record<ImageKey, string> = {
  network: "/icons/hushnetwork_icon_transparent_subtle_glow.png",
  voting: "/icons/hushvoting_icon_transparent_subtle_glow.png",
  feeds: "/icons/hushfeeds_icon_transparent_subtle_glow.png",
  social: "/icons/hushsocial_icon_transparent_subtle_glow.png",
};

export const siteRoutes = [
  {
    path: "/",
    priority: 1,
    changeFrequency: "weekly",
  },
  {
    path: "/hush-voting",
    priority: 0.95,
    changeFrequency: "weekly",
  },
  {
    path: "/services",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/technology",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/private-server",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/live-demo",
    priority: 0.75,
    changeFrequency: "weekly",
  },
  {
    path: "/roadmap",
    priority: 0.6,
    changeFrequency: "monthly",
  },
] satisfies Array<{
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}>;

export function absoluteUrl(path: string) {
  return path === "/" ? siteUrl : `${siteUrl}${path}`;
}

export function createPageMetadata({
  title,
  description,
  path,
  image = "network",
  keywords = [],
}: {
  title: string;
  description: string;
  path: string;
  image?: ImageKey;
  keywords?: string[];
}): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = imageByKey[image];

  return {
    title: {
      absolute: title,
    },
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: imageUrl,
          width: 1254,
          height: 1254,
          alt: `${siteName} ${image} product icon`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/icons/hushnetwork_icon_transparent_subtle_glow.png`,
  description: defaultDescription,
  brand: [
    {
      "@type": "Brand",
      name: "HushVoting!",
    },
    {
      "@type": "Brand",
      name: "HushFeeds!",
    },
    {
      "@type": "Brand",
      name: "HushSocial!",
    },
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
  description: defaultDescription,
};

export const hushVotingJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "HushVoting!",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: absoluteUrl("/hush-voting"),
  image: `${siteUrl}/icons/hushvoting_icon_transparent_subtle_glow.png`,
  description:
    "Privacy-first remote voting for associations, clubs, cooperatives, NGOs, federations, and organizations that need stronger ballot privacy and auditability.",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/PreOrder",
    url: absoluteUrl("/hush-voting"),
  },
  provider: {
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
  },
};

export const serviceStackJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "HushNetwork services",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "HushVoting!",
      url: absoluteUrl("/hush-voting"),
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "HushFeeds!",
      url: absoluteUrl("/live-demo"),
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "HushSocial!",
      url: absoluteUrl("/live-demo"),
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Private HushNetwork deployments",
      url: absoluteUrl("/private-server"),
    },
  ],
};
