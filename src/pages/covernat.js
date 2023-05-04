import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "/src/styles/covernat/reset.css";
import "/src/styles/covernat/style.css";
import "/src/styles/covernat/font.css";
import { main1, main2, main3 } from "../images/covernat";
export default function App() {
  return (
    <>
      <Swiper className="mySwiper">
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
