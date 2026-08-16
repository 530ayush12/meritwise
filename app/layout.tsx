import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meritwise — Apps and ideas for learning and well-being",
  description:
    "Meritwise is a showcase for thoughtful iOS apps, educational technology, wellness products, and practical articles.",
  metadataBase: new URL("https://meritwise.xyz"),
  openGraph: {
    title: "Meritwise",
    description: "Apps and ideas for learning and well-being.",
    url: "https://meritwise.xyz",
    siteName: "Meritwise",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
