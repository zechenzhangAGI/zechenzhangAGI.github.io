import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zechen Zhang | Building AI Scientific Assistants for Everyone",
  description: "Zechen Zhang - Founder of Orchestra, Harvard PhD, deep learning theory researcher. Building AI scientific assistants to democratize research. From statistical mechanics of neural networks to AI agents for science.",
  keywords: [
    "Zechen Zhang",
    "Orchestra",
    "AI scientific assistant",
    "deep learning theory",
    "Harvard PhD",
    "AI for science",
    "machine learning researcher",
    "AI safety",
    "continual learning",
    "LLM memory",
  ],
  authors: [{ name: "Zechen Zhang" }],
  creator: "Zechen Zhang",
  metadataBase: new URL("https://zechenzhangAGI.github.io"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Zechen Zhang | Building AI Scientific Assistants for Everyone",
    description: "Founder of Orchestra. Harvard PhD in deep learning theory. Building AI scientific assistants to democratize research for everyone with a curious mind.",
    url: "https://zechenzhangAGI.github.io",
    siteName: "Zechen Zhang",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zechen Zhang | Building AI Scientific Assistants for Everyone",
    description: "Founder of Orchestra. Harvard PhD in deep learning theory. Building AI scientific assistants to democratize research.",
    creator: "@ZechenZhang5",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
