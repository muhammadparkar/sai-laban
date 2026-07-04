import Link from "next/link";
import type { ReactNode } from "react";

interface CtaButtonProps {
  href: string;
  children: ReactNode;
  variant?: "sky" | "outline" | "burgundy";
  className?: string;
}

const variants: Record<string, string> = {
  sky: "clay-btn-sky",
  outline: "clay-btn-outline",
  burgundy: "clay-btn-burgundy",
};

export default function CtaButton({
  href,
  children,
  variant = "sky",
  className = "",
}: CtaButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center gap-2 px-6 py-3 font-display font-bold tracking-wider cursor-pointer ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

