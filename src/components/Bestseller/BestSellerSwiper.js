import React from "react";
import "/src/styles/react/font.scss";
import "/src/styles/react/reset.scss";
import "/src/styles/react/swiper.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper";

const BestSellerSwiper = () => {
  return (
    <Swiper loop={true} modules={[A11y, Autoplay]} slidesPerView={3} spaceBetween={1} autoplay={{ delay: 1000, disableOnInteraction: false }}>
      <SwiperSlide>
        <div className="swiperSlide sellerSlideImg1">
          <div className="sellerItemInner">
            <p className="itemTitle">인스타 ○○○ 셀러</p>
            <p className="subTitle">판매금액</p>
            <p className="price">45,320원</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiperSlide sellerSlideImg2">
          <div className="sellerItemInner">
            <p className="itemTitle">인스타 ○○○ 셀러</p>
            <p className="subTitle">판매금액</p>
            <p className="price">45,320원</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiperSlide sellerSlideImg3">
          <div className="sellerItemInner">
            <p className="itemTitle">인스타 ○○○ 셀러</p>
            <p className="subTitle">판매금액</p>
            <p className="price">45,320원</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiperSlide sellerSlideImg4">
          <div className="sellerItemInner">
            <p className="itemTitle">인스타 ○○○ 셀러</p>
            <p className="subTitle">판매금액</p>
            <p className="price">45,320원</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiperSlide sellerSlideImg5">
          <div className="sellerItemInner">
            <p className="itemTitle">인스타 ○○○ 셀러</p>
            <p className="subTitle">판매금액</p>
            <p className="price">45,320원</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
export default BestSellerSwiper;
