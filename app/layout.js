import { Space_Grotesk, Work_Sans } from "next/font/google";
import "./globals.css";
import { siteSettings } from "../lib/fallbackData";
import { getSiteUrl } from "../lib/env";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: siteSettings.defaultSeoTitle,
    template: `%s | ${siteSettings.businessName}`,
  },
  description: siteSettings.defaultSeoDescription,
  openGraph: {
    title: siteSettings.defaultSeoTitle,
    description: siteSettings.defaultSeoDescription,
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${workSans.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
