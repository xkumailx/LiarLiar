import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/section";
import { site } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${site.name}.`,
};

export default function PrivacyPage() {
  return <></>;
}
