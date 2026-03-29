import { Poppins } from "next/font/google";
import "../assets/css/bootstrap.min.css";
import "line-awesome/dist/line-awesome/css/line-awesome.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/main.css";
import "./globals.css";

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  display: 'swap',
});

export const metadata = {
  title: "Eugenix Hair Sciences - Trusted Hair Transplant Clinic",
  description: "Specialized hair transplant clinic offering advanced procedures and results.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
