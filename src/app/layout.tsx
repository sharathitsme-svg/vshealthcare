import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";
import "aos/dist/aos.css";

import AOSProvider from "./components/AOSProvider";
import Schema from "./components/Schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vshealthcareclinic.com"),

  title:
    "VS Health Care Clinic | Dr. B. Darshan Koel | Internal Medicine Specialist | Dilsukhnagar, Hyderabad",

  description:
    "VS Health Care Clinic offers expert Internal Medicine consultation by Dr. B. Darshan Koel (MBBS, MD Internal Medicine) in Dilsukhnagar, Hyderabad. Specialized care for diabetes, hypertension, thyroid disorders, respiratory diseases, infectious diseases, fever, preventive health check-ups and comprehensive adult healthcare.",

  keywords: [
    "VS Health Care Clinic",
    "VS Health Care",
    "Dr B Darshan Koel",
    "Dr Darshan Koel",
    "Internal Medicine Specialist Hyderabad",
    "General Physician Hyderabad",
    "Physician Dilsukhnagar",
    "Internal Medicine Doctor",
    "Diabetes Doctor Hyderabad",
    "Hypertension Specialist",
    "Respiratory Disease Specialist",
    "Thyroid Treatment",
    "Fever Specialist",
    "Infectious Disease Doctor",
    "Adult Physician",
    "Preventive Health Checkup",
    "Dilsukhnagar Clinic",
    "Doctor Near Me",
    "Hyderabad Physician",
    "Internal Medicine Hyderabad",
  ],

  authors: [{ name: "VS Health Care" }],

  creator: "VS Health Care",

  openGraph: {
    title: "VS Health Care Clinic | Dr. B. Darshan Koel",

    description:
      "Expert Internal Medicine consultation in Dilsukhnagar, Hyderabad.",

    url: "https://vshealthcareclinic.com",

    siteName: "VS Health Care Clinic",

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "VS Health Care Clinic | Dr. B. Darshan Koel",

    description:
      "Expert Internal Medicine consultation in Hyderabad.",
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

        {children}

        <GoogleAnalytics gaId="G-DY3GFC9GRN" />
      </body>
    </html>
  );
}