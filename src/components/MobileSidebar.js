import Link from "next/link";
import { X } from "lucide-react";

export default function MobileSidebar({ isOpen, onClose }) {
  return (
    <>
      <div
        className={`mobileMenuOverlay ${isOpen ? "open" : ""}`}
        onClick={onClose}
      ></div>
      <div className={`mobileMenuSidebar ${isOpen ? "open" : ""}`}>
        <button
          className="menuCloseButton"
          onClick={onClose}
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
        <nav className="mobileNavLinks">
          <Link href="/shop" className="mobileNavLink" onClick={onClose}>
            SHOP
          </Link>
          <Link href="/skills" className="mobileNavLink" onClick={onClose}>
            SKILLS
          </Link>
          <Link href="/stories" className="mobileNavLink" onClick={onClose}>
            STORIES
          </Link>
          <Link href="/about" className="mobileNavLink" onClick={onClose}>
            ABOUT
          </Link>
          <Link href="/contact" className="mobileNavLink" onClick={onClose}>
            CONTACT US
          </Link>
        </nav>
      </div>
    </>
  );
}
