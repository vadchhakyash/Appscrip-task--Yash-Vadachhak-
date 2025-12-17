"use client";

import { useState } from "react";
import TopBanner from "./TopBanner";
import NavBar from "./NavBar";
import MobileSidebar from "./MobileSidebar";

export default function Header() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(true);
  };

  const closeMenu = () => {
    setIsMenuVisible(false);
  };

  return (
    <header className="mainHeader">
      <TopBanner />
      <NavBar onMenuClick={toggleMenu} />
      <MobileSidebar isOpen={isMenuVisible} onClose={closeMenu} />
    </header>
  );
}
