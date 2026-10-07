import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ContactBubble from "@/components/ContactBubble";

export const metadata: Metadata = {
  title: "RRAP",
  description:
    "Personal website of RRAP — Information Technology student specializing in Artificial Intelligence.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen" suppressHydrationWarning>
        <ThemeProvider>
          {children}
          <ContactBubble />
        </ThemeProvider>
      </body>
    </html>
  );
}
