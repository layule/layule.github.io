import React, { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
import "/src/styles/bestseller/font.scss";
import "/src/styles/bestseller/New.scss";

export default function BestsellerNav() {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen(prevMenuOpen => !prevMenuOpen);
  };

  return (
    <div className="page-container bestseller">
      <header className="BestsellerNav">
        <nav className={isMobileView ? "mobile-nav" : "desktop-nav"}>
          {isMobileView ? (
            <div className="Bestseller-menu" onClick={handleMenuToggle}></div>
          ) : (
            <ul className="menu">
              <li className="menu-logo"></li>
              <li>베스트 셀러</li>
              <li>베스트링크</li>
              <li>회사 소개</li>
              <li>입점 문의</li>
              <li>라이브 커머스 신청</li>
            </ul>
          )}
        </nav>
        {isMobileView && menuOpen && (
          <div className="mobile-menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
      </header>
    </div>
  );
}
