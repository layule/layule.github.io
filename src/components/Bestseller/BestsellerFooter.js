import * as React from "react";
import { bsFavicon, sellerProfile1, sellerProfile2, sellerProfile3, sellerProfile4, sellerUi1, sellerUi2, sellerUi3, sellerUi4 } from "../../images/bestseller";
import "/src/styles/bestseller/font.scss";
import "/src/styles/bestseller/reset.scss";
import "/src/styles/bestseller/BestsellerStyle.scss";
import "/src/styles/bestseller/stylem.scss";

export default function BestsellerFooter() {
  return (
    <footer className="best">
      <div className="footer-wrap">
        <div className="footer-head">
          <h1>(주) 베스트셀러</h1>
        </div>

        <div className="footer-menu">
          <ul>
            <li>
              <a href="#">이용약관</a>
            </li>
            <li>
              <a href="#">개인정보처리방침</a>
            </li>
            <li>
              <a href="#">사업자정보확인</a>
            </li>
            <li>
              <a href="#">입점문의</a>
            </li>
          </ul>
        </div>
        {/* <!-- .footer-menu--> */}
        <div className="footer-info">
          <p className="info-txt">
            <span>사업자등록번호:000-00-00000</span>
            <span>통신판매업신고:제0000-서울서초-0000호</span>
            <span>대표:bestseller</span>
            <span>주소:서울특별시 서초구 강남대로 00길 00 0층</span>
            <br />
            <span>E-MAIL:bestseller@co.kr</span>
          </p>
          {/* <!-- info-txt --> */}

          <div className="sns-group">
            <a className="insta" href="#">
              instagram
            </a>
            <a className="blog" href="#">
              Blog
            </a>
          </div>

          <p className="copyright">2023 &copy; bestseller corp. All right reserved.</p>
        </div>
        {/* <!-- .footer-info --> */}
      </div>
      {/* <!-- //.footer-wrap--> */}
    </footer>
  );
}
