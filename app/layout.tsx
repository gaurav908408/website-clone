import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arcjet - AI agent runtime security",
  description:
    "See every AI agent in your company and decide what each one is allowed to do.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  metadataBase: new URL("https://arcjet.com"),
  applicationName: "Arcjet",
  keywords: ["Arcjet", "AI agent security", "runtime security", "prompt injection"],
  authors: [{ name: "Arcjet" }],
  openGraph: {
    title: "Arcjet - AI agent runtime security",
    description:
      "See every AI agent in your company and decide what each one is allowed to do.",
    type: "website",
    siteName: "Arcjet",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arcjet - AI agent runtime security",
    description:
      "See every AI agent in your company and decide what each one is allowed to do.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
<body className="min-h-full flex flex-col bg-black text-white">
          {children}
        </body>
    </html>
  );
}
