import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "/src/styles/covernat/reset.scss";
import "/src/styles/covernat/style.scss";
import "/src/styles/covernat/font.scss";
import { colletion, colletionMen, colletionWomen, like, logo, main1, main2, main3, menLook, search, shopping, sub1, sub2, sub3, sub4, womenLook } from "../images/covernat";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function App() {
  return (
    <div className="page-container covernat">
      <header className="covernatHeader">
        <div className="covernatPointInner">
          <a href="#">
            <img className="logo_cover" src={logo} />
          </a>
          <div className="covernatTopMenu">
            <ul className="TopMenu">
              <li>
                <a href="#">MEN</a>
                <div className="submenu">
                  <div className="submenuinner">
                    <ul className="dep1">
                      <li>
                        <a href="#">인기상품</a>
                      </li>
                      <li>
                        <a href="#">신상품</a>
                      </li>
                      <li>
                        <a href="#">아우터</a>
                        <ul className="product_cover">
                          <li>
                            <a href="#">재킷</a>
                          </li>
                          <li>
                            <a href="#">코트</a>
                          </li>
                          <li>
                            <a href="#">패딩</a>
                          </li>
                          <li>
                            <a href="#">무스탕</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">상의</a>
                        <ul className="product_cover">
                          <li>
                            <a href="#">반소매 티셔츠</a>
                          </li>
                          <li>
                            <a href="#">긴소매 티셔츠</a>
                          </li>
                          <li>
                            <a href="#">셔츠</a>
                          </li>
                          <li>
                            <a href="#">맨투맨</a>
                          </li>
                          <li>
                            <a href="#">슬리브리스</a>
                          </li>
                          <li>
                            <a href="#">후디</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">하의</a>
                        <ul className="product_cover">
                          <li>
                            <a href="#">데님</a>
                          </li>
                          <li>
                            <a href="#">트레이닝</a>
                          </li>
                          <li>
                            <a href="#">코튼</a>
                          </li>
                          <li>
                            <a href="#">레깅스</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <a href="#">WOMEN</a>
                <div className="submenu">
                  <div className="submenuinner">
                    <ul className="dep1">
                      <li>
                        <a href="#">인기상품</a>
                      </li>
                      <li>
                        <a href="#">신상품</a>
                      </li>
                      <li>
                        <a href="#">아우터</a>
                        <ul className="product_cover">
                          <li>
                            <a href="#">재킷</a>
                          </li>
                          <li>
                            <a href="#">코트</a>
                          </li>
                          <li>
                            <a href="#">패딩</a>
                          </li>
                          <li>
                            <a href="#">무스탕</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">상의</a>
                        <ul className="product_cover">
                          <li>
                            <a href="#">반소매 티셔츠</a>
                          </li>
                          <li>
                            <a href="#">긴소매 티셔츠</a>
                          </li>
                          <li>
                            <a href="#">블라우스</a>
                          </li>
                          <li>
                            <a href="#">셔츠</a>
                          </li>
                          <li>
                            <a href="#">맨투맨</a>
                          </li>
                          <li>
                            <a href="#">슬리브리스</a>
                          </li>
                          <li>
                            <a href="#">후디</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">하의</a>
                        <ul className="product_cover">
                          <li>
                            <a href="#">데님</a>
                          </li>
                          <li>
                            <a href="#">트레이닝</a>
                          </li>
                          <li>
                            <a href="#">코튼</a>
                          </li>
                          <li>
                            <a href="#">레깅스</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">원피스</a>
                        <ul className="product_cover">
                          <li>
                            <a href="#">롱</a>
                          </li>
                          <li>
                            <a href="#">미디</a>
                          </li>
                          <li>
                            <a href="#">숏</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <a href="#">ACC</a>
                <div className="submenu">
                  <div className="submenuinner">
                    <ul className="dep1">
                      <li>
                        <a href="#">인기상품</a>
                      </li>
                      <li>
                        <a href="#">신상품</a>
                      </li>
                      <li>
                        <a href="#">모자</a>
                        <ul className="product_cover">
                          <li>
                            <a href="#">볼캡</a>
                          </li>
                          <li>
                            <a href="#">버킷햇</a>
                          </li>
                          <li>
                            <a href="#">비니</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">가방</a>
                        <ul className="product_cover">
                          <li>
                            <a href="#">백팩</a>
                          </li>
                          <li>
                            <a href="#">크로스백</a>
                          </li>
                          <li>
                            <a href="#">토트백</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">신발</a>{" "}
                        <ul className="product_cover">
                          <li>
                            <a href="#">스니커즈</a>
                          </li>
                          <li>
                            <a href="#">슬라이드</a>
                          </li>
                          <li>
                            <a href="#">기타</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">용품</a>
                        <ul className="product_cover">
                          <li>
                            <a href="#">악세사리</a>
                          </li>
                          <li>
                            <a href="#">라이프</a>
                          </li>
                          <li>
                            <a href="#">양말</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <a href="#">PROMOTION</a>
                <div className="submenu">
                  <div className="submenuinner">
                    <ul className="dep1">
                      <li>
                        <a href="#">S/S BIG SALE</a>
                      </li>
                      <li>
                        <a href="#">F/W BIG SALE</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <a href="#">COLLABORATION</a>
                <div className="submenu">
                  <div className="submenuinner">
                    <ul className="dep1">
                      <li>
                        <a href="#">2023 S/S COLLABORATION</a>
                      </li>
                      <li>
                        <a href="#">2022 F/W COLLABORATION</a>
                      </li>
                      <li>
                        <a href="#">2022 S/S COLLABORATION</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
            <ul className="covernatIcon">
              <li>
                <a href="#">
                  <img src={like}></img>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={shopping}></img>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={search}></img>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <Swiper
        className="mySwiper"
        loop={true}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={swiper => console.log("끼에에엑?")}
        onSlideChange={() => console.log("뿌에에에엑?????")}
      >
        <SwiperSlide>
          <a href="#">
            <img src={main1}></img>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <img src={main2}></img>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <img src={main3}></img>
          </a>
        </SwiperSlide>
      </Swiper>
      <section className="covernat_main">
        <div className="main_img_inner">
          <ul>
            <li>
              <a href="#">
                <img src={colletion} />
                <div className="img_txt">
                  <p>팬츠 신상품</p>
                  <span>보러 가기</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={colletionMen} />
                <div className="img_txt">
                  <p>남성 신상품</p>
                  <span>보러 가기</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={colletionWomen} />
                <div className="img_txt">
                  <p>여성 신상품</p> <span>바로가기</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="covernat_sub">
        <div className="main_sub_inner">
          <ul>
            <li>
              <a href="#">
                <img src={sub1} />
                <div className="img_txt">
                  <p>C 로고 시어서커 스트라이프 하프 셔츠</p> <span>바로가기</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={sub2} />
                <div className="img_txt">
                  <p>그로서리 그래픽 티셔츠</p>
                  <span>보러 가기</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={sub3} />
                <div className="img_txt">
                  <p>테이퍼드 데님 팬츠</p>
                  <span>보러 가기</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={sub4} />
                <div className="img_txt">
                  <p>C 로고 B 캡</p>
                  <span>보러 가기</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="covernat_look">
        <div className="main_look_inner">
          <ul>
            <li>
              <a href="#">
                <img src={menLook} />
                <div className="look_txt">
                  <p>남성 컬렉션</p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={womenLook} />
                <div className="look_txt">
                  <p>여성 컬렉션</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <footer className="covernat_footer">
        <div className="covernat_cs">
          <p>
            <a href="#">고객 지원</a>
          </p>
          <p>
            <a href="#">문의하기</a>
          </p>
          <p>
            <a href="#">배송 안내</a>
          </p>
          <p>
            <a href="#">반품 안내</a>
          </p>
          <p>
            <a href="#">나의 계정</a>
          </p>
          <p>
            <a href="#">자주하는 질문</a>
          </p>
          <p>
            <a href="#">기업정보</a>
          </p>
          <p>
            <a href="#">커버낫에 대하여</a>
          </p>
          <p>
            <a href="#">커버낫 라디오</a>
          </p>
          <p>
            <a href="#">기업의 사회적 책임</a>
          </p>
          <p>
            <a href="#">채용 안내</a>
          </p>
          <p>
            <a href="#">일반적합인증</a>
          </p>
        </div>
        <div className="covernat_co">
          <p>
            <a href="#">커버낫 코리아 2023</a>
          </p>
          <p>
            <a href="#">이용약관</a>
          </p>
          <p>
            <a href="#">개인정보취급 방침</a>
          </p>
          <p>
            <a href="#">구매안전 (에스크로) 서비스 가입사실 확인</a>
          </p>
        </div>
        <div className="covernat_ad">
          <p>
            <h1>주식회사 비케이프</h1>
            사업자등록번호: 000-00-00000<span></span>
            대표: 아무개<br></br>
            전자우편주소: covernat@covernat.co.kr<span></span>
            대표전화: 00-000-0000<br></br>
            주소: 서울시 마포구 월드컵북로00길 00<br></br>
            통신판매업신고: 0000-서울마포-0000
          </p>
        </div>
      </footer>
    </div>
  );
}
