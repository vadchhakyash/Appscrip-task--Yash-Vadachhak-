"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import { formatProductName, createImageAlt } from "@/lib/utils";

export default function Product({ product, priority = false }) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const imageUrl = product?.image || "/placeholder-product.jpg";
  const productName = product?.title || "Product";
  const truncatedName = useMemo(
    () => formatProductName(productName, 30),
    [productName]
  );
  const imageAlt = useMemo(() => createImageAlt(productName), [productName]);
  const isNewProduct = product?.id === 1;
  const isOutOfStock = product?.id === 2;

  return (
    <article className={`productCard ${isWishlisted ? "wishlisted" : ""}`}>
      <div
        className={`imageContainer ${isOutOfStock ? "outOfStockImage" : ""}`}
      >
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={300}
          height={400}
          className="productImage"
          priority={priority}
        />
        {isOutOfStock && (
          <div className="outOfStockOverlay">
            <span className="outOfStockText">OUT OF STOCK</span>
          </div>
        )}
        {isNewProduct && <span className="newBadge">NEW PRODUCT</span>}
      </div>
      <div className="productInfo">
        <h3 className="productName">{truncatedName.toUpperCase()}</h3>
        <div className="productHeader">
          <p className="pricingText">
            <span className="pricingTextSpan">Sign in</span> or Create an
            account to see pricing
          </p>
          <button
            className="wishlistButton"
            aria-label="Add to wishlist"
            onClick={() => setIsWishlisted(!isWishlisted)}
          >
            <Heart
              size={24}
              fill={isWishlisted ? "#EB4C6B" : "none"}
              stroke={isWishlisted ? "#EB4C6B" : "currentColor"}
            />
          </button>
        </div>
      </div>
    </article>
  );
}
