import * as React from "react";
import "/src/styles/react/font.scss";
import "/src/styles/react/reset.scss";
import "../../styles/react/footer.scss";
import { appstore, googleplay } from "../../images/bestseller";

export const BestSellerFooter = () => {
  return (
    <footer>
      <div className="fooerWrap">
        <nav>
          <div className="serviceCenter">
            <p className="centerTitle">고객행복센터</p>
            <p className="centernumber">
              1600-0000<span className="centernumberFontStyle">평일 오전 10시 - 오후 7시</span>
            </p>
            <button>카카오톡 문의</button>
            <button>고객 문의</button>
            <button>셀러 문의</button>
          </div>
          <div className="footerMenuGrop">
            <p> 베스트셀러</p>
            <ul>
              <li>베스트셀러 메인</li>
              <li>Prime</li>
              <li>엔터프라이즈</li>
              <li>프리랜서클럽</li>
            </ul>
          </div>
          <div className="footerMenuGrop">
            <p> 베스트셀러 정보</p>
            <ul>
              <li>서비스 소개</li>
              <li>인재영입</li>
            </ul>
          </div>
          <div className="footerMenuGrop">
            <p>관련 사이트</p>
            <ul>
              <li>블로그</li>
              <li>인스타그램</li>
              <li>유튜브</li>
            </ul>
          </div>
          <div className="footerMenuGrop">
            <p>지원</p>
            <ul>
              <li>공지사항</li>
              <li>자주 묻는 질문</li>
              <li>약관 및 정책</li>
              <li>개인정보처리방침</li>
            </ul>
          </div>
          <div className="App">
            <button>
              <span>
                <img src={googleplay} />
                Google play
              </span>
            </button>
            <button>
              <img src={appstore} />
              App Store
            </button>
          </div>
        </nav>
      </div>
      <div className="footerInformation">
        <p className="infoText">
          (주)베스트셀러|대표이사 베스트셀러|서울 서초구 강남대로 00길 00 0층
          <br />
          bestseller@co.kr|사업자등록번호 000-00-00000 사업자정보확인|통신판매업신고번호 제0000-서울서초-0000호
        </p>
        <p className="prohibition">
          (주)베스트셀러 사이트의 상품/판매회원/중개 서비스/거래 정보,콘텐츠,UI 등에 대한 무단복제, 전송, 배포, 스크래핑 등의 행위는 저작권법, 콘텐츠산업 진흥법 등 관련법령에
          의하여 엄격히 금지됩니다.[안내 보기]
        </p>
        <p className="copyright">0000 &copy; bestseller corp. All right reserved.</p>
      </div>
    </footer>
  );
};
