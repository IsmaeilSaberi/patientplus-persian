import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const myFont = localFont({
  src: "fonts/Shabnam-FD.woff",
  display: "swap",
});
// const fontSans = Plus_Jakarta_Sans({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"],
//   variable: "--font-sans",
// });

export const metadata: Metadata = {
  title: "PatientPlus  ",
  description: "A cool health app for seeting and managing appointments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={myFont.className}>
      <body className={cn("min-h-screen bg-dark-300 font-sans antialiased")}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
