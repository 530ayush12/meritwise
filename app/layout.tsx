import type { Metadata } from "next";
import { ScrollDepth } from "@/components/ScrollDepth";
import "./globals.css";
import "./refine.css";
import "./extras.css";
import "./motion.css";
import "./icon-fidelity.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://meritwise.xyz"),
  title: {
    default: "Meritwise | Apps, stories, and ideas",
    template: "%s | Meritwise",
  },
  description: "Independent apps, first-person stories, and writing about learning, well-being, product design, and building thoughtful technology.",
  applicationName: "Meritwise",
  icons: {
    icon: [
      { url: "/meritwise-icon.png?v=5", type: "image/png", sizes: "1024x1024" },
    ],
    shortcut: "/meritwise-icon.png?v=5",
    apple: [
      { url: "/meritwise-icon.png?v=5", type: "image/png", sizes: "1024x1024" },
    ],
  },
  openGraph: {
    title: "Meritwise",
    description: "Apps, stories, and ideas for learning and well-being.",
    url: "https://meritwise.xyz",
    siteName: "Meritwise",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <ScrollDepth />
        {children}
      </body>
    </html>
  );
}
