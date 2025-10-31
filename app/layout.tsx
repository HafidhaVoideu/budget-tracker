import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import RootProviders from "@/components/providers/RootProviders";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Budget Tracker",
  description:
    "Take control of your money effortlessly: track income and expenses, set smart budgets, visualise spending patterns, and stay on top of your financial goals with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl="/sign-in">
      <html
        lang="en "
        className="dark"
        suppressHydrationWarning
        style={{
          colorScheme: "dark",
        }}
      >
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
        >
          <RootProviders>{children}</RootProviders>
        </body>
      </html>
    </ClerkProvider>
  );
  ``;
}
