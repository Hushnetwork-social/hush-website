import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

export const productIcons = {
  network: "/icons/hushnetwork_icon_transparent_subtle_glow.png",
  voting: "/icons/hushvoting_icon_transparent_subtle_glow.png",
  feeds: "/icons/hushfeeds_icon_transparent_subtle_glow.png",
  social: "/icons/hushsocial_icon_transparent_subtle_glow.png",
} as const;

type ProductIconKey = keyof typeof productIcons;

export function SiteBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#111827_0%,#23304B_45%,#111827_100%)]" />
      <div className="absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_30%_20%,rgba(167,139,250,0.18),transparent_38%),radial-gradient(circle_at_70%_18%,rgba(196,181,253,0.12),transparent_34%)]" />
      <div className="absolute inset-x-0 bottom-0 h-96 bg-[radial-gradient(circle_at_50%_100%,rgba(35,48,75,0.78),transparent_55%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(239,232,246,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(239,232,246,0.025)_1px,transparent_1px)] bg-[size:48px_48px] opacity-60" />
    </div>
  );
}

export function ProductIcon({
  product,
  alt,
  className = "h-16 w-16",
}: {
  product: ProductIconKey;
  alt: string;
  className?: string;
}) {
  return (
    <Image
      src={productIcons[product]}
      alt={alt}
      width={160}
      height={160}
      className={`${className} object-contain drop-shadow-[0_0_18px_rgba(167,139,250,0.28)]`}
      unoptimized
    />
  );
}

export function SectionHeader({
  eyebrow,
  title,
  children,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  align?: "left" | "center";
}) {
  const alignment = align === "left" ? "text-left" : "text-center mx-auto";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-hush-purple-light">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold leading-tight text-hush-text-primary md:text-5xl">
        {title}
      </h2>
      {children ? (
        <div className="mt-5 text-base leading-7 text-hush-text-primary/76 md:text-lg">
          {children}
        </div>
      ) : null}
    </div>
  );
}

export function Surface({
  children,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
}) {
  const Component = as;

  return (
    <Component className={`quiet-surface rounded-lg p-6 shadow-xl shadow-black/16 ${className}`}>
      {children}
    </Component>
  );
}

export function IconCard({
  icon: Icon,
  title,
  children,
  className = "",
}: {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Surface as="article" className={className}>
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-hush-purple/14 text-hush-purple-light">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="text-xl font-semibold text-hush-text-primary">{title}</h3>
      <div className="mt-3 text-sm leading-6 text-hush-text-primary/72">{children}</div>
    </Surface>
  );
}

export function ProductCard({
  product,
  title,
  label,
  children,
  href,
}: {
  product: ProductIconKey;
  title: string;
  label: string;
  children: ReactNode;
  href?: string;
}) {
  const content = (
    <Surface as="article" className="flex h-full flex-col transition duration-200 hover:-translate-y-1 hover:bg-hush-dark-element/90">
      <ProductIcon product={product} alt={`${title} icon`} className="mb-5 h-14 w-14" />
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-hush-purple-light/78">
        {label}
      </p>
      <h3 className="mt-2 text-2xl font-semibold text-hush-text-primary">{title}</h3>
      <div className="mt-4 text-sm leading-6 text-hush-text-primary/74">{children}</div>
      {href ? (
        <div className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-hush-purple-light">
          Learn more <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </div>
      ) : null}
    </Surface>
  );

  if (!href) {
    return content;
  }

  return (
    <Link href={href} className="block h-full focus-ring rounded-lg">
      {content}
    </Link>
  );
}

export function PrimaryLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-lg bg-[linear-gradient(135deg,#A78BFA_0%,#8B5CF6_100%)] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-hush-purple/18 transition hover:-translate-y-0.5 hover:shadow-hush-purple/28 focus-ring"
    >
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}

export function SecondaryLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-lg bg-hush-dark-element/88 px-5 py-3 text-sm font-semibold text-hush-text-primary transition hover:-translate-y-0.5 hover:bg-hush-dark-outer focus-ring"
    >
      {children}
    </Link>
  );
}

export function PageFooter() {
  return (
    <footer className="px-6 py-10 text-center text-sm text-hush-text-primary/56">
      <p>
        <span className="text-hush-text-primary">HushVoting!</span>{" "}
        <span className="text-hush-purple-light">is a product HushNetwork</span>
      </p>
    </footer>
  );
}
