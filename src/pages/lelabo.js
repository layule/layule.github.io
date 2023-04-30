import * as React from "react";
import * as jQuery from "jquery";
import Swiper from "swiper";
import { logoLabo, newIn, pr10, pr11, pr12, pr13, pr14, pr15, pr16, pr17, pr18, pr19, pr1L, pr2L, pr3, pr4, pr5, pr6, pr7, pr8, pr9 } from "../images/lelabo";
import "/src/styles/lelabo/font.css";
import "/src/styles/lelabo/reset.css";
import "/src/styles/lelabo/style.css";
import "/src/styles/lelabo/stylem.css";

export default function Component() {
  const scrollToGiveClass = () => {
    /*
scrollToGiveClass 플러그인 옵션
baseline :
  'top'(기본값) - 화면의 위를 기준으로 적용
  'bottom' - 화면의 아래를 기준으로 적용
  'middle' - 화면의 가운데를 기준으로 적용
  정수 - 적용되는 위치값을 직접설정

class : 부여되는 클래스명
  'scrolled'(기본값)

add : baseline(기준)의 위치를 가감함
  정수 - 입력된 값만큼(px) 가감됨.
  실수(1>n>-1) - 입력된 값의 화면비만큼 값이 가감됨.

limit : 클래스를 적용받는 한계값의 기준
  'fixed' - 화면위에서부터 limitValue만큼 제한
  'baseline' - 적용받는 기준에서부터 limitValue만큼 제한

limitValue : 한계값
  정수

addFunction : function(){}
  - 클래스를 부여받을 때 함수를 호출함.

removeFunction : function(){}
  - 클래스가 제거될 때 함수를 호출함.

*/
    (function ($) {
      $.fn.scrollToGiveClass = function (options) {
        var defaultOptions = {
          baseline: "top",
          class: "scrolled",
          add: 0,
          limit: "",
          limitValue: 0,
          addFunction: function () {},
          removeFunction: function () {},
        };

        var op = $.extend(defaultOptions, options);

        return this.each(function () {
          var $win = $(window);
          var $this = $(this);
          var this_top = $this.offset().top; //영역의 위치
          $win.on("load scroll", scrolled);

          function scrolled() {
            var win_top = $win.scrollTop(); //스크롤된 위치
            var win_height = $win.outerHeight(); //화면의 높이

            if (op.baseline == "bottom") win_top += win_height;
            if (op.baseline == "middle") win_top += win_height / 2;
            if (!isNaN(op.baseline)) this_top = op.baseline;

            if (1 > op.add && op.add > -1) {
              op.add = win_height * op.add;
            }

            win_top += op.add;

            var limit = true;
            if (op.limit == "fixed") {
              limit = win_top < op.limitValue;
            }
            if (op.limit == "baseline") {
              limit = win_top < this_top + op.limitValue;
            }

            if (win_top > this_top && limit) {
              if (!$this.hasClass(op.class)) op.addFunction();
              $this.addClass(op.class);
            } else {
              if ($this.hasClass(op.class)) op.removeFunction();
              $this.removeClass(op.class);
            }
          } //end:scrolled
        }); //end:each()
      }; //end:scrollClass()
    })(jQuery);
  };

  const script = () => {
    (function ($) {
      $(function () {
        var mainswiper = new Swiper("#main_slide", {
          loop: true, //무한루프(기본값 false)
          autoplay: {
            delay: 6000,
            disableOnInteraction: false,
          },
        });

        var prductswiper = new Swiper("#seller_swiper", {
          // spaceBetween: 180,
          freeMode: false,
          // centeredSlides: true, // 활성화된 슬라이드 가운데 정렬
          loop: true, //무한루프(기본값 false)
          slidesPerView: 1, // 한번에 몇장의 슬라이드를 보여줄지 선택
          speed: 600, //슬라이드 움직이는 시간
          autoplay: {
            delay: 3000, //멈췄을 때 보여주는 시간
            disableOnInteraction: false,
          },
        });

        /* 스크롤 효과 */
        $(".inner_txt").scrollToGiveClass({
          className: "scroll",
          baseline: "middle",
          add: 300,
        });

        $(".inner_txt_two").scrollToGiveClass({
          className: "scroll",
          baseline: "middle",
          add: 300,
        });

        $(".colec_so").scrollToGiveClass({
          className: "scroll",
          baseline: "middle",
          add: 300,
        });

        $(".colec_se").scrollToGiveClass({
          className: "scroll",
          baseline: "middle",
          add: 300,
        });

        $(".off_txt").scrollToGiveClass({
          className: "scroll",
          baseline: "middle",
          add: 300,
        });

        $(".colec_se2").scrollToGiveClass({
          className: "scroll",
          baseline: "middle",
          add: 300,
        });

        $(".m_menu").click(function () {
          $(".m_nav").toggleClass("open");
          $(this).toggleClass("btn_click");
        });
      });
    })(jQuery);
  };

  React.useEffect(() => {
    scrollToGiveClass();
    script();
  }, []);

  return (
    <>
      <link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css" />

      <script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
      <body>
        <p className="top_event">전 구매 무료배송과 선물포장 혜택을 즐겨보세요.</p>

        <header>
          <nav className="header_menu">
            <ul className="header_ul">
              <li>
                <ul className="menu_left">
                  <li>
                    <a href="#">Purchase</a>
                  </li>
                  <li>
                    <a href="#">Store</a>
                  </li>
                  <li>
                    <a href="#">Brand</a>
                  </li>
                </ul>
              </li>
              <li>
                <div className="logo">
                  <a href="#">
                    <img src={logoLabo} alt="logo" />
                  </a>
                </div>
              </li>
              <li>
                <ul className="menu_right">
                  <li>
                    <a href="#">Login</a>
                  </li>
                  <li>
                    <a href="#">Cart</a>
                  </li>
                  <li>
                    <a href="#">Search</a>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="m_menu">
              <span></span>
              <span></span>
            </div>

            <div className="m_nav">
              <ul>
                <li>
                  <a href="#">Purchase</a>
                </li>
                <li>
                  <a href="#">Store</a>
                </li>
                <li>
                  <a href="#">Brand</a>
                </li>
                <li>
                  <a href="#">Login</a>
                </li>
                <li>
                  <a href="#">Cart</a>
                </li>
                <li>
                  <a href="#">Search</a>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        <main>
          <section id="main_slide" className="section swiper mySwiper">
            <div className="swiper-wrapper">
              <div id="main1" className="swiper-slide"></div>
              <div id="main2" className="swiper-slide"></div>
              <div id="main3" className="swiper-slide"></div>
            </div>
          </section>

          <section id="giveme">
            <div className="giveme_inner">
              <p className="inner_txt">Exclusives</p>
              <p className="inner_txt_two">classic collection / city Exclusives</p>
              <div className="giveview">
                <a href="#">
                  <img src={newIn} alt="pudu" />
                </a>
              </div>
            </div>
          </section>

          <section id="product">
            <div className="pr_p">
              <p className="colec_so">LE LABO FRAGRANCES</p>
              <p className="colec_se">Le Labo's perfume collection is created in collaboration with talented and inventive perfumers.</p>
            </div>
            <div id="seller_swiper" className="swiper mySwiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide slide1">
                  <div className="seller_item_inner">
                    <a href="#">
                      <img src={pr1L} />
                    </a>
                  </div>
                </div>
                <div className="swiper-slide slide2">
                  <div className="seller_item_inner">
                    <a href="#">
                      <img src={pr2L} />
                    </a>
                  </div>
                </div>
                <div className="swiper-slide slide3">
                  <div className="seller_item_inner">
                    <a href="#">
                      <img src={pr3} />
                    </a>
                  </div>
                </div>
                <div className="swiper-slide slide4">
                  <div className="seller_item_inner">
                    <a href="#">
                      <img src={pr4} />
                    </a>
                  </div>
                </div>
                <div className="swiper-slide slide5">
                  <div className="seller_item_inner">
                    <a href="#">
                      <img src={pr5} />
                    </a>
                  </div>
                </div>
                <div className="swiper-slide slide6">
                  <div className="seller_item_inner">
                    <a href="#">
                      <img src={pr6} />
                    </a>
                  </div>
                </div>
                <div className="swiper-slide slide7">
                  <div className="seller_item_inner">
                    <a href="#">
                      <img src={pr7} />
                    </a>
                  </div>
                </div>
                <div className="swiper-slide slide8">
                  <div className="seller_item_inner">
                    <a href="#">
                      <img src={pr8} />
                    </a>
                  </div>
                </div>
                <div className="swiper-slide slide9">
                  <div className="seller_item_inner">
                    <a href="#">
                      <img src={pr9} />
                    </a>
                  </div>
                </div>
                <div className="swiper-slide slide10">
                  <div className="seller_item_inner">
                    <a href="#">
                      <img src={pr10} />
                    </a>
                  </div>
                </div>
                <div className="swiper-slide slide11">
                  <div className="seller_item_inner">
                    <a href="#">
                      <img src={pr11} />
                    </a>
                  </div>
                </div>
                <div className="swiper-slide slide12">
                  <div className="seller_item_inner">
                    <a href="#">
                      <img src={pr12} />
                    </a>
                  </div>
                </div>
                <div className="swiper-slide slide13">
                  <div className="seller_item_inner">
                    <a href="#">
                      <img src={pr13} />
                    </a>
                  </div>
                </div>
                <div className="swiper-slide slide14">
                  <div className="seller_item_inner">
                    <a href="#">
                      <img src={pr14} />
                    </a>
                  </div>
                </div>
                <div className="swiper-slide slide15">
                  <div className="seller_item_inner">
                    <a href="#">
                      <img src={pr15} />
                    </a>
                  </div>
                </div>
                <div className="swiper-slide slide16">
                  <div className="seller_item_inner">
                    <a href="#">
                      <img src={pr16} />
                    </a>
                  </div>
                </div>
                <div className="swiper-slide slide17">
                  <div className="seller_item_inner">
                    <a href="#">
                      <img src={pr17} />
                    </a>
                  </div>
                </div>
                <div className="swiper-slide slide18">
                  <div className="seller_item_inner">
                    <a href="#">
                      <img src={pr18} />
                    </a>
                  </div>
                </div>
                <div className="swiper-slide slide19">
                  <div className="seller_item_inner">
                    <a href="#">
                      <img src={pr19} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="adrass" className="section">
            <div className="Offline">
              <p className="off_txt">KOREA, le labo offline store.</p>
              <p className="colec_se2">Le Labo pays close attention to every step of the process, from creating a perfume to opening a new store.</p>
              <ul>
                <li>
                  <a href="#">
                    <div clclassNameass="snap_box">
                      <ul>
                        <li>LELABO SEONGSU</li>
                        <li>Yeonmujang-gil, Seongdong-gu, Seoul</li>
                        <li>02-000-0000</li>
                      </ul>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="snap_box">
                      <ul>
                        <li>LELABO SEONGSU</li>
                        <li>Yeonmujang-gil, Seongdong-gu, Seoul</li>
                        <li>02-000-0000</li>
                      </ul>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="snap_box">
                      <ul>
                        <li>LELABO SEONGSU</li>
                        <li>Yeonmujang-gil, Seongdong-gu, Seoul</li>
                        <li>02-000-0000</li>
                      </ul>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="snap_box">
                      <ul>
                        <li>LELABO SEONGSU</li>
                        <li>Yeonmujang-gil, Seongdong-gu, Seoul</li>
                        <li>02-000-0000</li>
                      </ul>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="snap_box">
                      <ul>
                        <li>LELABO SEONGSU</li>
                        <li>Yeonmujang-gil, Seongdong-gu, Seoul</li>
                        <li>02-000-0000</li>
                      </ul>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="snap_box">
                      <ul>
                        <li>LELABO SEONGSU</li>
                        <li>Yeonmujang-gil, Seongdong-gu, Seoul</li>
                        <li>02-000-0000</li>
                      </ul>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </main>

        <footer className="labo">
          <div className="fot_inr">
            <ul>
              <li>
                <a href="#">쇼핑가이드</a>
              </li>
              <li>
                <a href="#">이용약관</a>
              </li>
              <li>
                <a href="#">개인정보처리방침</a>
              </li>
              <li>
                <a href="#">사업자정보확인</a>
              </li>
            </ul>
            <p className="cs_notice">
              le labo CEO.lelabo 사업자등록번호. 000-00-00000 e-mail. lelabo@oooo.co.kr 주소. 서울특별시 성동구 송정길 00
              <br />
              통신판매업신고번호. 0000-서울성동-0000
              <br /> <span className="copyright">2023 &copy; Le labo corp. All right reserved.</span>
            </p>
          </div>
        </footer>
      </body>
    </>
  );
}
