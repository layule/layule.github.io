import * as React from "react";
import "/src/styles/bestseller/font.scss";
import "/src/styles/bestseller/reset.scss";
import "/src/styles/bestseller/BestsellerStyle.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { BrowserView, MobileView } from "react-device-detect";
import { A11y, Autoplay } from "swiper";
import BestsellerNav from "../components/Bestseller/BestsellerNav";
import BestsellerFooter from "../components/Bestseller/BestsellerFooter";
import Card from "../components/Bestseller/Card";
export default function BestsellerMainPage() {
  return (
    <div div className="page-container bestseller">
      <BestsellerNav></BestsellerNav>
      <BrowserView>
        <Swiper className="BestsellerSwiper" loop={true} modules={[A11y, Autoplay]} slidesPerView={1} autoplay={{ delay: 2000, disableOnInteraction: false }}>
          <SwiperSlide>
            <div id="SlideImgGrop" className="slideImg1">
              <div className="PageSlidInner">
                <div className="PageSlidInnerPoint">
                  <p>소비를</p>
                  <p>
                    가치로 <span>잇</span>다
                  </p>
                </div>

                <div className="ButtonArea">
                  <a href="#" className="SlideInButton">
                    셀러 시작하기
                  </a>
                  <div className="PartnerWrap">
                    <a href="#" className="SlideInButton">
                      입점문의
                    </a>
                    <a href="#" className="SlideInButton">
                      라이브 커머스 신청
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div id="SlideImgGrop" className="slideImg2">
              <div className="PageSlidInner">
                <div className="PageSlidInnerPoint">
                  <p>소비를</p>
                  <p>
                    가치로 <span>잇</span>다
                  </p>
                </div>

                <div className="ButtonArea">
                  <a href="#" className="SlideInButton">
                    셀러 시작하기
                  </a>
                  <div className="PartnerWrap">
                    <a href="#" className="SlideInButton">
                      입점문의
                    </a>
                    <a href="#" className="SlideInButton">
                      라이브 커머스 신청
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <section className="MarketList">
          <div className="MarketListInner">
            <div className="MarketListInnerGroup">
              <div className="MarketListInnerGroupTitle">
                <p>베스트셀러는</p>
                <p className="MarketListInnerGroupTitlePoint">
                  다양한 셀러와
                  <br />
                  <span>잇</span> 마켓을 운영해요
                </p>
              </div>
              <a href="#" className="MarketListInnerGroupTitleButton">
                <span>1분컷 사용법</span>
              </a>
              <p className="SellerText">*it-마켓 : 베스트셀러만의 특가 판매 혜택</p>
              <p className="SellerTextPoint">실제 셀러의 판매 금액입니다.</p>
            </div>

            <div className="SellerSwiper">
              <Swiper loop={true} modules={[A11y, Autoplay]} slidesPerView={3} spaceBetween={1} autoplay={{ delay: 1000, disableOnInteraction: false }}>
                <SwiperSlide>
                  <div className="SwiperSlide SellerSlideImg1">
                    <div className="SellerItemInner">
                      <p className="ItemTitle">인스타 ○○○ 셀러</p>
                      <p className="SubTitle">판매금액</p>
                      <p className="Price">45,320원</p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="SwiperSlide SellerSlideImg2">
                    <div className="SellerItemInner">
                      <p className="ItemTitle">인스타 ○○○ 셀러</p>
                      <p className="SubTitle">판매금액</p>
                      <p className="Price">45,320원</p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="SwiperSlide SellerSlideImg3">
                    <div className="SellerItemInner">
                      <p className="ItemTitle">인스타 ○○○ 셀러</p>
                      <p className="SubTitle">판매금액</p>
                      <p className="Price">45,320원</p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="SwiperSlide SellerSlideImg4">
                    <div className="SellerItemInner">
                      <p className="ItemTitle">인스타 ○○○ 셀러</p>
                      <p className="SubTitle">판매금액</p>
                      <p className="Price">45,320원</p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="SwiperSlide SellerSlideImg5">
                    <div className="SellerItemInner">
                      <p className="ItemTitle">인스타 ○○○ 셀러</p>
                      <p className="SubTitle">판매금액</p>
                      <p className="Price">45,320원</p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
        <section className="revieSection">
          <p className="subTitle">
            스타일 셀러와
            <br /> 꿈꾸는 셀러
          </p>
          <Card></Card>
        </section>
        <BestsellerFooter></BestsellerFooter>
      </BrowserView>
    </div>
  );
}
