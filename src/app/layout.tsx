import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "DevDesigns | Premium Web Design & Digital Solutions",
  description: "DevDesigns provides high-quality web design, development, UI/UX, and digital marketing services. Elevate your digital presence with our expert solutions.",
  keywords: ["web design", "web development", "UI/UX design", "digital marketing", "ecommerce", "DevDesigns"],
  authors: [{ name: "DevDesigns Team" }],
  creator: "DevDesigns",
  publisher: "DevDesigns",
  metadataBase: new URL("https://www.devdesigns.net"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DevDesigns | Premium Web Design & Digital Solutions",
    description: "DevDesigns provides high-quality web design, development, UI/UX, and digital marketing services.",
    url: "https://www.devdesigns.net",
    siteName: "DevDesigns",
    images: [
      {
        url: "/logo.svg",
        width: 800,
        height: 600,
        alt: "DevDesigns Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevDesigns | Premium Web Design & Digital Solutions",
    description: "DevDesigns provides high-quality web design, development, UI/UX, and digital marketing services.",
    images: ["/logo.svg"],
  },
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6PXL01XDVC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-6PXL01XDVC');
          `}
        </Script>
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
