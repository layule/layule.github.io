import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "/src/styles/maran/reset.scss";
import "/src/styles/maran/style.scss";
import "/src/styles/maran/stylem.scss";
import "/src/styles/maran/font.scss";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { logo, maranFw, maranSm, maranSp } from "../images/maran";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import MaranNavogation from "../components/maran/MaranNavigation";
import MaranFooter from "../components/maran/MaranFooter";

export default function App() {
  return (
    <div className="page-container maran">
      <MaranNavogation />

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
          <a href="#">
            <img src={maranSp}></img>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <img src={maranSm}></img>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <img src={maranFw}></img>
          </a>
        </SwiperSlide>
      </Swiper>

      <MaranFooter />
    </div>
  );
}
