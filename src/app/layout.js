import Navbar from "@/Components/Navbar";
import "./globals.css";
import Footer from "@/Components/Footer";
import StoreContextProvider from "@/context/StoreContext";
import { Spicy_Rice } from "next/font/google";
import { Roboto } from "next/font/google";

// Import the Spicy Rice font and apply it
const spicyRice = Spicy_Rice({
  subsets: ['latin'],
  weight: '400', // Optional, you can specify different font weights
  display: 'swap',
  variable: "--font_Spicy_Rice",
});
const roboto = Roboto({
  subsets: ['latin'],
  weight: '400', // Optional, you can specify different font weights
  display: 'swap',
  variable: "--font_Roboto",
});

export const metadata = {
  title: {
    default: "Waffy Shop",
    template: "%s | Waffy Shop",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spicyRice.className} ${roboto.className} overflow-x-hidden`}>
        <StoreContextProvider>
          <Navbar />
          {children}
          <Footer />
        </StoreContextProvider>
      </body>
    </html>
  );
}
