import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zechen Zhang | Physicist, AI Researcher, Founder",
  description: "Building Orchestra to democratize AI for scientific discovery. Physicist turned AI researcher, working to distribute the power of AI systems to everyone.",
  keywords: ["AI", "Machine Learning", "Physics", "Orchestra", "Scientific Research", "Founder"],
  authors: [{ name: "Zechen Zhang" }],
  openGraph: {
    title: "Zechen Zhang | Physicist, AI Researcher, Founder",
    description: "Building Orchestra to democratize AI for scientific discovery.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zechen Zhang | Physicist, AI Researcher, Founder",
    description: "Building Orchestra to democratize AI for scientific discovery.",
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
