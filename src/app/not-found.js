import Link from "next/link";

export const metadata = {
  title: "404 - Page Not Found | mettä muse",
  description:
    "The page you are looking for could not be found. Return to our homepage to discover our premium products.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "404 - Page Not Found",
    description: "The requested page could not be found",
    url: "https://mettamuse.com/404",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <main className="mainContent">
        <div className="notFoundContainer">
          <div className="notFoundContent">
            <h1 className="notFoundTitle">404</h1>
            <h2 className="notFoundSubtitle">Page Not Found</h2>
            <p className="notFoundDescription">
              The page you are looking for might have been removed, had its name
              changed, or is temporarily unavailable.
            </p>
            <div className="notFoundActions">
              <Link href="/" className="homeButton">
                Return to Homepage
              </Link>
              <Link href="/" className="shopButton">
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
