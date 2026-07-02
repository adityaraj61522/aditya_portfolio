import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aditya-raj.dev"),
  title: `${profile.name} — ${profile.role}`,
  description: profile.summary,
  keywords: [
    "Aditya Raj",
    "Software Development Engineer",
    "Full-Stack Developer",
    "Generative AI",
    "LLM",
    "RAG",
    "LangChain",
    "FastAPI",
    "Node.js",
    "Backend Engineer",
  ],
  authors: [{ name: profile.name }],
  icons: {
    icon: "/profile.jpg",
    apple: "/profile.jpg",
  },
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
