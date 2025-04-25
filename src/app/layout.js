import Navbar from "@/Components/Navbar";
import "./globals.css";
import Footer from "@/Components/Footer";
import StoreContextProvider from "@/context/StoreContext";

export const metadata = {
  title: {
    default: "Waffy Shopp",
    template: "%s | Waffy Shopp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <StoreContextProvider>
          <Navbar />
          {children}
          <Footer />
        </StoreContextProvider>
      </body>
    </html>
  );
}
