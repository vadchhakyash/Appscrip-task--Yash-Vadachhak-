import Product from "@/components/Product";

export default function ProductList({ products, isFullWidth = false }) {
  if (products.length === 0) {
    return (
      <div className="emptyStateMessage">
        <p>No products found. Please try again later.</p>
      </div>
    );
  }

  return (
    <div
      className={`productGrid ${isFullWidth ? "productGridExpanded" : ""}`}
    >
      {products.map((product, index) => (
        <Product
          key={product.id}
          product={product}
          // 4 is the priority images count
          priority={index < 4}
        />
      ))}
    </div>
  );
}
