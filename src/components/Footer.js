"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  const [openColumns, setOpenColumns] = useState({});

  const toggleColumn = (columnName) => {
    setOpenColumns((prev) => ({
      ...prev,
      [columnName]: !prev[columnName],
    }));
  };

  return (
    <footer className="siteFooter">
      <div className="footerContainer">
        <div className="footerTopSection">
          <div className="newsletterSection">
            <h3 className="sectionTitle">BE THE FIRST TO KNOW</h3>
            <p className="newsletterDescription">
              Sign up for updates from mettä muse.
            </p>
            <NewsletterForm />
          </div>

          <div className="contactSection">
            <h3 className="sectionTitle">CONTACT US</h3>
            <p className="contactPhone">+44 221 133 5360</p>
            <p className="contactEmail">customercare@mettamuse.com</p>

            <div className="currencySection">
              <h3 className="sectionTitle">CURRENCY</h3>
              <div className="currencySelector">
                <Image
                  src="/assets/usa.png"
                  alt="USA Flag"
                  width={20}
                  height={15}
                  className="flagIcon"
                />
                <div className="currencySpacer" />
                <span className="currencyCode"> USD</span>
              </div>
              <p className="currencyNote">
                Transactions will be completed in Euros and a currency reference
                is available on hover.
              </p>
            </div>
          </div>
        </div>

        <div className="footerDivider"></div>

        <div className="footerBottomSection">
          <div className="footerColumn">
            <button
              className="columnTitleButton"
              onClick={() => toggleColumn("mettamuse")}
            >
              <h4 className="columnTitle">mettä muse</h4>
              <ChevronDown
                size={16}
                className={`columnChevron ${
                  openColumns.mettamuse ? "chevronRotated" : ""
                }`}
              />
            </button>
            <ul
              className={`footerLinksList ${
                openColumns.mettamuse ? "footerLinksOpen" : ""
              }`}
            >
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/stories">Stories</a>
              </li>
              <li>
                <a href="/artisans">Artisans</a>
              </li>
              <li>
                <a href="/boutiques">Boutiques</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
              <li>
                <a href="/compliance">EU Compliances Docs</a>
              </li>
            </ul>
          </div>

          <div className="footerColumn">
            <button
              className="columnTitleButton"
              onClick={() => toggleColumn("quicklinks")}
            >
              <h4 className="columnTitle">QUICK LINKS</h4>
              <ChevronDown
                size={16}
                className={`columnChevron ${
                  openColumns.quicklinks ? "chevronRotated" : ""
                }`}
              />
            </button>
            <ul
              className={`footerLinksList ${
                openColumns.quicklinks ? "footerLinksOpen" : ""
              }`}
            >
              <li>
                <a href="/orders">Orders & Shipping</a>
              </li>
              <li>
                <a href="/join">Join/Login as a Seller</a>
              </li>
              <li>
                <a href="/payment">Payment & Pricing</a>
              </li>
              <li>
                <a href="/returns">Return & Refunds</a>
              </li>
              <li>
                <a href="/faqs">FAQs</a>
              </li>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms-conditions">Terms & Conditions</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="footerColumn">
              <button
                className="columnTitleButton"
                onClick={() => toggleColumn("followus")}
              >
                <h4 className="columnTitle">FOLLOW US</h4>
                <ChevronDown
                  size={16}
                  className={`columnChevron ${
                    openColumns.followus ? "chevronRotated" : ""
                  }`}
                />
              </button>
              <div
                className={`socialLinksContainer ${
                  openColumns.followus ? "socialLinksOpen" : ""
                }`}
              >
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Image
                    src="/assets/Instagram.png"
                    alt="Instagram"
                    width={32}
                    height={32}
                  />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Image
                    src="/assets/linkedin.png"
                    alt="LinkedIn"
                    width={32}
                    height={32}
                  />
                </a>
              </div>
            </div>

            <div className="footerColumn">
              <h4 className="columnTitle">mettä muse ACCEPTS</h4>
              <div className="paymentMethodsContainer">
                <Image
                  src="/assets/payment1.png"
                  alt="Google Pay"
                  width={56}
                  height={35}
                />
                <Image
                  src="/assets/payment2.png"
                  alt="Mastercard"
                  width={56}
                  height={35}
                />
                <Image
                  src="/assets/payment3.png"
                  alt="PayPal"
                  width={56}
                  height={35}
                />
                <Image
                  src="/assets/payment4.png"
                  alt="American Express"
                  width={56}
                  height={35}
                />
                <Image
                  src="/assets/payment5.png"
                  alt="Apple Pay"
                  width={56}
                  height={35}
                />
                <Image
                  src="/assets/payment6.png"
                  alt="Shop Pay"
                  width={56}
                  height={35}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="copyrightSection">
          <p>Copyright © 2023 mettamuse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
