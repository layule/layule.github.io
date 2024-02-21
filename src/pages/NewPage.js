//import { isMobile } from "react-device-detect";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BrowserView, MobileView } from "react-device-detect";
import { A11y, Autoplay, Navigation, Pagination } from "swiper";
import "/src/styles/bestseller/font.scss";
import "/src/styles/bestseller/New.scss";
import "/src/styles/bestseller/reset.scss";
import BestsellerNav from "../components/Bestseller/BestsellerNav";
import BestsellerFooter from "../components/Bestseller/BestsellerFooter";
import { sellerProfile1, sellerProfile2, sellerProfile3, sellerProfile4, sellerUi1, sellerUi2, sellerUi3, sellerUi4, bg_main, bg_main1 } from "../images/bestseller";

export default function BestsellerMainPage() {
  return (
    <div div className="page-container bestseller">
      <BestsellerNav></BestsellerNav>
      <BrowserView>
        <Swiper className="bestsellerSwiper" loop={true} modules={[Navigation, Pagination, A11y, Autoplay]} slidesPerView={1} navigation pagination={{ clickable: true }}>
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
        <section className="marketList">
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
            <Swiper
              className="sellerSwiper"
              loop={true}
              modules={[Navigation, Pagination, A11y, Autoplay]}
              slidesPerView={3}
              spaceBetween={1}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
            >
              <SwiperSlide>
                <div className="swiperSlide slide1">
                  <div className="sellerItemInner">
                    <p className="itemTitle">블로거 ○○○ 셀러</p>
                    <p className="subTitle">판매금액</p>
                    <p className="price">45,320원</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiperSlide slide2">
                  <div className="sellerItemInner">
                    <p className="itemTitle">블로거 ○○○ 셀러</p>
                    <p className="subTitle">판매금액</p>
                    <p className="price">45,320원</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiperSlide slide3">
                  <div className="sellerItemInner">
                    <p className="itemTitle">블로거 ○○○ 셀러</p>
                    <p className="subTitle">판매금액</p>
                    <p className="price">45,320원</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiperSlide slide4">
                  <div className="sellerItemInner">
                    <p className="itemTitle">블로거 ○○○ 셀러</p>
                    <p className="subTitle">판매금액</p>
                    <p className="price">45,320원</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiperSlide slide5">
                  <div className="sellerItemInner">
                    <p className="itemTitle">블로거 ○○○ 셀러</p>
                    <p className="subTitle">판매금액</p>
                    <p className="price">45,320원</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        <BestsellerFooter></BestsellerFooter>
      </BrowserView>
    </div>
  );
}
