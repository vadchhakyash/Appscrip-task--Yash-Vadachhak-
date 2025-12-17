"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import Filter from "@/components/Filter";
import SortDropdown from "@/components/SortDropdown";
import ProductList from "@/components/ProductList";
import { sortProducts } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Shop() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [currentSort, setCurrentSort] = useState("recommended");
  const [productList, setProductList] = useState([]);
  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);
  const sortMenuRef = useRef(null);

  useEffect(() => {
    // Fetch products on client side
    fetch("https://fakestoreapi.com/products?limit=20")
      .then((res) => res.json())
      .then((data) => {
        setProductList(data);
      })
      .catch((err) => {
        console.error("Client-side fetch failed:", err);
      });
  }, []);

  const sortedProducts = useMemo(
    () => sortProducts(productList, currentSort),
    [productList, currentSort]
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sortMenuRef.current && !sortMenuRef.current.contains(event.target)) {
        setIsSortMenuOpen(false);
      }
    };

    if (isSortMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isSortMenuOpen]);

  const toggleSortMenu = () => {
    setIsSortMenuOpen(!isSortMenuOpen);
  };

  const handleSortChange = (value) => {
    setCurrentSort(value);
    setIsSortMenuOpen(false);
  };

  return (
    <div className="shopContainer">
      <div className="shopHeader">
        <div className="headerLeftSection">
          <span className="itemCount hideOnTablet">
            {productList.length} ITEMS
          </span>
          {isSidebarVisible ? (
            <>
              <button
                className="filterToggleButton hideOnTablet"
                onClick={() => setIsSidebarVisible(false)}
              >
                <ChevronLeft size={16} />{" "}
                <span className="filterToggleText">HIDE FILTER</span>
              </button>
            </>
          ) : (
            <button
              className="filterToggleButton hideOnTablet"
              onClick={() => setIsSidebarVisible(true)}
            >
              <ChevronRight size={16} />{" "}
              <span className="filterToggleText">SHOW FILTER</span>
            </button>
          )}
          <button
            className="filterTextButton showOnTablet"
            onClick={() => setIsSidebarVisible(!isSidebarVisible)}
          >
            FILTER
          </button>
        </div>
        <SortDropdown
          sortBy={currentSort}
          onSortChange={handleSortChange}
          isOpen={isSortMenuOpen}
          onToggle={toggleSortMenu}
          dropdownRef={sortMenuRef}
        />
      </div>

      <div className="shopContent">
        <div
          className={`sidebarOverlay ${isSidebarVisible ? "open" : ""}`}
          onClick={() => setIsSidebarVisible(false)}
        ></div>
        <aside className={`sidebarWrapper ${isSidebarVisible ? "open" : ""}`}>
          <Filter
            isOpen={isSidebarVisible}
            onToggle={() => setIsSidebarVisible(!isSidebarVisible)}
            itemCount={productList.length}
          />
        </aside>

        <section className="productsSection">
          <h2 className="productsHeading">Our Products</h2>
          <ProductList
            products={sortedProducts}
            isFullWidth={!isSidebarVisible}
          />
        </section>
      </div>
    </div>
  );
}
