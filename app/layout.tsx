// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  title: "Thomas Frette - Full-Stack Developer & Software Engineer",
  description: "Personal portfolio website of Thomas Frette, showcasing projects, skills, and experience in full-stack development, React, Node.js, and modern web technologies.",
  keywords: ["Thomas Frette", "Full-Stack Developer", "Software Engineer", "React", "Node.js", "JavaScript", "TypeScript", "Web Development", "Portfolio"],
  authors: [{ name: "Thomas Frette" }],
  openGraph: {
    title: "Thomas Frette - Full-Stack Developer & Software Engineer",
    description: "Personal portfolio website showcasing projects, skills, and experience in full-stack development.",
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Thomas Frette Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thomas Frette - Full-Stack Developer & Software Engineer",
    description: "Personal portfolio website showcasing projects, skills, and experience in full-stack development.",
  },
  robots: "index, follow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
