import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PawCare Veterinary Clinic - Professional Pet Care in Ho Chi Minh City",
  description: "Trusted veterinary clinic in Ho Chi Minh City providing comprehensive pet care services. Book an appointment today for professional veterinary care.",
  keywords: "veterinary clinic, pet care, Ho Chi Minh City, animal hospital, vet services",
  authors: [{ name: "PawCare Veterinary Clinic" }],
  openGraph: {
    title: "PawCare Veterinary Clinic - Professional Pet Care",
    description: "Trusted veterinary clinic in Ho Chi Minh City providing comprehensive pet care services.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}