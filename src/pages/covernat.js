import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "/src/styles/covernat/reset.scss";
import "/src/styles/covernat/style.scss";
import "/src/styles/covernat/font.scss";
import { foll01, foll02, mem, menLook, ss001, ss002, ss003, ss004, sub1, sub2, sub3, sub4, womenLook } from "../images/covernat";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CovernatNav from "../components/covernat/CovernatNav";
import CovernatFooter from "../components/covernat/CovernatFooter";

export default function App() {
  return (
    <div className="page-container covernat">
      <CovernatNav></CovernatNav>
      <Swiper
        className="mySwiper"
        loop={true}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <a href="#">
            <img src={ss001}></img>
            <div className="swiperfont">
              <p className="font-main">SUMMER ACC WEEK</p>
              <p className="font-sub">컬렉션 보기</p>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <img src={ss002}></img>
            <div className="swiperfont">
              <p className="font-main">WOMEN SUMMER STYLING</p>
              <p className="font-sub">컬렉션 보기</p>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <img src={ss003}></img>
            <div className="swiperfont">
              <p className="font-main">Summer Vacance Sale</p>
              <p className="font-sub">컬렉션 보기</p>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <img src={ss004}></img>
            <div className="swiperfont">
              <p className="font-main">SYAY FOR THE SUMMER</p>
              <p className="font-sub">컬렉션 보기</p>
            </div>
          </a>
        </SwiperSlide>
      </Swiper>
      <section className="covernat_main">
        <div className="main_img_inner">
          <ul>
            <li>
              <a href="#">
                <img src={foll01} />
                <div className="img_txt">
                  <p>매일 바뀌는 특가 제품들은 만나보세요.</p>
                  <span>하루특가</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={mem} />
                <div className="img_txt">
                  <p>커버낫의 다양한 회원 혜택을 만나보세요.</p> <span>MEMBERSHIP</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={foll02} />
                <div className="img_txt">
                  <p>뜨거운 햇살 아래 부서지는 파도, 시원하게 불어오는 바람을 즐기러 떠날 시간입니다.</p>
                  <span>SUMMER</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="covernat_sub">
        <div className="main_sub_inner">
          <ul>
            <li>
              <a href="#">
                <img src={sub1} />
                <div className="img_txt">
                  <p>C 로고 시어서커 스트라이프 하프 셔츠</p>
                  <span>보러가기</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={sub2} />
                <div className="img_txt">
                  <p>그로서리 그래픽 티셔츠</p>
                  <span>보러 가기</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={sub3} />
                <div className="img_txt">
                  <p>테이퍼드 데님 팬츠</p>
                  <span>보러 가기</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={sub4} />
                <div className="img_txt">
                  <p>C 로고 B 캡</p>
                  <span>보러 가기</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="covernat_look">
        <div className="main_look_inner">
          <ul>
            <li>
              <a href="#">
                <img src={menLook} />
                <div className="look_txt">
                  <p>남성 컬렉션</p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={womenLook} />
                <div className="look_txt">
                  <p>여성 컬렉션</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <CovernatFooter></CovernatFooter>
    </div>
  );
}
