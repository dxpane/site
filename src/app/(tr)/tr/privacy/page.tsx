import { Legal } from "@/components/Legal";
import { pageMetadata } from "@/components/Shell";
import { dict } from "@/content";

export const metadata = pageMetadata("tr", "privacy");

export default function Page() {
  return <Legal doc={dict("tr").privacy} />;
}
