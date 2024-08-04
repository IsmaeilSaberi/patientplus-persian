import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";

const myFont = localFont({
  src: "fonts/Shabnam-FD.woff",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Patient Online  ",
  description: "اپلیکیشن مدیریت ارتباط و قرار ملاقات پزشک و بیمار.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={myFont.className}>
      <body className={cn("min-h-screen bg-dark-300 font-sans antialiased")}>
        <Header />
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
