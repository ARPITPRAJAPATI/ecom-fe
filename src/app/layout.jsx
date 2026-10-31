import "./globals.css";
import { StoreProvider } from "../context/StoreContext";

export const metadata = {
  title: "Lollipop Sleek | Aesthetic Lavender Boutique & Parisian Luxury",
  description: "Curated collection of fine baroque jewelry, minimalist hand watches, soy candles, and chic Parisian accessories for the modern muse.",
  keywords: ["lavender boutique", "female jewelry", "aesthetic watch", "soy candle", "french chic accessories"],
  openGraph: {
    title: "Lollipop Sleek | Aesthetic Lavender Boutique",
    description: "Curated fine jewelry, hand watches, and Provence botanical scents.",
    type: "website",
    locale: "en_US",
    siteName: "Lollipop Sleek"
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
