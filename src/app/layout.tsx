import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const heading = localFont({
  src: "fonts/antique-olive-compact.otf",
  display: "swap",
  variable: "--font-antique-compact",
});

const paragraphTitle = localFont({
  src: "fonts/n-haas-grotesk-d.otf",
  display: "swap",
  variable: "--font-haas-grotesk-title",
});

const paragraph = localFont({
  src: "fonts/n-haas-grotesk-d-paragraph.otf",
  display: "swap",
  variable: "--font-haas-grotesk",
});

export const metadata: Metadata = {
  title: "Big Bear Conditions | Weather and Roads",
  description:
    "Big Bear Conditions provides weather and road conditions for the Big Bear Valley in California.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${heading.variable} ${paragraphTitle.variable} ${paragraph.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
