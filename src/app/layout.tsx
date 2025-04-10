import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { scripts, stylesheets } from "@/model";
import Script from 'next/script'
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sudeep Dutta",
  description:
    "Experienced Product Engineer and Full-Stack Developer, specializing in the development and maintenance of robust web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      {/* <link rel="icon" type="image/icon" href="favicon.ico"/> */}
        {stylesheets.map((sheet) => (
          <link key={sheet.id} rel="stylesheet" href={sheet.href} />
        ))}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        {scripts.map((script)=><Script key={script.id} src={script.href} />)}
      </body>
    </html>
  );
}
