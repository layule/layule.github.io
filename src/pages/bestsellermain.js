import React from "react";
import "/src/styles/react/font.scss";
import "/src/styles/react/reset.scss";
import "/src/styles/react/style.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper";
import { BestSellerNav } from "../components/Bestseller/BestSellerNav";
import { BestSellerFooter } from "../components/Bestseller/BestSellerFooter";
import { BestSellerCard } from "../components/Bestseller/BestSellerCard";
import { BestSellerFaq } from "../components/Bestseller/BestSellerfaq";

export default function BestSellerMain() {
  return (
    <div div className="page-container bestseller">
      <BestSellerNav></BestSellerNav>
      <Swiper className="bestsellerSwiper section" loop={true} modules={[A11y, Autoplay]} slidesPerView={1} autoplay={{ delay: 2000, disableOnInteraction: false }}>
        <SwiperSlide>
          <div id="slideImgGrop" className="slideImg1">
            <div className="pageSlidInner">
              <div className="pageSlidInnerPoint">
                <p>소비를</p>
                <p>
                  가치로 <span>잇</span>다
                </p>
              </div>
              <div className="buttonArea">
                <a href="#" className="slideInButton">
                  셀러 시작하기
                </a>
                <div className="partnerWrap">
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
            <div className="pageSlidInner">
              <div className="pageSlidInnerPoint">
                <p>소비를</p>
                <p>
                  가치로 <span>잇</span>다
                </p>
              </div>
              <div className="buttonArea">
                <a href="#" className="slideInButton">
                  셀러 시작하기
                </a>
                <div className="partnerWrap">
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
      <section className="marketList section">
        <div className="marketListInner">
          <div className="marketListInnerGroup">
            <div className="marketListInnerGroupTitle">
              <p>베스트셀러는</p>
              <p className="marketListInnerGroupTitlePoint">
                다양한 셀러와
                <br />
                <span>잇</span> 마켓을 운영해요
              </p>
            </div>
            <a href="#" className="marketListInnerGroupTitleButton">
              <span>1분컷 사용법</span>
            </a>
            <p className="sellerText">*it-마켓 : 베스트셀러만의 특가 판매 혜택</p>
            <p className="sellerTextPoint">실제 셀러의 판매 금액입니다.</p>
          </div>
          <div className="sellerSwiper">
            <Swiper loop={true} modules={[A11y, Autoplay]} slidesPerView={3} spaceBetween={1} autoplay={{ delay: 1000, disableOnInteraction: false }}>
              <SwiperSlide>
                <div className="swiperSlide sellerSlideImg1">
                  <div className="productDetails">
                    <p className="productName">인스타 ○○○ 셀러</p>
                    <p className="productSubTitle">판매금액</p>
                    <p className="productPrice">45,320원</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiperSlide sellerSlideImg2">
                  <div className="productDetails">
                    <p className="productName">인스타 ○○○ 셀러</p>
                    <p className="productSubTitle">판매금액</p>
                    <p className="productPrice">45,320원</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiperSlide sellerSlideImg3">
                  <div className="productDetails">
                    <p className="productName">인스타 ○○○ 셀러</p>
                    <p className="productSubTitle">판매금액</p>
                    <p className="productPrice">45,320원</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiperSlide sellerSlideImg4">
                  <div className="productDetails">
                    <p className="productName">인스타 ○○○ 셀러</p>
                    <p className="productSubTitle">판매금액</p>
                    <p className="productPrice">45,320원</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiperSlide sellerSlideImg5">
                  <div className="productDetails">
                    <p className="productName">인스타 ○○○ 셀러</p>
                    <p className="productSubTitle">판매금액</p>
                    <p className="productPrice">45,320원</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <section className="review">
        <p className="title">
          스타일 셀러와
          <br /> 꿈꾸는 셀러
        </p>
        <BestSellerCard></BestSellerCard>
      </section>
      <section className="faq">
        <p className="title">FAQ</p>
        <BestSellerFaq></BestSellerFaq>
      </section>
      <BestSellerFooter></BestSellerFooter>
    </div>
  );
}
