/**
 * "Coming soon" pill until the app is live (M4). Apple's marketing guidelines forbid using the Apple logo in our own
 * artwork, so this stays text-only; at launch it is replaced by the official "Download on the App Store" badge.
 */
export function AppStoreBadge({ label }: { label: string }) {
  return <span className="badge">{label}</span>;
}
