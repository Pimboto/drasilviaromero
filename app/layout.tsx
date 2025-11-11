import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontBody, fontSubtitle, fontTitle } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans text-foreground antialiased",
          fontBody.variable,
          fontTitle.variable,
          fontSubtitle.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex flex-1 flex-col">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
