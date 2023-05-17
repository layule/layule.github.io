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

export default function App() {
  const [age, setAge] = React.useState(10);

  const handleChange = event => {
    setAge(event.target.value);
  };

  return (
    <div className="page-container maran">
      <nav className="mav_size">
        <ul className="lag_line">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">
              <img src={logo} />
            </a>
          </li>
          <li>
            <a href="#">
              <div>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                  <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={age} onChange={handleChange} label="Age">
                    <MenuItem value={10}>Korea </MenuItem>
                    <MenuItem value={20}>English</MenuItem>
                    <MenuItem value={30}>China</MenuItem>
                    <MenuItem value={40}>Italy</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </a>
          </li>
        </ul>
      </nav>
      <div className="bot_me">
        <ul>
          <li>
            <a href="#">Archive</a>
          </li>
          <li>
            <a href="#">Campaign</a>
          </li>
        </ul>
      </div>
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

      <footer>
        <div class="for_txt_po">
          <ul>
            <li>
              <a href="#">Company</a>
              <br />

              <a href="#">Agreemen</a>
              <br />

              <a href="#">Privacy</a>
              <br />

              <a href="#">Guide</a>
            </li>

            <li>
              1500 - 0000 <br />
              10AM - 5PM <br />
              MON - FRI <br />
              SAT, SUN, HOLIDDAY
            </li>
            <li>
              <p>
                Ctdots Corp | MARAN | 00000 서울특별시 중구 신당동
                <br />
                Business License 000-00-00000
                <br />
                Mail Order License No. 제2021-서울-00000
                <br />
                maran.kr@gmail.com
              </p>
            </li>
            <li>
              <p class="copyright">2023 &copy; MARAN Corp. All Right Reserved.</p>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
