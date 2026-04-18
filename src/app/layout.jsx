import "./globals.css";
import ThemeToggle from "@/components/theme-toggle";
import Footer from "@/components/sections/footer";
import AsciiCosmos from "@/components/AsciiCosmos";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
  title: {
    template: "%s | Culturae",
    default: "Culturae - The Open-Source Quiz Platform",
  },
  description:
    "Culturae is an open-source, self-hostable general culture platform built for multiplayer, 1vs1, and solo quiz games.",
  keywords: [
    "Culturae",
    "Quiz Platform",
    "General Culture",
    "Self-Hosted",
    "Open Source",
    "Multiplayer Quiz",
    "Geography Quiz",
  ],
  authors: [{ name: "Culturae Org" }],
  creator: "Culturae Org",
  publisher: "Culturae Org",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://culturae.me",
    title: "Culturae - Open-Source Quiz Platform",
    description:
      "Culturae is an open-source, self-hostable general culture platform built for multiplayer, 1vs1, and solo quiz games.",
    siteName: "Culturae",
  },
  twitter: {
    card: "summary_large_image",
    title: "Culturae - Open-Source Quiz Platform",
    description:
      "Culturae is an open-source, self-hostable general culture platform built for multiplayer, 1vs1, and solo quiz games.",
    creator: "@culturae",
  },
  alternates: {
    canonical: "https://culturae.me",
  },
};

import { GeistPixelSquare } from "geist/font/pixel";
import { Space_Mono, Press_Start_2P } from "next/font/google";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
  display: "swap",
});

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Culturae",
    operatingSystem: "Windows, macOS, Linux, iOS, Android",
    applicationCategory: "GameApplication",
    description:
      "Culturae is an open-source, self-hostable general culture platform built for multiplayer, 1vs1, and solo quiz games.",
    url: "https://culturae.me",
  };

  return (
    <html lang="en" suppressHydrationWarning className={`${spaceMono.variable} ${pressStart.variable}`}>
      <head>
        <meta name="theme-color" content="#0B0D0E" />
        <meta name="color-scheme" content="dark light" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScrollProvider>
            <div className="grid min-h-[100dvh] grid-rows-[1fr_auto] overflow-x-hidden">
              <main
                className={`${GeistPixelSquare.className} max-w-[1800px] px-6 pt-14 md:mx-auto md:px-0 md:pt-24`}
              >
                <div className="fixed inset-0 z-[-1] opacity-60">
                  <AsciiCosmos />
                </div>
                {children}
              </main>
              <Footer />
              <ThemeToggle />
            </div>
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
