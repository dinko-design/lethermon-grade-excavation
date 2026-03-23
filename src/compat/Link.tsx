"use client";
import NextLink from "next/link";
import type { ComponentProps, ReactNode } from "react";

type NextLinkProps = ComponentProps<typeof NextLink>;

interface LinkProps extends Omit<NextLinkProps, "href"> {
  to?: string;
  href?: string;
  children?: ReactNode;
}

/**
 * Compatibility wrapper: accepts `to` (react-router style) or `href` (Next.js style).
 */
export function Link({ to, href, ...props }: LinkProps) {
  return <NextLink href={to || href || "#"} {...props} />;
}

export default Link;
