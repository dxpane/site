import type { ReactNode } from "react";
import { Shell } from "@/components/Shell";

export { viewport } from "@/components/Shell";

export default function Layout({ children }: { children: ReactNode }) {
  return <Shell locale="tr">{children}</Shell>;
}
