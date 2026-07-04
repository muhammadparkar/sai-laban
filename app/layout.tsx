import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";

export const metadata: Metadata = {
  title: "Sai Laban — Taste the Creamy Hype",
  description:
    "Egyptian laban, konafa, and creamy desserts. First India store now open in Koregaon Park, Pune.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <Header />
        <ScrollReveal />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

