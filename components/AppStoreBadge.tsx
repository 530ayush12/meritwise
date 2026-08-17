export function AppStoreBadge({ href, label }: { href: string; label: string }) {
  return (
    <a
      className="app-store-link"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`Download ${label} on the App Store`}
    >
      <img
        src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
        alt="Download on the App Store"
        width="156"
        height="52"
      />
    </a>
  );
}
