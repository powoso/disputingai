import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Disputing.ai - Premium AI Domain For Sale",
  description:
    "Disputing.ai is a premium AI domain name available for purchase. Perfect for AI-powered dispute resolution, legal tech, and compliance platforms.",
  openGraph: {
    title: "Disputing.ai - Premium AI Domain For Sale",
    description:
      "Own the future of AI-powered dispute resolution. Premium .ai domain available now.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="antialiased text-white"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
