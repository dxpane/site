import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { pageMetadata } from "@/components/Shell";
import { Story } from "@/components/Story";
import { dict } from "@/content";

export const metadata = pageMetadata("en");

export default function Home() {
  const d = dict("en");
  return (
    <>
      <Hero d={d} />
      <Story d={d} />
      <Faq d={d} />
    </>
  );
}
