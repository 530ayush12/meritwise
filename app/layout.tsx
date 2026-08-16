import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://meritwise.xyz"),
  title: {
    default: "Meritwise — Apps and ideas for learning and well-being",
    template: "%s — Meritwise",
  },
  description: "Independent iOS apps and writing about education, well-being, product design, and thoughtful technology.",
  openGraph: {
    title: "Meritwise",
    description: "Apps and ideas for learning and well-being.",
    url: "https://meritwise.xyz",
    siteName: "Meritwise",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
