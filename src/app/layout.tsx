import { GoogleAnalytics } from "@next/third-parties/google";
import Schema from "./components/Schema";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";

import AOSProvider from "./components/AOSProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VS Health Care | Dr. B. Darshan Koel | Internal Medicine | Hyderabad",

  description:
    "VS Health Care provides expert Internal Medicine consultation by Dr. B. Darshan Koel in Dilsukhnagar, Hyderabad. Specializing in diabetes, hypertension, respiratory diseases, infectious diseases, preventive health check-ups, and comprehensive adult healthcare.",

  keywords: [
    "VS Health Care",
    "Dr. B. Darshan Koel",
    "Internal Medicine",
    "General Physician Hyderabad",
    "Internal Medicine Specialist",
    "Diabetes Specialist",
    "Hypertension Treatment",
    "Respiratory Diseases",
    "Fever Treatment",
    "Preventive Health Check-up",
    "Dilsukhnagar Doctor",
    "Hyderabad Clinic",
  ],

  authors: [{ name: "VS Health Care" }],

  creator: "VS Health Care",

  metadataBase: new URL("https://vshealthcareclinic.com"),
  openGraph: {
    title: "VS Health Care",
    description:
      "Expert Internal Medicine Consultation by Dr. B. Darshan Koel.",
    url: "https://vshealthcareclinic.com",
    siteName: "VS Health Care",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "VS Health Care",
    description:
      "Expert Internal Medicine Consultation by Dr. B. Darshan Koel.",
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
      <body className="min-h-full flex flex-col">
        <AOSProvider />
        <Schema />
        <GoogleAnalytics gaId="G-DY3GFC9GRN" />

        {children}
      </body>
    </html>
  );
} 