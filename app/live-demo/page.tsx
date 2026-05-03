import { createPageMetadata } from "@/app/seo";
import LiveDemoClient from "./LiveDemoClient";

export const metadata = createPageMetadata({
  title: "HushNetwork Live Demo | Web, Windows, And Android Access",
  description:
    "Open the HushNetwork web application or download the current Windows and Android builds for the live application ecosystem.",
  path: "/live-demo",
  image: "feeds",
  keywords: [
    "HushNetwork live demo",
    "HushFeeds download",
    "HushSocial demo",
    "HushNetwork Windows app",
    "HushNetwork Android app",
  ],
});

export default function LiveDemoPage() {
  return <LiveDemoClient />;
}
