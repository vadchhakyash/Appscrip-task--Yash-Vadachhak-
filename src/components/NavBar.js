import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronDown } from "lucide-react";

export default function NavBar({ onMenuClick }) {
  return (
    <>
      <nav className="headerNav">
        <div className="headerNavTop">
          <div className="headerBranding">
            <button
              className="headerMenuToggle"
              aria-label="Menu"
              onClick={onMenuClick}
            >
              <Menu size={24} />
            </button>
            <Link href="/" className="headerLogoLink" aria-label="Go to home">
              <Image
                src="/assets/logo.png"
                alt="mettä muse logo"
                width={36}
                height={36}
                className="headerLogo"
                priority
              />
            </Link>
          </div>
          <div className="headerLogoTextWrap">
            <Link href="/" className="headerLogoText headerLogoLink">
              LOGO
            </Link>
          </div>
          <div className="headerActions">
            <div className="headerActionItem">
              <Image
                src="/assets/search-normal.png"
                alt="Search"
                width={24}
                height={24}
                className="headerActionIcon"
              />
            </div>
            <div className="headerActionItem">
              <Image
                src="/assets/heart.png"
                alt="Wishlist"
                width={24}
                height={24}
                className="headerActionIcon"
              />
            </div>
            <div className="headerActionItem">
              <Image
                src="/assets/shopping-bag.png"
                alt="Cart"
                width={24}
                height={24}
                className="headerActionIcon"
              />
            </div>
            <div className="headerActionItem hdTab">
              <Image
                src="/assets/profile.png"
                alt="Account"
                width={24}
                height={24}
                className="headerActionIcon"
              />
            </div>
            <div className="headerLang hdTab">
              <select className="headerLangSelect" aria-label="Language">
                <option value="eng">ENG</option>
                <option value="es">ES</option>
                <option value="fr">FR</option>
              </select>
              <ChevronDown size={16} className="headerLangChevron" />
            </div>
          </div>
        </div>
        <div className="headerNavBottom">
          <div className="headerCategoryLinks">
            <Link href="/shop" className="headerCategoryLink">
              SHOP
            </Link>
            <Link href="/skills" className="headerCategoryLink">
              SKILLS
            </Link>
            <Link href="/stories" className="headerCategoryLink">
              STORIES
            </Link>
            <Link href="/about" className="headerCategoryLink">
              ABOUT
            </Link>
            <Link href="/contact" className="headerCategoryLink">
              CONTACT US
            </Link>
          </div>
        </div>
      </nav>
      <div className="headerBreadcrumbs">
        <Link href="/" className="headerBreadcrumbLink">
          HOME
        </Link>
        <span className="headerBreadcrumbSeparator">|</span>
        <Link href="/" className="headerBreadcrumbActive">
          SHOP
        </Link>
      </div>
    </>
  );
}
