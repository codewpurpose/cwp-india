import type { Metadata } from "next";
import { Archivo, Fraunces, Fredoka, Spline_Sans_Mono } from "next/font/google";
import "./globals.css";
import "./cartoon-home.css";

const SITE_NAME = "CodeWithPurpose India";
const SITE_TITLE = "CodeWithPurpose India — Free Coding Education for Students in India";
const SITE_DESCRIPTION =
  "We're a student-run nonprofit teaching real coding skills to students across India. Completely free, forever.";

const homeSans = Archivo({
  variable: "--font-home-sans",
  subsets: ["latin"],
});

const homeSerif = Fraunces({
  variable: "--font-home-serif",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
  style: ["normal", "italic"],
});

const homeMono = Spline_Sans_Mono({
  variable: "--font-home-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const playfulHeading = Fredoka({
  variable: "--font-playful-heading",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "free coding education",
    "learn to code for free",
    "student-run nonprofit",
    "free coding courses",
    "coding education for students in india",
    "CodeWithPurpose India",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Free Education for Every Student in India | CodeWithPurpose India",
    description:
      "Together in Learning, Stronger in Purpose. Free coding courses for students across India.",
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Education for Every Student in India | CodeWithPurpose India",
    description:
      "Together in Learning, Stronger in Purpose. Free coding courses for students across India.",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/seo/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/seo/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`home-root ${homeSans.variable} ${homeSerif.variable} ${homeMono.variable} ${playfulHeading.variable} min-h-full`}
      >
        <div className="cartoon-home">{children}</div>
      </body>
    </html>
  );
}
