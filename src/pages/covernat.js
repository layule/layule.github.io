import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "/src/styles/covernat/reset.css";
import "/src/styles/covernat/style.css";
import "/src/styles/covernat/font.css";
import { like, logo, main1, main2, main3, search, shopping } from "../images/covernat";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function App() {
  return (
    <>
      <header className="covernatHeader">
        <div id="covernatHeaderInner">
          <div className="covernatPointInner">
            <a href="#">
              <img src={logo} />
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
    </>
  );
}