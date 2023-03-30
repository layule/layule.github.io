import * as React from "react"
import * as jQuery from "jquery"
import Swiper from "swiper"
import "/src/styles/bestseller/reset.css"
import "/src/styles/bestseller/style.css"
import "/src/styles/bestseller/stylem.css"

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
      {/* <!-- favicon--> */}
      {/* <link rel="shortcut icon" href={bsFavicon} /> */}
      {/* <!-- 플러그인 연결 --> */}
      <link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css" />

      <script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
      <body>
        <header>
          <div id="TopBanner">
            <a href="#">covernat 신규가입 20% 할인쿠폰</a>
          </div>
          {/* <!-- //#TopBanner --> */}
          <div id="headerInner" class="header_fix">
            <div class="headerArea">
              <div id="logo">
                <h1>
                  <a href="header">
                    <img src="img/logo.png" alt="로고" />
                  </a>
                </h1>
              </div>
              {/* <!--// #logo --> */}
              <div id="top_menu">
                <ul class="top_menu">
                  <li>
                    <a href="#">SALE </a>
                    <div class="top_menu_sub">
                      <div class="top_menu_sub_inner">
                        <ul class="dep1">
                          <li>
                            <a href="#">Women</a>
                          </li>
                          <li>
                            <a href="#">Men</a>
                          </li>
                        </ul>
                        <ul class="dep2">
                          <li>
                            <a href="#">All</a>
                          </li>
                          <li>
                            <a href="#">Outer</a>
                          </li>
                          <li>
                            <a href="#">Top</a>
                          </li>
                          <li>
                            <a href="#">Pant</a>
                          </li>
                          <li>
                            <a href="#">Bag</a>
                          </li>
                        </ul>
                        <div class="top_menu_sub_inner_thumb">
                          <ul>
                            <li>
                              <a href="#">
                                <div class="MenuSubInner">
                                  <p>어센틱 로고 티셔츠 블랙</p>
                                  <span>
                                    23,400<strong>원</strong>
                                  </span>
                                </div>
                                {/* <!-- .MenuSubInner --> */}
                              </a>
                            </li>
                            <li>
                              <a href=""></a>
                              <div class="MenuSubInner">
                                <p>피그먼트 스몰 어센틱 로고 티셔츠 차콜</p>
                                <span>
                                  27,000<strong>원</strong>
                                </span>
                              </div>
                              {/* <!-- .MenuSubInner --> */}
                            </li>
                            <li>
                              <a href=""></a>
                              <div class="MenuSubInner">
                                <p>비치 팜트리 티셔츠 아이보리</p>
                                <span>
                                  29,400<strong>원</strong>
                                </span>
                              </div>
                              {/* <!-- .MenuSubInner --> */}
                            </li>
                          </ul>
                        </div>
                        {/* <!-- //.top_menu_sub_inner_thumb --> */}
                      </div>
                      {/* <!-- //.top_menu_sub_inne --> */}
                    </div>
                    {/* <!-- //.top_menu_sub --> */}
                  </li>
                  <li>
                    <a href="#">BEST</a>
                    <div class="top_menu_sub">
                      <div class="top_menu_sub_inner">
                        <ul class="dep1">
                          <li>
                            <a href="#">BEST</a>
                          </li>
                          <li>
                            <a href="#">MD'S PICK</a>
                          </li>
                        </ul>
                        <ul class="dep2">
                          <li>
                            <a href="#">New</a>
                          </li>
                          <li>
                            <a href="#">Outer</a>
                          </li>
                          <li>
                            <a href="#">Top</a>
                          </li>
                          <li>
                            <a href="#">Pant</a>
                          </li>
                        </ul>
                        <div class="top_menu_sub_inner_thumb">
                          <ul>
                            <li>
                              <a class="best" href="">
                                <div class="MenuSubInner">
                                  <p>프레피 럭비 맨투맨 네이비</p>
                                  <span>
                                    79,000<strong>원</strong>
                                  </span>
                                </div>
                                {/* <!-- .MenuSubInner --> */}
                              </a>
                            </li>
                            <li>
                              <a class="best" href=""></a>
                              <div class="MenuSubInner">
                                <p>빅 로고 트랙 자켓 블랙</p>
                                <span>
                                  119,000<strong>원</strong>
                                </span>
                              </div>
                              {/* <!-- .MenuSubInner --> */}
                            </li>
                            <li>
                              <a class="best" href=""></a>
                              <div class="MenuSubInner">
                                <p>프레피 코듀로이 바시티 자켓 베이지</p>
                                <span>
                                  189,000<strong>원</strong>
                                </span>
                              </div>
                              {/* <!-- .MenuSubInner --> */}
                            </li>
                          </ul>
                        </div>
                        {/* <!-- //.top_menu_sub_inner_thumb --> */}
                      </div>
                      {/* <!-- //.top_menu_sub_inne --> */}
                    </div>
                    {/* <!-- //.top_menu_sub --> */}
                  </li>
                  <li>
                    <a href="#">WOMEN</a>
                    <div class="top_menu_sub">
                      <div class="top_menu_sub_inner">
                        <ul class="dep1">
                          <li>
                            <a href="#">BEST</a>
                          </li>
                          <li>
                            <a href="#">MD'S PICK</a>
                          </li>
                        </ul>
                        <ul class="dep2">
                          <li>
                            <a href="#">New</a>
                          </li>
                          <li>
                            <a href="#">Outer</a>
                          </li>
                          <li>
                            <a href="#">Top</a>
                          </li>
                          <li>
                            <a href="#">Pant</a>
                          </li>
                          <li>
                            <a href="#">Bag</a>
                          </li>
                        </ul>
                        <div class="top_menu_sub_inner_thumb">
                          <ul>
                            <li>
                              <a class="women" href="">
                                <div class="MenuSubInner">
                                  <p>우먼 크롭 럭비 맨투맨 그린</p>
                                  <span>
                                    79,000<strong>원</strong>
                                  </span>
                                </div>
                                {/* <!-- .MenuSubInner --> */}
                              </a>
                            </li>
                            <li>
                              <a class="women" href=""></a>
                              <div class="MenuSubInner">
                                <p>우먼 크롭 옥스포드 셔츠 화이트</p>
                                <span>
                                  79,000<strong>원</strong>
                                </span>
                              </div>
                              {/* <!-- .MenuSubInner --> */}
                            </li>
                            <li>
                              <a class="women" href=""></a>
                              <div class="MenuSubInner">
                                <p>우먼 빅 클로버 하트 기모 맨투맨 오트밀</p>
                                <span>
                                  79,000<strong>원</strong>
                                </span>
                              </div>
                              {/* <!-- .MenuSubInner --> */}
                            </li>
                          </ul>
                        </div>
                        {/* <!-- //.top_menu_sub_inner_thumb --> */}
                      </div>
                      {/* <!-- //.top_menu_sub_inne --> */}
                    </div>
                    {/* <!-- //.top_menu_sub --> */}
                  </li>
                  <li>
                    <a href="#">MEN</a>
                    <div class="top_menu_sub">
                      <div class="top_menu_sub_inner clearfix">
                        <ul class="dep1">
                          <li>
                            <a href="#">BEST</a>
                          </li>
                          <li>
                            <a href="#">MD'S PICK</a>
                          </li>
                        </ul>
                        <ul class="dep2">
                          <li>
                            <a href="#">New</a>
                          </li>
                          <li>
                            <a href="#">Outer</a>
                          </li>
                          <li>
                            <a href="#">Top</a>
                          </li>
                          <li>
                            <a href="#">Pant</a>
                          </li>
                          <li>
                            <a href="#">Bag</a>
                          </li>
                        </ul>
                        <div class="top_menu_sub_inner_thumb">
                          <ul>
                            <li>
                              <a class="men" href=""></a>
                              <div class="MenuSubInner">
                                <p>스몰 어센틱 로고 롱슬리브 피그먼트 차콜</p>
                                <span>
                                  55,000<strong>원</strong>
                                </span>
                              </div>
                              {/* <!-- .MenuSubInner --> */}
                            </li>
                            <li>
                              <a class="men" href=""></a>
                              <div class="MenuSubInner">
                                <p>빅 컬리지 C 로고 맨투맨 멜란지 그레이</p>
                                <span>
                                  69,000<strong>원</strong>
                                </span>
                              </div>
                              {/* <!-- .MenuSubInner --> */}
                            </li>
                            <li>
                              <a class="men" href=""></a>
                              <div class="MenuSubInner">
                                <p>C 로고 하프 집업 맨투맨 네이비</p>
                                <span>
                                  79,000<strong>원</strong>
                                </span>
                              </div>
                              {/* <!-- .MenuSubInner --> */}
                            </li>
                          </ul>
                        </div>
                        {/* <!-- //.top_menu_sub_inner_thumb --> */}
                      </div>
                      {/* <!-- //.top_menu_sub_inne --> */}
                    </div>
                    {/* <!-- //.top_menu_sub --> */}
                  </li>
                  <li>
                    <a href="#">COLLABORATION</a>
                    <div class="top_menu_sub">
                      <div class="top_menu_sub_inner clearfix">
                        <ul class="dep1">
                          <li>
                            <a href="#">BEST</a>
                          </li>
                          <li>
                            <a href="#">MD'S PICK</a>
                          </li>
                        </ul>
                        <ul class="dep2">
                          <li>
                            <a href="#">New</a>
                          </li>
                          <li>
                            <a href="#">Outer</a>
                          </li>
                          <li>
                            <a href="#">Top</a>
                          </li>
                          <li>
                            <a href="#">Pant</a>
                          </li>
                        </ul>
                        <div class="top_menu_sub_inner_thumb">
                          <ul>
                            <li>
                              <a class="men" href=""></a>
                              <div class="MenuSubInner">
                                <p>스몰 어센틱 로고 롱슬리브 피그먼트 차콜</p>
                                <span>
                                  44,000<strong>원</strong>
                                </span>
                              </div>
                              {/* <!-- .MenuSubInner --> */}
                            </li>
                            <li>
                              <a class="men" href=""></a>
                              <div class="MenuSubInner">
                                <p>빅 컬리지 C 로고 맨투맨 멜란지 그레이</p>
                                <span>
                                  62,100<strong>원</strong>
                                </span>
                              </div>
                              {/* <!-- .MenuSubInner --> */}
                            </li>
                            <li>
                              <a class="men" href=""></a>
                              <div class="MenuSubInner">
                                <p>C 로고 하프 집업 맨투맨 네이비</p>
                                <span>
                                  55,200<strong>원</strong>
                                </span>
                              </div>
                              {/* <!-- .MenuSubInner --> */}
                            </li>
                          </ul>
                        </div>
                        {/* <!-- //.top_menu_sub_inner_thumb --> */}
                      </div>
                      {/* <!-- //.top_menu_sub_inne --> */}
                    </div>
                    {/* <!-- //.top_menu_sub --> */}
                  </li>
                  <li>
                    <a href="#">COMMUNITY</a>
                    <div class="top_menu_sub">
                      <div class="top_menu_sub_inner clearfix">
                        <ul class="dep1">
                          <li>
                            <a href="#">BEST</a>
                          </li>
                          <li>
                            <a href="#">MD'S PICK</a>
                          </li>
                        </ul>
                        <ul class="dep2">
                          <li>
                            <a href="#">New</a>
                          </li>
                          <li>
                            <a href="#">Outer</a>
                          </li>
                          <li>
                            <a href="#">Top</a>
                          </li>
                          <li>
                            <a href="#">Pant</a>
                          </li>
                        </ul>
                        <div class="top_menu_sub_inner_thumb">
                          <ul>
                            <li>
                              <a class="men" href=""></a>
                              <div class="MenuSubInner">
                                <p>스몰 어센틱 로고 롱슬리브 피그먼트 차콜</p>
                                <span>
                                  44,000<strong>원</strong>
                                </span>
                              </div>
                              {/* <!-- .MenuSubInner --> */}
                            </li>
                            <li>
                              <a class="men" href=""></a>
                              <div class="MenuSubInner">
                                <p>빅 컬리지 C 로고 맨투맨 멜란지 그레이</p>
                                <span>
                                  62,100<strong>원</strong>
                                </span>
                              </div>
                              {/* <!-- .MenuSubInner --> */}
                            </li>
                            <li>
                              <a class="men" href=""></a>
                              <div class="MenuSubInner">
                                <p>C 로고 하프 집업 맨투맨 네이비</p>
                                <span>
                                  55,200<strong>원</strong>
                                </span>
                              </div>
                              {/* <!-- .MenuSubInner --> */}
                            </li>
                          </ul>
                        </div>
                        {/* <!-- //.top_menu_sub_inner_thumb --> */}
                      </div>
                      {/* <!-- //.top_menu_sub_inne --> */}
                    </div>
                    {/* <!-- //.top_menu_sub --> */}
                  </li>
                </ul>
              </div>
              {/* <!-- //top_menu --> */}
              <div id="top_member">
                <ul>
                  <li>
                    <a href="#">
                      <img src="img/mypageIcon.png" alt="mypage" />
                    </a>
                  </li>
                  <li>
                    <a href=".search_inner" class="click_btn">
                      <img src="img/searchIcon.png" alt="검색" />
                    </a>
                    {/* <!-- search sub 영역 --> */}
                    <div class="search_inner">
                      <div class="searchWrapper">
                        {/* <!-- //search_txt --> */}
                        <form action="">
                          <input type="search" class="searchBar" placeholder="search" onfocus="this.placeholder=''" onblur="this.placeholder='#신상품'" />
                          <input type="image" class="search_btn" src="img/search.png" />
                        </form>
                      </div>
                      {/* <!-- // .searchWrapper --> */}
                    </div>
                    {/* <!-- // .search_inner --> */}
                  </li>
                  <li>
                    <a href="#">
                      <img src="img/wish.png" alt="찜하기" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="img/cartIcon.png" alt="장바구니" />
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!-- //#top_memeber --> */}
            </div>
          </div>
          {/* <!--//#headerInner --> */}
          <div class="layer_shadow"></div>
        </header>

        <main>
          <div class="slideWrapper">
            <ul class="slider">
              <li>
                <a href="#">
                  <img src="img/p_22fall_03.jpg" alt="메인이미지1" title="1" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="img/p_22fall_03a.jpg" alt="메인이미지2" title="2" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="img/p_22fall_08a.jpg" alt="메인이미지4" title="4" />
                </a>
              </li>
            </ul>
          </div>
          {/* <!-- //.slideWrapper --> */}

          <div class="mainBanner">
            <h3 class="title">Event</h3>
            <div class="bannerImg">
              <a href="#">
                <img src="img/banner.jpg" alt="banner" />
                이번주, 주목해야할 특가 아이템
              </a>
              <a href="#">
                <img src="img/banner_2.gif" alt="banner2" />
                제품 구매시 20% 쿠폰을 드립니다.
              </a>
            </div>
            {/* <!-- //.bannerImg --> */}
          </div>
          {/* <!--//.mainBanner  --> */}

          <div class="main_section main_stylepick_section">
            <div class="stylepick itemInner">
              <h3 class="title">Collection</h3>
              <ul>
                <li>
                  <div class="box_inner">
                    <a class="thumbBox" href="#">
                      <img src="img/cl_1.jpg" alt="제품명" />
                    </a>
                    {/* <!-- 상품설명  --> */}
                    <div class="description">
                      <div class="name">
                        <a href="#">
                          <span>2022</span> Colorful Daily Life
                        </a>
                      </div>
                    </div>
                    {/* <!-- //.name --> */}
                  </div>
                </li>
                <li>
                  <div class="box_inner">
                    <a class="thumbBox" href="#">
                      <img src="img/cl_2.jpg" alt="제품명" />
                    </a>
                    {/* <!-- 상품설명  --> */}
                    <div class="description">
                      <div class="name">
                        <a href="#">
                          <span>2022</span> Befriend Covernat{" "}
                        </a>
                      </div>
                      {/* <!-- //.name --> */}
                    </div>
                  </div>
                </li>

                <li>
                  <div class="box_inner">
                    <a class="thumbBox" href="#">
                      <img src="img/cl_3.jpg" alt="제품명" />
                    </a>
                    {/* <!-- 상품설명  --> */}
                    <div class="description">
                      <div class="name">
                        <a href="#">
                          <span>2022</span> Covernatural
                        </a>
                      </div>
                    </div>
                    {/* <!-- //.name --> */}
                  </div>
                </li>
                <li>
                  <div class="box_inner">
                    <a class="thumbBox" href="#">
                      <img src="img/cl_4.jpg" alt="제품명" />
                    </a>
                    {/* <!-- 상품설명  --> */}
                    <div class="description">
                      <div class="name">
                        <a href="#">
                          <span>2022</span> Covernat Sports Club
                        </a>
                      </div>
                    </div>
                    {/* <!-- //.name --> */}
                  </div>
                </li>
                <li>
                  <div class="box_inner">
                    <a class="thumbBox" href="#">
                      <img src="img/cl_5.jpg" alt="제품명" />
                    </a>
                    {/* <!-- 상품설명  --> */}
                    <div class="description">
                      <div class="name">
                        <a href="#">
                          <span>2022</span> Fleece, Show Yourself
                        </a>
                      </div>
                    </div>
                    {/* <!-- //.name --> */}
                  </div>
                </li>
                <li>
                  <div class="box_inner">
                    <a class="thumbBox" href="#">
                      <img src="img/cl_6.jpg" alt="제품명" />
                    </a>
                    {/* <!-- 상품설명  --> */}
                    <div class="description">
                      <div class="name">
                        <a href="#">
                          <span>2022</span> Rediscover 'C' Lover
                        </a>
                      </div>
                    </div>
                    {/* <!-- //.name --> */}
                  </div>
                </li>
                <li>
                  <div class="box_inner">
                    <a class="thumbBox" href="#">
                      <img src="img/cl_7.jpg" alt="제품명" />
                    </a>
                    {/* <!-- 상품설명  --> */}
                    <div class="description">
                      <div class="name">
                        <a href="#">
                          <span>2022</span> Light Down
                        </a>
                      </div>
                    </div>
                    {/* <!-- //.name --> */}
                  </div>
                </li>
              </ul>
            </div>
            {/* <!-- .itemInner --> */}
          </div>
          {/* <!-- //.main_stylepick_section --> */}

          <div class="main_whatnew_section clearfix main_section">
            <h3 class="title">New Item</h3>
            <div class="itemInner">
              <ul>
                <li>
                  <div class="box_inner">
                    <a class="thumbBox" href="#">
                      <img src="img/new_pr.jpg" alt="제품명" />
                    </a>
                    {/* <!-- 상품설명  --> */}
                    <div class="description">
                      <div class="name">
                        <a href="#">숏 더플 코트 네이비</a>
                      </div>
                      <div class="priceBox">
                        <span class="price">239,000</span>
                      </div>
                      {/* <!-- //.priceBox --> */}
                      <div class="review">
                        <span>2건</span>
                      </div>
                      {/* <!-- //.review --> */}
                      <div class="wishIcon">
                        <a href="#"></a>
                      </div>
                      {/* <!-- wishIcon --> */}
                    </div>
                    {/* <!-- //.name --> */}
                  </div>
                </li>
                <li>
                  <div class="box_inner">
                    <a class="thumbBox" href="#">
                      <img src="img/new_pr2.jpg" alt="제품명" />
                    </a>
                    {/* <!-- 상품설명  --> */}
                    <div class="description">
                      <div class="name">
                        <a href="#">라운드 카라 하프 코트 브라운</a>
                      </div>
                      <div class="priceBox">
                        <span class="price">219,000</span>
                      </div>
                      {/* <!-- //.priceBox --> */}
                      <div class="review">
                        <span>1건</span>
                      </div>
                      {/* <!-- //.review --> */}
                      <div class="wishIcon">
                        <a href="#"></a>
                      </div>
                      {/* <!-- wishIcon --> */}
                    </div>
                    {/* <!-- //.name --> */}
                  </div>
                </li>
                <li>
                  <div class="box_inner">
                    <a class="thumbBox" href="#">
                      <img src="img/mew_pr4.jpg" alt="제품명" />
                    </a>
                    {/* <!-- 상품설명  --> */}
                    <div class="description">
                      <div class="name">
                        <a href="#">[예약발송 10/10] 카라 퀄팅 자켓 블랙</a>
                      </div>
                      <div class="priceBox">
                        <span class="price">169,000</span>
                      </div>
                      {/* <!-- //.priceBox --> */}
                      <div class="review">
                        <span>2건</span>
                      </div>
                      {/* <!-- //.review --> */}
                      <div class="wishIcon">
                        <a href="#"></a>
                      </div>
                      {/* <!-- wishIcon --> */}
                    </div>
                    {/* <!-- //.name --> */}
                  </div>
                </li>
                <li>
                  <div class="box_inner">
                    <a class="thumbBox" href="#">
                      <img src="img/new_pr4.jpg" alt="제품명" />
                    </a>
                    {/* <!-- 상품설명  --> */}
                    <div class="description">
                      <div class="name">
                        <a href="#">하프 집업 맨투맨 네이비</a>
                      </div>
                      <div class="priceBox">
                        <span class="price">79,000</span>
                      </div>
                      {/* <!-- //.priceBox --> */}
                      <div class="review">
                        <span>3건</span>
                      </div>
                      {/* <!-- //.review --> */}
                      <div class="wishIcon">
                        <a href="#"></a>
                      </div>
                      {/* <!-- wishIcon --> */}
                    </div>
                    {/* <!-- //.name --> */}
                  </div>
                </li>
              </ul>
            </div>
            {/* <!-- //.itemInner --> */}
          </div>
          {/* <!-- //.main_whatnew_section --> */}

          <div class="mainBanner clearfix">
            <div class="bannerImg"></div>
            {/* <!-- //.bannerImg --> */}
          </div>
          {/* <!--//.mainBanner  --> */}

          {/* <!--- best item ---> */}
          <div class="main_bestseller_section">
            <h3 class="title">Weekly Best</h3>
            {/* <!-- 탭 영역 --> */}
            <div class="main_bestseller_inner main_section">
              {/* <!-- 탭 메뉴 버튼 --> */}
              <input type="radio" name="bestseller" id="tap1" checked />
              <label class="tap1" for="tap1">
                Women
              </label>

              <input type="radio" name="bestseller" id="tap2" />
              <label class="tap2" for="tap2">
                Man
              </label>

              <input type="radio" name="bestseller" id="tap3" />
              <label class="tap3" for="tap3">
                Brand Bag
              </label>
              {/* <!-- 탭 상품영역 --> */}

              <div class="women_box tapInner itemInner">
                <ul>
                  <li>
                    <div class="box_inner">
                      <a class="thumbBox" href="#">
                        <img src="img/best_1.jpg" alt="제품명" />
                      </a>
                      <span class="rank">1</span>
                      <div class="description">
                        <div class="name">
                          <a href="#">(W) C 로고 맨투맨 라이트 그레이</a>
                        </div>
                        <div class="priceBox">
                          <span class="price">59,000</span>
                        </div>
                        <div class="review">
                          <span>리뷰 48건</span>
                        </div>
                        <div class="wishIcon">
                          <a href="#"></a>
                        </div>
                      </div>
                      {/* <!--inner--> */}
                    </div>
                  </li>
                  <li>
                    <div class="box_inner">
                      <a class="thumbBox" href="#">
                        <img src="img/best_2.jpg" alt="제품명" />
                      </a>
                      <span class="rank">2</span>
                      {/* <!-- 상품설명  --> */}
                      <div class="description">
                        <div class="name">
                          <a href="#">(W) 아플리케 아치 로고 후디 그레이</a>
                        </div>
                        <div class="priceBox">
                          <span class="price">85,000</span>
                        </div>
                        {/* <!-- //.priceBox --> */}
                        <div class="review">
                          <span>리뷰 51건</span>
                        </div>
                        {/* <!-- //.review --> */}
                        <div class="wishIcon">
                          <a href="#"></a>
                        </div>
                        {/* <!-- wishIcon --> */}
                      </div>
                      {/* <!-- //.name --> */}
                    </div>
                  </li>
                  <li>
                    <div class="box_inner">
                      <a class="thumbBox" href="#">
                        <img src="img/best_3.jpg" alt="제품명" />
                      </a>
                      <span class="rank">3</span>
                      {/* <!-- 상품설명  --> */}
                      <div class="description">
                        <div class="name">
                          <a href="#">(W) 서클 클로버 맨투맨 멜란지 그레이</a>
                        </div>
                        <div class="priceBox">
                          <span class="price">75,000</span>
                        </div>
                        {/* <!-- //.priceBox --> */}
                        <div class="review">
                          <span>리뷰 33건</span>
                        </div>
                        {/* <!-- //.review --> */}
                        <div class="wishIcon">
                          <a href="#"></a>
                        </div>
                        {/* <!-- wishIcon --> */}
                      </div>
                      {/* <!-- //.name --> */}
                    </div>
                  </li>
                  <li>
                    <div class="box_inner">
                      <a class="thumbBox" href="#">
                        <img src="img/best_4.jpg" alt="제품명" />
                      </a>
                      <span class="rank">4</span>
                      {/* <!-- 상품설명  --> */}
                      <div class="description">
                        <div class="name">
                          <a href="#">(W) CGC 루즈핏 피케 원피스 네이비</a>
                        </div>
                        <div class="priceBox">
                          <span class="price">89,000</span>
                        </div>
                        {/* <!-- //.priceBox --> */}
                        <div class="review">
                          <span>리뷰 8건</span>
                        </div>
                        {/* <!-- //.review --> */}
                        <div class="wishIcon">
                          <a href="#"></a>
                        </div>
                        {/* <!-- wishIcon --> */}
                      </div>
                      {/* <!-- //.name --> */}
                    </div>
                  </li>
                  <li>
                    <div class="box_inner">
                      <a class="thumbBox" href="#">
                        <img src="img/best_5.jpg" alt="제품명" />
                      </a>
                      <span class="rank">5</span>
                      {/* <!-- 상품설명  --> */}
                      <div class="description">
                        <div class="name">
                          <a href="#">(W) 아플리케 아치 로고 맨투맨 그레이</a>
                        </div>
                        <div class="priceBox">
                          <span class="price">75,000</span>
                        </div>
                        {/* <!-- //.priceBox --> */}
                        <div class="review">
                          <span>리뷰 29건</span>
                        </div>
                        {/* <!-- //.review --> */}
                        <div class="wishIcon">
                          <a href="#"></a>
                        </div>
                        {/* <!-- wishIcon --> */}
                      </div>
                      {/* <!-- //.name --> */}
                    </div>
                  </li>
                  <li>
                    <div class="box_inner">
                      <a class="thumbBox" href="#">
                        <img src="img/best_6.jpg" alt="제품명" />
                      </a>
                      <span class="rank">6</span>
                      {/* <!-- 상품설명  --> */}
                      <div class="description">
                        <div class="name">
                          <a href="#">(W) CGC 스웻 스커트 네이비</a>
                        </div>
                        <div class="priceBox">
                          <span class="price">59,000</span>
                        </div>
                        {/* <!-- //.priceBox --> */}
                        <div class="review">
                          <span>리뷰 5건</span>
                        </div>
                        {/* <!-- //.review --> */}
                        <div class="wishIcon">
                          <a href="#"></a>
                        </div>
                        {/* <!-- wishIcon --> */}
                      </div>
                      {/* <!-- //.name --> */}
                    </div>
                  </li>
                  <li>
                    <div class="box_inner">
                      <a class="thumbBox" href="#">
                        <img src="img/best_7.jpg" alt="제품명" />
                      </a>
                      <span class="rank">7</span>
                      {/* <!-- 상품설명  --> */}
                      <div class="description">
                        <div class="name">
                          <a href="#">(W) 빅 클로버 하트 기모 맨투맨 오트밀</a>
                        </div>
                        <div class="priceBox">
                          <span class="price">79,000</span>
                        </div>
                        {/* <!-- //.priceBox --> */}
                        <div class="review">
                          <span>리뷰 2건</span>
                        </div>
                        {/* <!-- //.review --> */}
                        <div class="wishIcon">
                          <a href="#"></a>
                        </div>
                        {/* <!-- wishIcon --> */}
                      </div>
                      {/* <!-- //.name --> */}
                    </div>
                  </li>
                  <li>
                    <div class="box_inner">
                      <a class="thumbBox" href="#">
                        <img src="img/best_8.jpg" alt="제품명" />
                      </a>
                      <span class="rank">8</span>
                      {/* <!-- 상품설명  --> */}
                      <div class="description">
                        <div class="name">
                          <a href="#">(W) 크롭 케이블 카라 니트 블루</a>
                        </div>
                        <div class="priceBox">
                          <span class="price">99,000</span>
                        </div>
                        {/* <!-- //.priceBox --> */}
                        <div class="review">
                          <span>리뷰 0건</span>
                        </div>
                        {/* <!-- //.review --> */}
                        <div class="wishIcon">
                          <a href="#"></a>
                        </div>
                        {/* <!-- wishIcon --> */}
                      </div>
                      {/* <!-- //.name --> */}
                    </div>
                  </li>
                </ul>
              </div>
              {/* <!--// women_box  --> */}

              <div class="man_box tapInner itemInner">
                <ul>
                  <li>
                    <div class="box_inner">
                      <a class="thumbBox" href="#">
                        <img src="img/m_best1.jpg" alt="제품명" />
                      </a>
                      <span class="rank">1</span>
                      {/* <!-- 상품설명  --> */}
                      <div class="description">
                        <div class="name">
                          <a href="#">(M)C 로고 맨투맨 네이비</a>
                        </div>
                        <div class="priceBox">
                          <span class="price">59,000</span>
                        </div>
                        {/* <!-- //.priceBox --> */}
                        <div class="review">
                          <span>리뷰 205건</span>
                        </div>
                        {/* <!-- //.review --> */}
                        <div class="wishIcon">
                          <a href="#"></a>
                        </div>
                        {/* <!-- wishIcon --> */}
                      </div>
                      {/* <!-- //.name --> */}
                    </div>
                  </li>
                  <li>
                    <div class="box_inner">
                      <a class="thumbBox" href="#">
                        <img src="img/m_best2.jpg" alt="제품명" />
                      </a>
                      <span class="rank">2</span>
                      {/* <!-- 상품설명  --> */}
                      <div class="description">
                        <div class="name">
                          <a href="#">(M)불독 아치 로고 맨투맨 헤더그레이</a>
                        </div>
                        <div class="priceBox">
                          <span class="price">69,000</span>
                        </div>
                        {/* <!-- //.priceBox --> */}
                        <div class="review">
                          <span>리뷰 166건</span>
                        </div>
                        {/* <!-- //.review --> */}
                        <div class="wishIcon">
                          <a href="#"></a>
                        </div>
                        {/* <!-- wishIcon --> */}
                      </div>
                      {/* <!-- //.name --> */}
                    </div>
                  </li>
                  <li>
                    <div class="box_inner">
                      <a class="thumbBox" href="#">
                        <img src="img/m_best3.jpg" alt="제품명" />
                      </a>
                      <span class="rank">3</span>
                      {/* <!-- 상품설명  --> */}
                      <div class="description">
                        <div class="name">
                          <a href="#">(M)어센틱 로고 후디 그레이</a>
                        </div>
                        <div class="priceBox">
                          <span class="price">79,000</span>
                        </div>
                        {/* <!-- //.priceBox --> */}
                        <div class="review">
                          <span>리뷰 234건</span>
                        </div>
                        {/* <!-- //.review --> */}
                        <div class="wishIcon">
                          <a href="#"></a>
                        </div>
                        {/* <!-- wishIcon --> */}
                      </div>
                      {/* <!-- //.name --> */}
                    </div>
                  </li>
                  <li>
                    <div class="box_inner">
                      <a class="thumbBox" href="#">
                        <img src="img/m_best_4.jpg" alt="제품명" />
                      </a>
                      <span class="rank">4</span>
                      {/* <!-- 상품설명  --> */}
                      <div class="description">
                        <div class="name">
                          <a href="#">(M)C 로고 옥스포드 스트라이프 셔츠 그레이</a>
                        </div>
                        <div class="priceBox">
                          <span class="price">79,000</span>
                        </div>
                        {/* <!-- //.priceBox --> */}
                        <div class="review">
                          <span>리뷰 63건</span>
                        </div>
                        {/* <!-- //.review --> */}
                        <div class="wishIcon">
                          <a href="#"></a>
                        </div>
                        {/* <!-- wishIcon --> */}
                      </div>
                      {/* <!-- //.name --> */}
                    </div>
                  </li>
                  <li>
                    <div class="box_inner">
                      <a class="thumbBox" href="#">
                        <img src="img/m_best5.jpg" alt="제품명" />
                      </a>
                      <span class="rank">5</span>
                      {/* <!-- 상품설명  --> */}
                      <div class="description">
                        <div class="name">
                          <a href="#">(M)스트라이프 럭비 맨투맨 네이비</a>
                        </div>
                        <div class="priceBox">
                          <span class="price">79,000</span>
                        </div>
                        {/* <!-- //.priceBox --> */}
                        <div class="review">
                          <span>리뷰 80건</span>
                        </div>
                        {/* <!-- //.review --> */}
                        <div class="wishIcon">
                          <a href="#"></a>
                        </div>
                        {/* <!-- wishIcon --> */}
                      </div>
                      {/* <!-- //.name --> */}
                    </div>
                  </li>
                  <li>
                    <div class="box_inner">
                      <a class="thumbBox" href="#">
                        <img src="img/m_best6.jpg" alt="제품명" />
                      </a>
                      <span class="rank">6</span>
                      {/* <!-- 상품설명  --> */}
                      <div class="description">
                        <div class="name">
                          <a href="#">(M)C 로고 하프 집업 맨투맨 멜란지 그레이</a>
                        </div>
                        <div class="priceBox">
                          <span class="price">69,000</span>
                        </div>
                        {/* <!-- //.priceBox --> */}
                        <div class="review">
                          <span>리뷰 41건</span>
                        </div>
                        {/* <!-- //.review --> */}
                        <div class="wishIcon">
                          <a href="#"></a>
                        </div>
                        {/* <!-- wishIcon --> */}
                      </div>
                      {/* <!-- //.name --> */}
                    </div>
                  </li>
                  <li>
                    <div class="box_inner">
                      <a class="thumbBox" href="#">
                        <img src="img/m_best7.jpg" alt="제품명" />
                      </a>
                      <span class="rank">7</span>
                      {/* <!-- 상품설명  --> */}
                      <div class="description">
                        <div class="name">
                          <a href="#">(M)베이직 니트 가디건 블랙</a>
                        </div>
                        <div class="priceBox">
                          <span class="price">89,000</span>
                        </div>
                        {/* <!-- //.priceBox --> */}
                        <div class="review">
                          <span>리뷰 43건</span>
                        </div>
                        {/* <!-- //.review --> */}
                        <div class="wishIcon">
                          <a href="#"></a>
                        </div>
                        {/* <!-- wishIcon --> */}
                      </div>
                      {/* <!-- //.name --> */}
                    </div>
                  </li>
                  <li>
                    <div class="box_inner">
                      <a class="thumbBox" href="#">
                        <img src="img/m_best_8.jpg" alt="제품명" />
                      </a>
                      <span class="rank">8</span>
                      {/* <!-- 상품설명  --> */}
                      <div class="description">
                        <div class="name">
                          <a href="#">(M)어센틱 로고 후디 라이트 그레이</a>
                        </div>
                        <div class="priceBox">
                          <span class="price">79,000</span>
                        </div>
                        {/* <!-- //.priceBox --> */}
                        <div class="review">
                          <span>리뷰 84건</span>
                        </div>
                        {/* <!-- //.review --> */}
                        <div class="wishIcon">
                          <a href="#"></a>
                        </div>
                        {/* <!-- wishIcon --> */}
                      </div>
                      {/* <!-- //.name --> */}
                    </div>
                  </li>
                </ul>
              </div>
              {/* <!--// man_box  --> */}

              <div class="Brand_Bag_box tapInner itemInner">
                <ul>
                  <li>
                    <div class="box_inner">
                      <a class="thumbBox" href="#">
                        <img src="img/bag_1.jpg" alt="제품명" />
                      </a>
                      <span class="rank">1</span>
                      {/* <!-- 상품설명  --> */}
                      <div class="description">
                        <div class="name">
                          <a href="#">어센틱 로고 럭색 27L 블랙</a>
                        </div>
                        <div class="priceBox">
                          <span class="price">89,000</span>
                        </div>
                        {/* <!-- //.priceBox --> */}
                        <div class="review">
                          <span>리뷰 295건</span>
                        </div>
                        {/* <!-- //.review --> */}
                        <div class="wishIcon">
                          <a href="#"></a>
                        </div>
                        {/* <!-- wishIcon --> */}
                      </div>
                      {/* <!-- //.name --> */}
                    </div>
                  </li>
                  <li>
                    <div class="box_inner">
                      <a class="thumbBox" href="#">
                        <img src="img/bag_2.jpg" alt="제품명" />
                      </a>
                      <span class="rank">2</span>
                      {/* <!-- 상품설명  --> */}
                      <div class="description">
                        <div class="name">
                          <a href="#">어센틱 메신저백 블랙</a>
                        </div>
                        <div class="priceBox">
                          <span class="price">79,000</span>
                        </div>
                        {/* <!-- //.priceBox --> */}
                        <div class="review">
                          <span>리뷰 53건</span>
                        </div>
                        {/* <!-- //.review --> */}
                        <div class="wishIcon">
                          <a href="#"></a>
                        </div>
                        {/* <!-- wishIcon --> */}
                      </div>
                      {/* <!-- //.name --> */}
                    </div>
                  </li>
                  <li>
                    <div class="box_inner">
                      <a class="thumbBox" href="#">
                        <img src="img/bag_3.jpg" alt="제품명" />
                      </a>
                      <span class="rank">3</span>
                      {/* <!-- 상품설명  --> */}
                      <div class="description">
                        <div class="name">
                          <a href="#">C 로고 투웨이 백 카키</a>
                        </div>
                        <div class="priceBox">
                          <span class="price">39,000</span>
                        </div>
                        {/* <!-- //.priceBox --> */}
                        <div class="review">
                          <span>리뷰 16건</span>
                        </div>
                        {/* <!-- //.review --> */}
                        <div class="wishIcon">
                          <a href="#"></a>
                        </div>
                        {/* <!-- wishIcon --> */}
                      </div>
                      {/* <!-- //.name --> */}
                    </div>
                  </li>
                  <li>
                    <div class="box_inner">
                      <a class="thumbBox" href="#">
                        <img src="img/bag_4.jpg" alt="제품명" />
                      </a>
                      <span class="rank">4</span>
                      {/* <!-- 상품설명  --> */}
                      <div class="description">
                        <div class="name">
                          <a href="#">뉴베이직 캔버스 백 블랙</a>
                        </div>
                        <div class="priceBox">
                          <span class="price">29,000</span>
                        </div>
                        {/* <!-- //.priceBox --> */}
                        <div class="review">
                          <span>리뷰 23건</span>
                        </div>
                        {/* <!-- //.review --> */}
                        <div class="wishIcon">
                          <a href="#"></a>
                        </div>
                        {/* <!-- wishIcon --> */}
                      </div>
                      {/* <!-- //.name --> */}
                    </div>
                  </li>
                  <li>
                    <div class="box_inner">
                      <a class="thumbBox" href="#">
                        <img src="img/bag_5.jpg" alt="제품명" />
                      </a>
                      <span class="rank">5</span>
                      {/* <!-- 상품설명  --> */}
                      <div class="description">
                        <div class="name">
                          <a href="#">MIL 레거시 백팩 블랙</a>
                        </div>
                        <div class="priceBox">
                          <span class="price">139,000</span>
                        </div>
                        {/* <!-- //.priceBox --> */}
                        <div class="review">
                          <span>리뷰 11건</span>
                        </div>
                        {/* <!-- //.review --> */}
                        <div class="wishIcon">
                          <a href="#"></a>
                        </div>
                        {/* <!-- wishIcon --> */}
                      </div>
                      {/* <!-- //.name --> */}
                    </div>
                  </li>
                  <li>
                    <div class="box_inner">
                      <a class="thumbBox" href="#">
                        <img src="img/bag_6.jpg" alt="제품명" />
                      </a>
                      <span class="rank">6</span>
                      {/* <!-- 상품설명  --> */}
                      <div class="description">
                        <div class="name">
                          <a href="#">어센틱 데님 투웨이 백 블랙</a>
                        </div>
                        <div class="priceBox">
                          <span class="price">45,000</span>
                        </div>
                        {/* <!-- //.priceBox --> */}
                        <div class="review">
                          <span>리뷰 19건</span>
                        </div>
                        {/* <!-- //.review --> */}
                        <div class="wishIcon">
                          <a href="#"></a>
                        </div>
                        {/* <!-- wishIcon --> */}
                      </div>
                      {/* <!-- //.name --> */}
                    </div>
                  </li>
                  <li>
                    <div class="box_inner">
                      <a class="thumbBox" href="#">
                        <img src="img/bag_7.jpg" alt="제품명" />
                      </a>
                      <span class="rank">7</span>
                      {/* <!-- 상품설명  --> */}
                      <div class="description">
                        <div class="name">
                          <a href="#">어센틱 3웨이 초크백 블랙</a>
                        </div>
                        <div class="priceBox">
                          <span class="price">49,000</span>
                        </div>
                        {/* <!-- //.priceBox --> */}
                        <div class="review">
                          <span>리뷰 10건</span>
                        </div>
                        {/* <!-- //.review --> */}
                        <div class="wishIcon">
                          <a href="#"></a>
                        </div>
                        {/* <!-- wishIcon --> */}
                      </div>
                      {/* <!-- //.name --> */}
                    </div>
                  </li>
                  <li>
                    <div class="box_inner">
                      <a class="thumbBox" href="#">
                        <img src="img/bag_8.jpg" alt="제품명" />
                      </a>
                      <span class="rank">8</span>
                      {/* <!-- 상품설명  --> */}
                      <div class="description">
                        <div class="name">
                          <a href="#">어센틱 타입1 백팩 블랙</a>
                        </div>
                        <div class="priceBox">
                          <span class="price">139,000</span>
                        </div>
                        {/* <!-- //.priceBox --> */}
                        <div class="review">
                          <span>리뷰 7건</span>
                        </div>
                        {/* <!-- //.review --> */}
                        <div class="wishIcon">
                          <a href="#"></a>
                        </div>
                        {/* <!-- wishIcon --> */}
                      </div>
                      {/* <!-- //.name --> */}
                    </div>
                  </li>
                </ul>
              </div>
              {/* <!--// Brand_Bag_box  --> */}
            </div>
            {/* <!-- //.main_bestseller_inner --> */}
          </div>
          {/* <!-- //.main_bestseller_section --> */}

          <div class="main_snap_section">
            <h3 class="title">Best review</h3>
            <div class="snapInner main_section">
              <ul>
                <li>
                  <div class="snapBox">
                    <a href="#">
                      <img src="img/rw_1.jpg" alt="인플루언서1" />
                      <div class="snap_o"></div>
                    </a>
                  </div>
                  {/* <!-- snapBox --> */}
                </li>
                <li>
                  <div class="snapBox">
                    <a href="#">
                      <img src="img/rw_2.jpg" alt="인플루언서1" />
                      <div class="snap_o"></div>
                    </a>
                  </div>
                  {/* <!-- snapBox --> */}
                </li>
                <li>
                  <div class="snapBox">
                    <a href="#">
                      <img src="img/rw_3.jpg" alt="인플루언서1" />
                      <div class="snap_o"></div>
                    </a>
                  </div>
                  {/* <!-- snapBox --> */}
                </li>
                <li>
                  <div class="snapBox">
                    <a href="#">
                      <img src="img/rw_4.jpg" alt="인플루언서1" />
                      <div class="snap_o"></div>
                    </a>
                  </div>
                  {/* <!-- snapBox --> */}
                </li>
                <li>
                  <div class="snapBox">
                    <a href="#">
                      <img src="img/rw_5.jpg" alt="인플루언서1" />
                      <div class="snap_o"></div>
                    </a>
                  </div>
                  {/* <!-- snapBox --> */}
                </li>
                <li>
                  <div class="snapBox">
                    <a href="#">
                      <img src="img/rw_6.jpg" alt="인플루언서1" />
                      <div class="snap_o"></div>
                    </a>
                  </div>
                  {/* <!-- snapBox --> */}
                </li>
                <li>
                  <div class="snapBox">
                    <a href="#">
                      <img src="img/rw_7.jpg" alt="인플루언서1" />
                      <div class="snap_o"></div>
                    </a>
                  </div>
                  {/* <!-- snapBox --> */}
                </li>
                <li>
                  <div class="snapBox">
                    <a href="#">
                      <img src="img/rw_8.jpg" alt="인플루언서1" />
                      <div class="snap_o"></div>
                    </a>
                  </div>
                  {/* <!-- snapBox --> */}
                </li>
                <li>
                  <div class="snapBox">
                    <a href="#">
                      <img src="img/rw_9.jpg" alt="인플루언서1" />
                      <div class="snap_o"></div>
                    </a>
                  </div>
                  {/* <!-- snapBox --> */}
                </li>
                <li>
                  <div class="snapBox">
                    <a href="#">
                      <img src="img/rw_10.jpg" alt="인플루언서1" />
                      <div class="snap_o"></div>
                    </a>
                  </div>
                  {/* <!-- snapBox --> */}
                </li>
                <li>
                  <div class="snapBox">
                    <a href="#">
                      <img src="img/rw_11.jpg" alt="인플루언서1" />
                      <div class="snap_o"></div>
                    </a>
                  </div>
                  {/* <!-- snapBox --> */}
                </li>
                <li>
                  <div class="snapBox">
                    <a href="#">
                      <img src="img/rw_12.jpg" alt="인플루언서1" />
                      <div class="snap_o"></div>
                    </a>
                  </div>
                  {/* <!-- snapBox --> */}
                </li>
              </ul>
            </div>
            {/* <!-- //.snapInner --> */}
          </div>
          {/* <!-- //. main_snap_section--> */}
        </main>

        <footer>
          <div class="footer_inner">
            <div class="footer_section02">
              <ul>
                <li>
                  <a href="#">공지사항</a>
                </li>
                <li>
                  <a href="#">이용약관</a>
                </li>
                <li>
                  <a href="#">개인정보취급방침</a>
                </li>
                <li>
                  <a href="#">자주묻는 질문</a>
                </li>
                <li>
                  <a href="#">브랜드 소개</a>
                </li>
                <li>
                  <a href="#">매장안내 </a>
                </li>
              </ul>
            </div>
            <div class="footerArea">
              <div class="footer_section01">
                <div class="bt_cscenter">
                  <div class="bt_cs">02-338-3316</div>
                  <div class="bt_time">평일 오전 9시~오후 6시 (주말, 공휴일 휴무)</div>
                </div>
                {/* <!-- //.bt_cscenter --> */}
                <div class="bt_info">
                  (주) 비케이브
                  <span></span>
                  대표이사 Covernat
                  <span></span>
                  사업자등록번호 261-81-17293
                  <span></span>
                  통신판매업 신고번호 제 2020-서울마포-4143호
                  <br />
                  서울특별시 마포구 잔다리로 24, 5층 (서교동) [24, Jandari-ro Mapo-gu Seoul, Republic of Korea]
                  <br />
                  개인정보 보호책임자 Covernat
                  <span></span>
                  email covernat@bcave.co.kr
                </div>
                <div class="bt_sns">
                  <a herf="#">
                    <img src="img/SNS.png" alt="페이스북" />
                  </a>
                  <a herf="#">
                    <img src="img/SNS1.png" alt="인스타그램" />
                  </a>
                  <a herf="#">
                    <img src="img/SNS2.png" alt="유튜브" />
                  </a>
                  <a herf="#">
                    <img src="img/SNS3.png" alt="네이버" />
                  </a>
                </div>
                {/* <!--//.bt_sns  --> */}
              </div>
              {/* <!-- //footer_section01 --> */}
              <div class="footer_section03">Copyright &copy; B.Cave All Right Reserved.</div>
              {/* <!-- //.footer_section03 --> */}
            </div>
            {/* <!-- //.footerArea --> */}
          </div>
          {/* <!-- //footer_inner --> */}
        </footer>
      </body>
    </>
  )
}
