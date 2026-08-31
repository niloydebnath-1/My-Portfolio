import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Niloy Debnath | Full Stack Developer",
  description:
    "Personal portfolio of Niloy Debnath — a Computer Science and Engineering student and Full Stack Developer specializing in MERN Stack, React.js, Next.js, and modern web technologies.",
  keywords: [
    "Niloy Debnath",
    "Full Stack Developer",
    "MERN Stack",
    "React.js",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Portfolio",
    "Web Developer",
    "Bangladesh",
  ],
  authors: [{ name: "Niloy Debnath" }],
  openGraph: {
    title: "Niloy Debnath | Full Stack Developer",
    description:
      "Computer Science and Engineering student passionate about building scalable web applications and creating user-focused software solutions.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-[family-name:var(--font-inter)] antialiased min-h-screen overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
