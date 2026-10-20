import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, STIX_Two_Text } from "next/font/google";
import { themeInitScript } from "@/theme-script";
import "./globals.css";

const serif = STIX_Two_Text({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-stix",
  display: "swap",
});

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-plex-sans",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

const description =
  "Zechen Zhang is a PhD candidate in Physics at Harvard, advised by Haim Sompolinsky, and the founder of Orchestra Research. He works on how learning systems acquire knowledge, from the statistical mechanics of neural networks to language models and AI agents that do research.";

export const metadata: Metadata = {
  title: "Zechen Zhang",
  description,
  keywords: [
    "Zechen Zhang",
    "Orchestra Research",
    "Harvard Physics",
    "Haim Sompolinsky",
    "statistical mechanics of learning",
    "AI for science",
    "agent-native research",
    "ResearchTree",
    "Agent-Native Research Artifacts",
    "continual learning",
  ],
  authors: [{ name: "Zechen Zhang" }],
  creator: "Zechen Zhang",
  metadataBase: new URL("https://zechenzhangAGI.github.io"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Zechen Zhang",
    description,
    url: "https://zechenzhangAGI.github.io",
    siteName: "Zechen Zhang",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Zechen Zhang",
    description,
    creator: "@ZechenZhang5",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FBFBF9" },
    { media: "(prefers-color-scheme: dark)", color: "#131416" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
