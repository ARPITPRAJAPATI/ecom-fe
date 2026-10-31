import "./globals.css";
import { StoreProvider } from "../context/StoreContext";

export const metadata = {
  title: "Faeries Junk 🧚‍♀️ (@faeriesjunk.store) | Curated & Handpicked Vintage Rags",
  description: "Curated and handpicked vintage rags by @aryaamishraa. Y2K fairycore tops, archival lace corsets, pleated slip dresses, and vintage bags. Shipping across India 🇮🇳.",
  keywords: ["faeriesjunk.store", "fae junk", "vintage rags", "fairycore thrift india", "y2k butterfly top", "vintage corset india", "preloved vintage store"],
  openGraph: {
    title: "Faeries Junk 🧚‍♀️ | Curated Vintage Rags",
    description: "Curated and handpicked vintage rags by @aryaamishraa. Shipping across India.",
    type: "website",
    locale: "en_IN",
    siteName: "Faeries Junk"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
