import Shop from "./Shop";

export default function ShopPage() {
  return (
    <main className="mainContent">
      <div className="heroSection">
        <h1 className="heroTitle">DISCOVER OUR PRODUCTS</h1>
        <p className="heroDescription">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>

      <div className="contentWrapper">
        <Shop />
      </div>
    </main>
  );
}
