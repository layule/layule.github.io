import * as React from "react"
import * as jQuery from "jquery"
import Swiper from "swiper"
import {
  colMain4,
  colMain5,
  colMain6,
  colMain7,
  evn1,
  evn2,
  insta,
  insta1,
  insta2,
  insta3,
  insta4,
  insta5,
  pr1,
  pr2,
  pr3,
  pr44,
  pr5,
  pr6,
  pr7,
  pr8,
  top1,
  top2,
  top3,
  top4,
} from "../images/purelife"

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
  - 클래스를 부여받을 때 함수를 호출함.x

removeFunction : function(){}
  - 클래스가 제거될 때 함수를 호출함.

*/
    ;(function ($) {
      $.fn.scrollToGiveClass = function (options) {
        var defaultOptions = {
          baseline: "top",
          class: "scrolled",
          add: 0,
          limit: "",
          limitValue: 0,
          addFunction: function () {},
          removeFunction: function () {},
        }

        var op = $.extend(defaultOptions, options)

        return this.each(function () {
          var $win = $(window)
          var $this = $(this)
          var this_top = $this.offset().top //영역의 위치
          $win.on("load scroll", scrolled)

          function scrolled() {
            var win_top = $win.scrollTop() //스크롤된 위치
            var win_height = $win.outerHeight() //화면의 높이

            if (op.baseline == "bottom") win_top += win_height
            if (op.baseline == "middle") win_top += win_height / 2
            if (!isNaN(op.baseline)) this_top = op.baseline

            if (1 > op.add && op.add > -1) {
              op.add = win_height * op.add
            }

            win_top += op.add

            var limit = true
            if (op.limit == "fixed") {
              limit = win_top < op.limitValue
            }
            if (op.limit == "baseline") {
              limit = win_top < this_top + op.limitValue
            }

            if (win_top > this_top && limit) {
              if (!$this.hasClass(op.class)) op.addFunction()
              $this.addClass(op.class)
            } else {
              if ($this.hasClass(op.class)) op.removeFunction()
              $this.removeClass(op.class)
            }
          } //end:scrolled
        }) //end:each()
      } //end:scrollClass()
    })(jQuery)
  }

  const script = () => {
    ;(function ($) {
      $(function () {
        var mainswiper = new Swiper("#main_slide", {
          loop: true,
          autoplay: {
            delay: 6000,
            disableOnInteraction: false,
          },
        })

        var prductswiper = new Swiper("#seller_swiper", {
          centeredSlides: true,
          loop: true,
          slidesPerView: "auto",
          spaceBetween: 24,
          speed: 700,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },

          pagination: {
            el: ".seller_pager_bar",
            type: "progressbar",
          },

          breakpoination: {
            centeredSlides: false,
            spaceBetween: 33,
          },
        })

        /* faq 아코디언 메뉴 */
        $(".faq-head").click(function () {
          var btn = $(this)
          var sub = btn.siblings(".faq-content")

          $(".faq-content").not(sub).slideUp()
          sub.slideToggle()

          /* btn 디자인 */
          var li = btn.parent()
          $(".fap-list > ul > li").not(li).removeClass()
          li.toggleClass("arrow_action")
        })

        /* 스크롤 효과 */
        $(".txt_title").scrollToGiveClass({
          class: "scroll",
          baseline: "middle",
          add: 300,
        })

        $(".seller_btn").scrollToGiveClass({
          class: "scroll",
          baseline: "middle",
          add: 300,
        })

        $(".seller_txt").scrollToGiveClass({
          class: "scroll",
          baseline: "middle",
          add: 300,
        })

        $("#review").scrollToGiveClass({
          class: "scroll",
          baseline: "middle",
          add: 300,
        })

        $("#faq").scrollToGiveClass({
          class: "scroll",
          baseline: "middle",
          add: 300,
        })

        // 메뉴 버튼 class 추가
        $(".m_menu").click(function () {
          $(".m_nav").toggleClass("open")
          $(this).toggleClass("btn_click")
        })

        /* card-hover class 추가 */
        $(".card").click(function () {
          $(this).toggleClass("card-view")
        })
      })
    })(jQuery)
  }

  React.useEffect(() => {
    scrollToGiveClass()
    script()
  }, [])

  return (
    <>
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>purelife</title>

        {/* <!-- css --> */}
        <link rel="stylesheet" href="../src/style.css" />

        {/* <!-- reset css--> */}
        <link rel="stylesheet" href="../src/reset.css" />
        {/* <!-- font --> */}
        <link rel="stylesheet" href="../src/font.css" />

        {/* <!-- jQuery --> */}
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="js/jquery.scrollToGiveClass.js"></script>
      </head>
      <body>
        <header>
          <div id="container">
            <div className="inner">
              <div id="logo">
                <img src="img/logo.png" alt="logo" />
              </div>
              <div id="top_menu">
                <ul>
                  <li>
                    <a href="#" alt="all">
                      ALL
                    </a>
                  </li>
                  <li>
                    <a href="#" alt="new">
                      NEW
                    </a>
                  </li>
                  <li>
                    <a href="#" alt="best">
                      BEST
                    </a>
                  </li>
                  <li>
                    <a href="#" alt="table">
                      TABLE
                    </a>
                  </li>
                  <li>
                    <a href="#" alt="chair">
                      CHAIR
                    </a>
                  </li>
                  <li>
                    <a href="#" alt="sofa">
                      SOFA
                    </a>
                  </li>
                  <li>
                    <a href="#" alt="bad">
                      BAD
                    </a>
                  </li>
                  <li>
                    <a href="#" alt="things">
                      THINGS
                    </a>
                  </li>
                  <li>
                    <a href="#" alt="q&a">
                      Q&A
                    </a>
                  </li>
                </ul>
              </div>
              <div id="icon">
                <ul>
                  <li>
                    <a href="#">
                      <img src={top1} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={top2} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={top3} />
                    </a>
                  </li>
                  <li>
                    <a href=".iconbtn_inner" className="iconbtn">
                      <img src={top4} />
                    </a>

                    <div className="iconbtn_inner">
                      <div className="searchWrapper">
                        <form action="">
                          <input
                            type="search"
                            className="searchBar"
                            placeholder="검색어를 입력해주세요."
                            onfocus="this.placeholder=''"
                            onblur="this.placeholder='검색어를 입력해주세요.'"
                          />

                          <input type="image" className="search_btn" src={top4} />
                        </form>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
        <main>
          <div className="inner">
            <ul className="slider">
              <li>
                <a href="#">
                  <img src={colMain7} />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={colMain5} />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={colMain4} />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={colMain6} />
                </a>
              </li>
            </ul>
          </div>

          <div className="show">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div id="view_bg">
            <div className="view_bg_bottom">
              <div className="inner">
                <div className="view_text">
                  <p className="view_text01">We Make Furniture</p>
                  <p className="view_text02">우리는 가구를 만듭니다.</p>
                  <p className="view_text03">
                    나와 우리 가족이 함께 하는 소중한 공간에 가구를 들인다건
                    <br />
                    단순히 식음를 쇼핑하는 것과는 다른 의미로 다가옵니다.
                  </p>
                  <p className="view_text04">진심을 담아 세상에 단 하나뿐인 가구를 만들겠습니다.</p>
                  <p className="view_bt">
                    <a href="#">view more</a>
                  </p>
                </div>
                <div className="veiw">
                  <a href="#">
                    <img src={vil1} alt="vido" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="inner">
            <div className="text">
              <p className="t_01">EVENT</p>
              <p className="t_02">이벤트</p>
            </div>
            <div className="event_bn">
              <ul>
                <li>
                  <a href="#">
                    <img src={evn1} alt="evn1" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={evn2} alt="evn2" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="best_item">
            <div className="inner">
              <div className="text">
                <p className="t_01">PureLife Best Saller</p>
                <p className="t_02">베스트 셀러</p>
              </div>
              <div className="best_ph">
                <ul>
                  <li>
                    <a href="#">
                      <img src={pr1} alt="bestitem" />
                      <span className="saletext"></span>
                      <p className="saleprice">20%</p>
                    </a>
                    <div className="best_item_sb">
                      <p className="item_naim">UNIT2 no.2</p>
                      <p className="item_day">1월말 순차배송</p>
                      <p className="item_price">
                        580,000원<span> 490,000원</span>
                      </p>
                    </div>
                  </li>
                  <li>
                    <a href="#">
                      <img src={pr2} alt="베스트아이템사진2" />
                      <div className="sale_bg">
                        <span className="saletext"></span>
                        <p className="saleprice">20%</p>
                      </div>
                    </a>
                    <div className="best_item_sb">
                      <p className="item_naim">Table no.102 set [4인/6인]</p>
                      <p className="item_day">2월초 순차배송</p>
                      <p className="item_price">
                        1,100,000원 <span> 880,000원</span>
                      </p>
                    </div>
                  </li>
                  <li>
                    <a href="#">
                      <img src={pr44} alt="베스트아이템사진3" />
                      <div className="sale_bg">
                        <span className="saletext"></span>
                        <p className="saleprice">15%</p>
                      </div>
                    </a>
                    <div className="best_item_sb">
                      <p className="item_naim">Fint Drawer Wide_desert beige</p>
                      <p className="item_day">2월말 순차배송</p>
                      <p className="item_price">
                        730,000원<span> 620,000원</span>
                      </p>
                    </div>
                  </li>
                  <li>
                    <a href="#">
                      <img src={pr3} alt="베스트아이템사진4" />
                      <div className="sale_bg">
                        <span className="saletext"></span>
                        <p className="saleprice">20%</p>
                      </div>
                    </a>
                    <div className="best_item_sb">
                      <p className="item_naim">PL Cabinet</p>
                      <p className="item_day">2월말 순차배송</p>
                      <p className="item_price">
                        340,000원<span> 272,000원</span>
                      </p>
                    </div>
                  </li>
                  <li>
                    <a href="#">
                      <img src={pr5} alt="베스트아이템사진5" />
                      <div className="sale_bg">
                        <span className="saletext"></span>
                        <p className="saleprice">20%</p>
                      </div>
                    </a>
                    <div className="best_item_sb">
                      <p className="item_naim">PL AV Table</p>
                      <p className="item_day">2월말 순차배송</p>
                      <p className="item_price">
                        590,000원<span> 472,000원</span>
                      </p>
                    </div>
                  </li>
                  <li>
                    <a href="#">
                      <img src={pr8} alt="베스트아이템사진6" />
                      <div className="sale_bg">
                        <span className="saletext"></span>
                        <p className="saleprice">19%</p>
                      </div>
                    </a>
                    <div className="best_item_sb">
                      <p className="item_naim">Mos Unit no.5</p>
                      <p className="item_day">2월말 순차배송</p>
                      <p className="item_price">
                        360,000원<span> 290,000원</span>
                      </p>
                    </div>
                  </li>
                  <li>
                    <a href="#">
                      <img src={pr6} alt="베스트아이템사진7" />
                      <div className="sale_bg">
                        <span className="saletext"></span>
                        <p className="saleprice">16%</p>
                      </div>
                    </a>
                    <div className="best_item_sb">
                      <p className="item_naim">UNIT2 shelf S</p>
                      <p className="item_day">2월말 순차배송</p>
                      <p className="item_price">
                        230,000원<span> 198,000원</span>
                      </p>
                    </div>
                  </li>
                  <li>
                    <a href="#">
                      <img src={pr7} alt="베스트아이템사진8" />
                      <div className="sale_bg">
                        <span className="saletext"></span>
                        <p className="saleprice">15%</p>
                      </div>
                    </a>
                    <div className="best_item_sb">
                      <p className="item_naim">Fint Drawer Wide_apricot</p>
                      <p className="item_day">2월말 순차배송</p>
                      <p className="item_price">
                        730,000원<span> 620,000원</span>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="beest_item_btn">
                <a href="#"></a>
              </div>
            </div>
          </div>

          <div className="instamain">
            <div className="inner">
              <p className="insta_01">INSTAGRAM REVIEW</p>
              <div className="insta_main_img">
                <div className="insta_main_img_inner">
                  <div className="instaImg">
                    <a href="#">
                      <img src={insta} alt="insta" />
                    </a>
                  </div>
                </div>
                <div className="insta_id">@ pure_life</div>
                <div className="insta_follow">
                  <a href="#">follow</a>
                </div>
              </div>
            </div>
          </div>

          <div className="instabestitem">
            <ul>
              <li>
                <div className="snap_box">
                  <a href="#">
                    <img src={insta1} alt="insta" />
                  </a>
                </div>
              </li>
              <li>
                <div className="snap_box">
                  <a href="#">
                    <img src={insta2} alt="insta" />
                  </a>
                </div>
              </li>
              <li>
                <div className="snap_box">
                  <a href="#">
                    <img src={insta3} alt="insta" />
                  </a>
                </div>
              </li>
              <li>
                <div className="snap_box">
                  <a href="#">
                    <img src={insta4} alt="insta" />
                  </a>
                </div>
              </li>
              <li>
                <div className="snap_box">
                  <a href="#">
                    <img src={insta5} alt="insta" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </main>

        <footer>
          <div className="inner">
            <div className="footer_bt">
              <ul>
                <li>
                  <a href="#">개인정보처리방침</a>
                </li>
                <li>
                  <a href="#">이용약관</a>
                </li>
                <li>
                  <a href="#">사업자정보확인</a>
                </li>
                <li>
                  <a href="#">쇼핑가이드</a>
                </li>
              </ul>
            </div>
            <p className="footer_report">
              <span>CUSTOMER CENTER</span>070 - 1234 - 1234 &nbsp;AM 10:00 ~ PM 17:00 (토,일 휴무)
              <br />
              <span>PURE LIFE</span> <span>대표</span> 김라율 <span>사업자번호</span> 867-18-00432 통신판매 신고 2021-전북전주-0010 [사업자정보확인]
              <br />
              <span>전화번호</span> 070 - 1234 - 1234 <span>팩스</span> 070 - 1234 - 1234 <span>이메일</span> dbf6655 @ naver.com
              <br />
              <span>주소</span> (40400) 전라북도 전주시 덕진구 백제대로 572 (덕진동) <span>개인정보책임자</span> 김라율 (dbf6655 @ naver.com)
            </p>
          </div>
        </footer>
      </body>
    </>
  )
}
