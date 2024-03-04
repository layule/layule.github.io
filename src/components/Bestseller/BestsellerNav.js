import React, { useState, useEffect } from "react";
import "/src/styles/react/font.scss";
import "/src/styles/react/nav.scss";
import { isBrowser } from "../../module";

const BestSellerNav = () => {
  const [isMobileView, setIsMobileView] = useState(isBrowser() ? window.innerWidth <= 768 : false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(isBrowser() ? window.innerWidth <= 768 : false);
    };

    isBrowser() && window.addEventListener("resize", handleResize);
    return () => isBrowser() && window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen(prevMenuOpen => !prevMenuOpen);
  };

  return (
    <div className="page-container bestseller">
      <header className="bestsellerNav">
        <nav className={isMobileView ? "mobile-nav" : "desktop-nav"}>
          {isMobileView ? (
            <div className="bestseller-menu" onClick={handleMenuToggle}></div>
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
        {/* {isMobileView && menuOpen && (
          <div className="mobile-menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        )} */}
      </header>
    </div>
  );
};

export default BestSellerNav;
