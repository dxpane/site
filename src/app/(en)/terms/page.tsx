import { Legal } from "@/components/Legal";
import { pageMetadata } from "@/components/Shell";
import { dict } from "@/content";

export const metadata = pageMetadata("en", "terms");

export default function Page() {
  return <Legal doc={dict("en").terms} />;
}
