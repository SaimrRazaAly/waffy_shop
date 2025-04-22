import "./globals.css";

export const metadata = {
  title: {
    default: "Waffy Shopp",
    template: "%s | Waffy Shopp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
