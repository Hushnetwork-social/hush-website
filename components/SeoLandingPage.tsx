import type { LucideIcon } from "lucide-react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import {
  IconCard,
  PageFooter,
  PrimaryLink,
  ProductIcon,
  SecondaryLink,
  SectionHeader,
  SiteBackground,
  Surface,
} from "@/components/Marketing";

type SeoLandingPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  primaryCta?: string;
  secondaryCta?: string;
  secondaryHref?: string;
  sections: Array<{
    eyebrow?: string;
    title: string;
    body: string;
  }>;
  cards: Array<{
    icon: LucideIcon;
    title: string;
    body: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
};

export function SeoLandingPage({
  eyebrow,
  title,
  intro,
  primaryCta = "Request a HushVoting! pilot",
  secondaryCta = "Explore HushVoting!",
  secondaryHref = "/hush-voting",
  sections,
  cards,
  faqs,
}: SeoLandingPageProps) {
  return (
    <main className="min-h-screen overflow-hidden">
      <SiteBackground />
      <Navbar />

      <section className="relative px-6 pb-16 pt-32">
        <div className="absolute right-0 top-20 hidden h-[28rem] w-[28rem] opacity-[0.14] lg:block">
          <ProductIcon product="voting" alt="" className="h-full w-full" />
        </div>
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-hush-purple-light">
              {eyebrow}
            </p>
            <h1 className="mt-4 text-5xl font-semibold leading-tight text-hush-text-primary md:text-7xl">
              {title}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-hush-text-primary/76 md:text-xl">
              {intro}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <PrimaryLink href="/contact">{primaryCta}</PrimaryLink>
              <SecondaryLink href={secondaryHref}>{secondaryCta}</SecondaryLink>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
          {cards.map(card => (
            <IconCard key={card.title} icon={card.icon} title={card.title}>
              {card.body}
            </IconCard>
          ))}
        </div>
      </section>

      {sections.map((section, index) => (
        <section key={section.title} className={`${index % 2 === 0 ? "soft-band" : ""} px-6 py-20`}>
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <SectionHeader align="left" eyebrow={section.eyebrow} title={section.title}>
              <p>{section.body}</p>
            </SectionHeader>
            <Surface className="p-5">
              <div className="space-y-3">
                {section.body
                  .split(". ")
                  .filter(Boolean)
                  .slice(0, 4)
                  .map(point => (
                    <div key={point} className="deep-well flex gap-3 rounded-lg p-4">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-hush-purple-light" />
                      <p className="text-sm leading-6 text-hush-text-primary/74">
                        {point.endsWith(".") ? point : `${point}.`}
                      </p>
                    </div>
                  ))}
              </div>
            </Surface>
          </div>
        </section>
      ))}

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Questions" title="Clear answers for serious remote voting buyers." />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {faqs.map(item => (
              <Surface key={item.question} as="article">
                <h2 className="text-xl font-semibold text-hush-text-primary">{item.question}</h2>
                <p className="mt-3 text-sm leading-7 text-hush-text-primary/72">{item.answer}</p>
              </Surface>
            ))}
          </div>
        </div>
      </section>

      <section className="soft-band px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <SectionHeader title="Discuss whether HushVoting! fits your organization.">
            <p>
              HushVoting! is best suited for pilot and external-validation conversations where
              eligibility, ballot privacy, and post-election evidence matter.
            </p>
          </SectionHeader>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <PrimaryLink href="/contact">{primaryCta}</PrimaryLink>
            <SecondaryLink href="/hush-voting">
              Learn more <ArrowRight className="ml-2 inline h-4 w-4" aria-hidden="true" />
            </SecondaryLink>
          </div>
        </div>
      </section>

      <PageFooter />
    </main>
  );
}
