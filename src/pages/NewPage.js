import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState } from "react";
import { BrowserView, MobileView, isMobile } from "react-device-detect";
import { A11y, Autoplay, Zoom } from "swiper";
import { BestsellerNav } from "../components/Bestseller/BestsellerNav";
import { BestsellerFooter } from "../components/Bestseller/BestsellerFooter";
import "/src/styles/bestseller/font.scss";
import "/src/styles/bestseller/New.scss";
import "/src/styles/bestseller/reset.scss";
import { sellerProfile1, sellerProfile2, sellerProfile3, sellerProfile4, sellerUi1, sellerUi2, sellerUi3, sellerUi4, bg_main, bg_main1 } from "../images/bestseller";
import { Dropdown } from "../components/Bestseller/Dropdown";

export const BestsellerMainPage = () => {
  const [dropdownVisibility, setDropdownVisibility] = React.useState(false);
  return (
    <div div className="page-container bestseller">
      <BestsellerNav></BestsellerNav>
      <BrowserView>
        <Swiper className="bestsellerSwiper" loop={true} modules={[A11y, Autoplay]} slidesPerView={1} autoplay={{ delay: 2000, disableOnInteraction: false }}>
          <SwiperSlide>
            <div id="slideImgGrop" className="slideImg1">
              <div className="mainpageSlidInner">
                <div className="mainpageSlidInnerPoint">
                  <p>소비를</p>
                  <p>
                    가치로 <span>잇</span>다
                  </p>
                </div>

                <div className="slideButtonArea">
                  <a href="#" className="slideInButton">
                    셀러 시작하기
                  </a>
                  <div className="slidePartnerWrap">
                    <a href="#" className="slideInButton">
                      입점문의
                    </a>
                    <a href="#" className="slideInButton">
                      라이브 커머스 신청
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div id="slideImgGrop" className="slideImg2">
              <div className="mainpageSlidInner">
                <div className="mainpageSlidInnerPoint">
                  <p>소비를</p>
                  <p>
                    가치로 <span>잇</span>다
                  </p>
                </div>
                <div className="slideButtonArea">
                  <a href="#" className="slideInButton">
                    셀러 시작하기
                  </a>
                  <div className="slidePartnerWrap">
                    <a href="#" className="slideInButton">
                      입점문의
                    </a>
                    <a href="#" className="slideInButton">
                      라이브 커머스 신청
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <section className="marketList" id="marketListSection">
          <div className="marketListInner">
            <div className="marketListInnergroup">
              <div className="marketListInnergroupTitle">
                <p>베스트셀러는</p>
                <p className="marketListInnergroupTitlePoint">
                  다양한 셀러와
                  <br />
                  <span>잇</span> 마켓을 운영해요
                </p>
              </div>
              <a href="#" className="marketListInnergroupTitleButton">
                <span>1분컷 사용법</span>
              </a>
              <p className="sellerText">*it-마켓 : 베스트셀러만의 특가 판매 혜택</p>
              <p className="sellerTextPoint">실제 셀러의 판매 금액입니다.</p>
            </div>
            <div className="sellerSwiper">
              <Swiper className="twoSwiper" loop={true} modules={[A11y, Autoplay]} slidesPerView={3} spaceBetween={1} autoplay={{ delay: 2000, disableOnInteraction: false }}>
                <SwiperSlide>
                  <div className="swiperSlide slide1">
                    <div className="sellerItemInner">
                      <p className="itemTitle">인스타 ○○○ 셀러</p>
                      <p className="subTitle">판매금액</p>
                      <p className="price">45,320원</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiperSlide slide2">
                    <div className="sellerItemInner">
                      <p className="itemTitle">인스타 ○○○ 셀러</p>
                      <p className="subTitle">판매금액</p>
                      <p className="price">45,320원</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiperSlide slide3">
                    <div className="sellerItemInner">
                      <p className="itemTitle">인스타 ○○○ 셀러</p>
                      <p className="subTitle">판매금액</p>
                      <p className="price">45,320원</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiperSlide slide4">
                    <div className="sellerItemInner">
                      <p className="itemTitle">인스타 ○○○ 셀러</p>
                      <p className="subTitle">판매금액</p>
                      <p className="price">45,320원</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiperSlide slide5">
                    <div className="sellerItemInner">
                      <p className="itemTitle">인스타 ○○○ 셀러</p>
                      <p className="subTitle">판매금액</p>
                      <p className="price">45,320원</p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
        <section className="reviewSection">
          <p className="subTitle">
            스타일 셀러와
            <br /> 꿈꾸는 셀러
          </p>
        </section>
        <section className="DropdownSection">
          <div id="app">
            <button onClick={e => setDropdownVisibility(!dropdownVisibility)}>{dropdownVisibility ? "Close" : "Open"}</button>
            <Dropdown visibility={dropdownVisibility}>
              <ul>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
                <li>item 4</li>
              </ul>
            </Dropdown>
          </div>
        </section>
        <BestsellerFooter></BestsellerFooter>
      </BrowserView>
    </div>
  );
};
