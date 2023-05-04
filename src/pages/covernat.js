import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "/src/styles/covernat/reset.css";
import "/src/styles/covernat/style.css";
import "/src/styles/covernat/font.css";
import { logo, main1, main2, main3 } from "../images/covernat";
export default function App() {
  return (
    <>
      <header className="covernatHeader">
        <div id="covernatHeaderInner">
          <div className="covernatLogo">
            <a href="#">
              <img src={logo} />
            </a>
          </div>
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
                      </li>
                      <li>
                        <a href="#">상의</a>
                      </li>
                      <li>
                        <a href="#">하의</a>
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
                      </li>
                      <li>
                        <a href="#">상의</a>
                      </li>
                      <li>
                        <a href="#">하의</a>
                      </li>
                      <li>
                        <a href="#">원피스</a>
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
                      </li>
                      <li>
                        <a href="#">가방</a>
                      </li>
                      <li>
                        <a href="#">신발</a>
                      </li>
                      <li>
                        <a href="#">용품</a>
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
          </div>
        </div>
      </header>
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
