import * as React from "react";
import * as jQuery from "jquery";
import Swiper from "swiper";
import { sellerProfile1, sellerProfile2, sellerProfile3, sellerProfile4, sellerUi1, sellerUi2, sellerUi3, sellerUi4 } from "../images/bestseller";
import "/src/styles/bestseller/font.scss";
import "/src/styles/bestseller/reset.scss";
import "/src/styles/bestseller/style.scss";
import "/src/styles/bestseller/stylem.scss";
import { BestSellerNav, BestsellerNav } from "../components/Bestseller/BestSellerNav";
import { BestSellerFooter, BestsellerFooter } from "../components/Bestseller/BestSellerFooter";

export default function Bestseller() {
  const scrollToGiveClass = () => {
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
          loop: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
        });

        var prductswiper = new Swiper("#seller_swiper", {
          centeredSlides: true,
          loop: true,
          slidesPerView: "auto",
          spaceBetween: 24,
          speed: 1,
          autoplay: {
            delay: 1,
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
        });

        /* faq 아코디언 메뉴 */
        $(".faq-head").click(function () {
          var btn = $(this);
          var sub = btn.siblings(".faq-content");

          $(".faq-content").not(sub).slideUp();
          sub.slideToggle();

          /* btn 디자인 */
          var li = btn.parent();
          $(".fap-list > ul > li").not(li).removeClass();
          li.toggleClass("arrow_action");
        });

        /* 스크롤 효과 */
        $(".txt_title").scrollToGiveClass({
          class: "scroll",
          baseline: "middle",
          add: 300,
        });

        $(".seller_btn").scrollToGiveClass({
          class: "scroll",
          baseline: "middle",
          add: 300,
        });

        $(".seller_txt").scrollToGiveClass({
          class: "scroll",
          baseline: "middle",
          add: 300,
        });

        $("#review").scrollToGiveClass({
          class: "scroll",
          baseline: "middle",
          add: 300,
        });

        $("#faq").scrollToGiveClass({
          class: "scroll",
          baseline: "middle",
          add: 300,
        });

        // 메뉴 버튼 class 추가
        $(".m_menu").click(function () {
          $(".m_nav").toggleClass("open");
          $(this).toggleClass("btn_click");
        });

        /* card-hover class 추가 */
        $(".card").click(function () {
          $(this).toggleClass("card-view");
        });
      });
    })(jQuery);
  };

  React.useEffect(() => {
    scrollToGiveClass();
    script();
  }, []);

  return (
    <div className="page-container bestseller">
      <link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css" />
      <script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>

      <BestSellerNav></BestSellerNav>
      <body className="bestsellerbody">
        <main>
          <section id="main_slide" className="section swiper">
            <div className="swiper-wrapper">
              <div id="main11" className="swiper-slide">
                <div className="main_inner">
                  <div className="main_txt">
                    <p>소비를</p>
                    <p>
                      가치로 <span>잇</span>다
                    </p>
                  </div>
                  {/* <!-- .main_txt --> */}

                  {/* <!--button 영역 --> */}
                  <div className="btn_area">
                    <a href="#" className="slide_btn">
                      셀러 시작하기
                    </a>
                    <p className="btn_partner_wrap">
                      <a href="#" className="slide_btn">
                        입점문의
                      </a>
                      <a href="#" className="slide_btn">
                        라이브 커머스 신청
                      </a>
                    </p>
                  </div>
                </div>
                {/* <!-- .main_inner--> */}
              </div>

              <div id="main22" className="swiper-slide">
                <div className="main_inner">
                  <div className="main_txt">
                    <p>소비를</p>
                    <p>
                      가치로 <span>잇</span>다
                    </p>
                  </div>
                  <div className="btn_area">
                    <a href="#" className="slide_btn">
                      셀러 시작하기
                    </a>
                    <p className="btn_partner_wrap">
                      <a href="#" className="slide_btn">
                        입점문의
                      </a>
                      <a href="#" className="slide_btn">
                        라이브 커머스 신청
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="bestseller" className="section">
            <div className="section_inner">
              <div className="txt_group">
                <div className="txt_title">
                  <p>베스트셀러는</p>
                  <p className="text_bold">다양한 셀러와</p>
                  <p className="text_bold">
                    <span>잇</span> 마켓을 운영해요
                  </p>
                </div>

                <a href="#" className="seller_btn">
                  <span>1분컷 사용법</span>
                </a>
                <p className="seller_txt">*it-마켓 : 베스트셀러만의 특가 판매 혜택</p>
                <p className="seller_txthighlight">실제 셀러의 판매 금액입니다.</p>
              </div>
              <div id="seller_swiper" className="swiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide slide1">
                    <div className="seller_item_inner1">
                      <p className="title">블로거 ○○○ 셀러</p>
                      <p className="subtitle">판매금액</p>
                      <p className="price">45,320원</p>
                    </div>
                  </div>
                  <div className="swiper-slide slide2">
                    <div className="seller_item_inner1">
                      <p className="title">블로거 ○○○ 셀러</p>
                      <p className="subtitle">판매금액</p>
                      <p className="price">58,320원</p>
                    </div>
                  </div>
                  <div className="swiper-slide slide3">
                    <div className="seller_item_inner1">
                      <p className="title">블로거 ○○○ 셀러</p>
                      <p className="subtitle">판매금액</p>
                      <p className="price">75,320원</p>
                    </div>
                  </div>
                  <div className="swiper-slide slide4">
                    <div className="seller_item_inner1">
                      <p className="title">블로거 ○○○ 셀러</p>
                      <p className="subtitle">판매금액</p>
                      <p className="price">92,320원</p>
                    </div>
                  </div>
                  <div className="swiper-slide slide1">
                    <div className="seller_item_inner1">
                      <p className="title">블로거 ○○○ 셀러</p>
                      <p className="subtitle">판매금액</p>
                      <p className="price">45,320원</p>
                    </div>
                  </div>
                  <div className="swiper-slide slide2">
                    <div className="seller_item_inner1">
                      <p className="title">블로거 ○○○ 셀러</p>
                      <p className="subtitle">판매금액</p>
                      <p className="price">58,320원</p>
                    </div>
                  </div>
                  <div className="swiper-slide slide3">
                    <div className="seller_item_inner1">
                      <p className="title">블로거 ○○○ 셀러</p>
                      <p className="subtitle">판매금액</p>
                      <p className="price">75,320원</p>
                    </div>
                  </div>
                  <div className="swiper-slide slide4">
                    <div className="seller_item_inner1">
                      <p className="title">블로거 ○○○ 셀러</p>
                      <p className="subtitle">판매금액</p>
                      <p className="price">92,320원</p>
                    </div>
                  </div>
                </div>

                <div className="seller_pager_bar"></div>
              </div>
            </div>
          </section>

          <section id="review">
            <p className="title">
              스타일 셀러와
              <br />
              꿈꾸는 셀러
            </p>
            {/* <!-- 내용 --> */}
            <div className="review_items">
              {/* <!-- card 1 --> */}
              <div className="card">
                <div className="card-bg"></div>
                {/* <!-- 카드내용 --> */}
                <div className="card-head">
                  <p className="card-title">
                    영양제가 좋아서 쓴<br />찐 리뷰가 대박났어요!
                  </p>
                  <div className="card-profile">
                    <img src={sellerProfile1} alt="review image" />
                    <p>여행블로거 | 이웃 773명</p>
                  </div>
                </div>

                {/* <!-------- card hover 영역 ---------> */}

                <div className="card-hover">
                  <div>
                    <p className="card-subtitle">
                      <span>콜라겐 영양제</span>
                      <span>판매액 12,040,000원</span>
                    </p>
                    <p className="comment">제품가 4만원 x 43일 x 하루 7건</p>
                    <p className="content">블로그 글쓰기를 좋아해서 쓰고 효과 본 영양제 리뷰를 판매 링크와 함께 올렸더니 문의량 주문이 너무 많이 들어와서 깜짝 놀랐어요!</p>
                  </div>
                  <img className="ui-img" src={sellerUi1} alt="review image" />
                </div>
                {/* <!-- .card-hover --> */}
              </div>

              {/* <!-- card 2 --> */}
              <div className="card">
                <div className="card-bg"></div>
                {/* <!-- 카드내용 --> */}
                <div className="card-head">
                  <p className="card-title">
                    아이와 가벼운 한끼로
                    <br />
                    수익을 벌었어요.
                  </p>
                  <div className="card-profile">
                    <img src={sellerProfile2} alt="review image" />
                    <p>육아맘 다이어터 | 팔로우 15,999명</p>
                  </div>
                </div>

                {/* <!-------- card hover 영역 ---------> */}

                <div className="card-hover">
                  <div>
                    <p className="card-subtitle">
                      <span>건강한 시리얼</span>
                      <span>판매액 4,298,300원</span>
                    </p>
                    <p className="comment">제품가 26,000원 x 일주일동안 162개</p>
                    <p className="content">
                      어렵게 살을 뺴면서 알게 된 다이어트팁과 좋은 식단 아이템을 추천 할 수 있었어요. 정말 사랑하는 상품을 추천해서 더 반응도 좋았던 거 같아요.
                    </p>
                  </div>
                  <img className="ui-img" src={sellerUi2} alt="review image" />
                </div>
                {/* <!-- .card-hover --> */}
              </div>

              {/* <!-- card 3 --> */}
              <div className="card">
                <div className="card-bg"></div>
                {/* <!-- 카드내용 --> */}
                <div className="card-head">
                  <p className="card-title">
                    정말 효과 본 뷰티템을
                    <br />
                    리뷰했어요!
                  </p>
                  <div className="card-profile">
                    <img src={sellerProfile3} alt="review image" />
                    <p>맘&뷰티 인플러언서 | 팔로워 22,255명</p>
                  </div>
                </div>

                {/* <!-------- card hover 영역 ---------> */}

                <div className="card-hover">
                  <div>
                    <p className="card-subtitle">
                      <span>콜라겐 영양제</span>
                      <span>판매액 12,040,000원</span>
                    </p>
                    <p className="comment">제품가 4만원 x 43일 x 하루 7건</p>
                    <p className="content">
                      자주 얼굴이 부어서 붓기템을 많이 사봤어요! 마침 협찬 제안을 주셔서 먹어봤더니 효과가 좋아서 비포&애프터로 리뷰 올렸더니 인친들이 구매문의를 많이 하시더라구요!
                    </p>
                  </div>
                  <img className="ui-img" src={sellerUi3} alt="review image" />
                </div>
                {/* <!-- .card-hover --> */}
              </div>

              {/* <!-- card 4 --> */}
              <div className="card">
                <div className="card-bg"></div>
                {/* <!-- 카드내용 --> */}
                <div className="card-head">
                  <p className="card-title">
                    건강한 간식을
                    <br />
                    인친에게 소개했어요!
                  </p>
                  <div className="card-profile">
                    <img src={sellerProfile4} alt="review image" />
                    <p>푸드 인플루언서 | 팔로우 11,149명</p>
                  </div>
                </div>

                {/* <!-------- card hover 영역 ---------> */}

                <div className="card-hover">
                  <div>
                    <p className="card-subtitle">
                      <span>다이어트 간식</span>
                      <span>판매액 5,677,900원</span>
                    </p>
                    <p className="comment">제품가 21,506원 x 5일 동안 264건</p>
                    <p className="content">새로운 음식을 인친에게 소개하는 걸 좋아했는데, 평소 즐겨 먹던 미주라를 피드에서 최저가로 소개하고 수익도 벌어서 즐거웠어요!</p>
                  </div>
                  <img className="ui-img" src={sellerUi4} alt="review image" />
                </div>
                {/* <!-- .card-hover --> */}
              </div>
            </div>
            {/* <!--// .review_items--> */}
          </section>
          {/* <!--// #review--> */}

          <section id="faq">
            <p className="title">FAQ</p>

            <div className="faq-list">
              <ul>
                <li>
                  <h3 className="faq-head">
                    <span>Q</span>
                    진행 프로세스가 궁금합니다.
                  </h3>
                  <div className="faq-content">
                    {"[조건 협의] -> [입점 계약] -> [상품 등록] -> [셀러 신청] -> [공구 진행] -> [정산]"}
                    <br />
                    진행 상품, 판매가, 공급가, 수량 등 조건 협의를 합니다.
                    <br />
                    양사 간 협의 후 계약서 이견 없으시면 전자 계약서를 발송 드립니다.
                    <br />
                    계약일로부터 약 7일 이내 사이트에 등록 후 셀러 신청을 받습니다.
                    <br />
                    공구를 희망하는 셀러와 공구 일정을 잡고 해당일에 판매를 진행합니다.
                  </div>
                  {/* <!--//.faq-content--> */}
                </li>
                <li>
                  <h3 className="faq-head">
                    <span>Q</span>
                    정산일은 어떻게 진행되나요?
                  </h3>
                  <div className="faq-content">
                    수수료는 운영비가 포함된 금액이며,
                    <br />
                    수수료는 동일하게 진행하여 수수료가 높을수록 셀러들에게 지급되는
                    <br />
                    수수료가 높아지기 때문에 참여율이 높아진다는 점 참고 부탁드립니다.
                  </div>
                  {/* <!--//.faq-content--> */}
                </li>
                <li>
                  <h3 className="faq-head">
                    <span>Q</span>
                    공구가는 어떻게 정하나요
                  </h3>
                  <div className="faq-content">
                    본 사이트는 폐쇄율이라 온라인 검색 시 노출되지않습니다.
                    <br />
                    특정 기간 동안 저렴한 가격으로 판매하는 공구 특성상 온라인 검색 시 노출되는 최저가 보다 저렴한 금액을 진행하고 있습니다.
                  </div>
                  {/* <!--//.faq-content--> */}
                </li>
                <li>
                  <h3 className="faq-head">
                    <span>Q</span>
                    몰에 등록되면 바로 셀러가 판매하는 건가요?
                  </h3>
                  <div className="faq-content">
                    판매를 희망하는 셀러가 있으면 바로 가능하며, 기간이 더 소요될 수도 있습니다.
                    <br />
                    상품에 따라 상이한 점 참고 부탁드립니다.
                  </div>
                  {/* <!--//.faq-content--> */}
                </li>
              </ul>

              {/* <!-- ul2--> */}
              <ul>
                <li>
                  <h3 className="faq-head">
                    <span>Q</span>
                    셀러를 선택할 수 있나요?
                  </h3>
                  <div className="faq-content">
                    브랜드의 니즈 및 상황에 맞춘 다양한 서비스 모델을 제공하고 있습니다.
                    <br />
                    서비스에 따라 추가 비용이 발생할 수 있습니다.
                  </div>
                  {/* <!--//.faq-content--> */}
                </li>
                <li>
                  <h3 className="faq-head">
                    <span>Q</span>
                    배송은 어떻게 하나요?
                  </h3>
                  <div className="faq-content">
                    주문서를 취함하여 업체 발주 마감 시간 전 발주 메일로 전달 드리고 있습니다.
                    <br />
                    업체에서 출고 후 송장 번호 회신 주시면 송장 등록하고 있습니다.
                  </div>
                  {/* <!--//.faq-content--> */}
                </li>
                <li>
                  <h3 className="faq-head">
                    <span>Q</span>몇 명의 셀러가 진행하나요?
                  </h3>
                  <div className="faq-content">
                    소비자 누구나 판매할 수 있도록 돕는 플랫폼이기 때문에 진행하는
                    <br />
                    셀러의 제한을 두지 않습니다.
                    <br />
                    원하시는 조건이 있으실 경우 사전에 말씀해주시면 협의 가능합니다.
                  </div>
                  {/* <!--//.faq-content--> */}
                </li>
              </ul>
            </div>
            {/* <!--//.faq-list--> */}
          </section>
          {/* <!--//#faq--> */}
        </main>
        <BestSellerFooter></BestSellerFooter>
      </body>
    </div>
  );
}
