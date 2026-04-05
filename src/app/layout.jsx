import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  display: 'swap',
});

export const metadata = {
  title: "Eugenix Hair Sciences - Trusted Hair Transplant Clinic",
  description: "Specialized hair transplant clinic offering advanced procedures and results.",
  icons: {
    icon: [
      { url: '/favicon.png' },
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Load theme CSS via <link> exactly as the WP theme enqueues them */}
        <link rel="stylesheet" href="/bhubaneswar/react/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/bhubaneswar/react/assets/css/line-awesome.min.css" />
        <link rel="stylesheet" href="/bhubaneswar/react/assets/css/main.css" />
      </head>
      <body className={poppins.className}>
        {children}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js" strategy="lazyOnload" />
        <Script id="wow-init" strategy="lazyOnload">
          {`
            setTimeout(() => {
              if (typeof WOW !== 'undefined') {
                new WOW({ offset: 100, mobile: true, live: true }).init();
              }
            }, 1000);
          `}
        </Script>
      </body>
    </html>
  );
}
