import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "/src/styles/maran/reset.scss";
import "/src/styles/maran/style.scss";
import "/src/styles/maran/stylem.scss";
import "/src/styles/maran/font.scss";
import { maranFw, maranSm, maranSp } from "../images/maran";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import { MaranNavogation } from "../components/maran/MaranNavigation";
import { MaranFooter } from "../components/maran/MaranFooter";

export default function Maran() {
  return (
    <div className="page-container maran">
      <MaranNavogation></MaranNavogation>

      <Swiper
        className="maranSwiper"
        loop={true}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={swiper => console.log("끼에에엑?")}
        onSlideChange={() => console.log("뿌에에에엑?????")}
      >
        <SwiperSlide>
          <a>
            <img src={maranSp} alt="maran img" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a>
            <img src={maranSm} alt="maran img" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a>
            <img src={maranFw} alt="maran img" />
          </a>
        </SwiperSlide>
      </Swiper>

      <MaranFooter></MaranFooter>
    </div>
  );
}
