import * as React from "react";
import * as jQuery from "jquery";
import Swiper from "swiper";
import { bsFavicon, sellerProfile1, sellerProfile2, sellerProfile3, sellerProfile4, sellerUi1, sellerUi2, sellerUi3, sellerUi4 } from "../../images/bestseller";
import "/src/styles/bestseller/font.scss";
import "/src/styles/bestseller/reset.scss";
import "/src/styles/bestseller/style.scss";
import "/src/styles/bestseller/stylem.scss";

export default function BestsellerNav() {
  return (
    <body className="bestsellerbody">
      <nav>
        <ul id="nav">
          <li className="logo">
            <a href="#">Best seller</a>
          </li>
          <li>
            <a href="/BestselleBest">베스트셀러</a>
          </li>
          <li>
            <a href="#">베스트링크</a>
          </li>
          <li>
            <a href="#">회사 소개</a>
          </li>
          <li>
            <a href="#">입점 문의</a>
          </li>
          <li>
            <a href="#">라이브 커머스 신청</a>
          </li>
        </ul>

        {/* <!----mobile------> */}
        <div className="m_menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
        {/* <!--m_menu--> */}

        <div className="m_nav">
          <ul>
            <li>
              <a href="#">베스트셀러</a>
            </li>
            <li>
              <a href="#">베스트링크</a>
            </li>
            <li>
              <a href="#">회사 소개</a>
            </li>
            <li>
              <a href="#">입점 문의</a>
            </li>
            <li>
              <a href="#">라이브 커머스 신청</a>
            </li>
          </ul>
        </div>
        {/* <!--m_nav--> */}
      </nav>
    </body>
  );
}
