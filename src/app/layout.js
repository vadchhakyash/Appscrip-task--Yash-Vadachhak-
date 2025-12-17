import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Mettä Muse | Discover Our Products",
  description:
    "Shop curated products at Mettä Muse. Explore our latest collection with detailed filters, responsive layouts, and easy browsing.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mettä Muse | Discover Our Products",
    description:
      "Shop curated products at Mettä Muse. Explore our latest collection with detailed filters, responsive layouts, and easy browsing.",
    url: "https://appscrip-task.netlify.app/",
    siteName: "Mettä Muse",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mettä Muse | Discover Our Products",
    description:
      "Shop curated products at Mettä Muse. Explore our latest collection with detailed filters, responsive layouts, and easy browsing.",
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Mettä Muse",
  url: "https://appscrip-task.netlify.app/",
  logo: "https://appscrip-task.netlify.app/assets/logo.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
