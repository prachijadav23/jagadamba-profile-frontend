import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://www.jagdambaprofile.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jagdamba Profile Pvt. Ltd. | Steel Plate Supplier & CNC Profile Cutting, Vadodara",
    template: "%s | Jagdamba Profile",
  },
  description:
    "Jagdamba Profile Pvt. Ltd. is a Vadodara, Gujarat steel stockholding and processing company offering steel plates, CNC profile cutting, laser cutting, CNC drilling and ultrasonic testing under one roof.",
  keywords: [
    "steel plate supplier Vadodara",
    "steel plate supplier Gujarat",
    "CNC profile cutting Vadodara",
    "laser cutting Vadodara",
    "heavy plate cutting",
    "CNC drilling",
    "boiler quality plate supplier",
    "SA516 Grade 70 plate supplier",
    "S355J2+N plate supplier",
    "IS 2062 E350 plate supplier",
    "ultrasonic tested steel plates",
  ],
  openGraph: {
    type: "website",
    siteName: "Jagdamba Profile Pvt. Ltd.",
    title: "Jagdamba Profile Pvt. Ltd. | Precision in Steel. Strength in Every Cut.",
    description:
      "Steel plates, CNC profile cutting, laser cutting, CNC drilling and ultrasonic testing — complete steel processing under one roof in Vadodara, Gujarat.",
    url: siteUrl,
    images: [{ url: "/images/og-cover.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jagdamba Profile Pvt. Ltd. | Precision in Steel. Strength in Every Cut.",
    description:
      "Steel plates, CNC profile cutting, laser cutting, CNC drilling and ultrasonic testing under one roof in Vadodara, Gujarat.",
  },
  alternates: { canonical: siteUrl },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body className="bg-surface-primary font-sans text-ink-primary antialiased">
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <MobileBottomNav />
      </body>
    </html>
  );
}
