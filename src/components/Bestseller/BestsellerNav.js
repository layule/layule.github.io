import React from "react";
import "/src/styles/react/font.scss";
import "/src/styles/react/reset.scss";
import "/src/styles/react/nav.scss";

export const BestSellerNav = () => {
  return (
    <header className="bestsellerNav">
      <nav>
        <div className="bestseller-menu"></div>
        <ul className="menu">
          <li className="menu-logo"></li>
          <li>베스트 셀러</li>
          <li>베스트링크</li>
          <li>회사 소개</li>
          <li>입점 문의</li>
          <li>라이브 커머스 신청</li>
        </ul>
      </nav>
      {/*
          <div className="mobile-menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
       */}
    </header>
  );
};
