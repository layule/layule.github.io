import * as React from "react"
import * as jQuery from "jquery"
import Swiper from "swiper"
import "/src/styles/covernet/reset.css"
import "/src/styles/covernet/style.scss"
import "/src/styles/covernet/font.css"
import {
  bag1,
  bag2,
  bag3,
  bag4,
  bag5,
  bag6,
  bag7,
  bag8,
  banner,
  banner2,
  best1,
  best2,
  best3,
  best4,
  best5,
  best6,
  best7,
  best8,
  cartIcon,
  cl1,
  cl2,
  cl3,
  cl4,
  cl5,
  cl6,
  cl7,
  logo,
  mBest1,
  mBest2,
  mBest3,
  mBest4,
  mBest5,
  mBest6,
  mBest7,
  mBest8,
  myPageIcon,
  newPr,
  newPr2,
  newPr3,
  newPr4,
  p22Fall03,
  p22Fall03a,
  p22Fall08a,
  rw1,
  rw10,
  rw11,
  rw12,
  rw2,
  rw3,
  rw4,
  rw5,
  rw6,
  rw7,
  rw8,
  rw9,
  searchIcon,
  SNS,
  SNS1,
  SNS2,
  SNS3,
  wish,
} from "../images/covernet"
import { initClickToGiveClass } from "../module/clickToGiveClass"
import { initSlideToGiveClass } from "../module/slideToGiveClass"
import { initBxSlider } from "../module/bxSlider"

export default function Component() {
  const script = () => {
    ;(function ($) {
      $(function () {
        // $('.slider').slidy({
        // 	width:2000,
        // 	height: 880,
        // 	children: 'li',
        // 	Animation: 'fade'
        // });<---slidy 구문은 지워 안씀!!

        $("#headerInner").scrollToGiveClass({
          baseline: 90,
          class: "header_fix",
        })

        $(".slider").bxSlider({
          auto: true, //자동재생
          nextText: "",
          prevText: "", //버튼은 가급적이면 이미지로!!!'<' , '>'  <---쓰지말장
        })

        $(".stylepick > ul").bxSlider({
          auto: true,
          maxSlides: 4, //한 번에 보여줄 슬라이드 수(기본값 1)
          slideWidth: 480, // 슬라이드 하나의 너비값 (px생략가능)
          moveSlides: 1, //움직일 슬라이드의 갯수
          speed: 400, //슬라이드끼리 전환될때 걸리는 시간(0.7초)
          pause: 4000, //정지된 슬라이드가 유지되는 시간
          controls: false, //(<prev, next>)false: 컨트롤 삭제 /true: 컨트롤 노출(기본값)
        })

        $(".click_btn").clickToGiveClass({
          class: "view",
          addTarget: "#headerInner, .layer_shadow",
        })
      })
    })(jQuery)
  }

  React.useEffect(() => {
    initSlideToGiveClass()
    initClickToGiveClass()
    initBxSlider()
    script()
  }, [])

  return (
    <>
      {/* <!-- favicon--> */}
      {/* <link rel="shortcut icon" href={bsFavicon} /> */}
      {/* <!-- 플러그인 연결 --> */}
      <link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css" />

      <script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
      <body className="covernetpage">
        <header>
          <div id="headerInner" className="header_fix">
            <div className="headerArea">
              <div id="co_logo">
                <h1>
                  <a href="header">
                    <img src={logo} alt="로고" />
                  </a>
                </h1>
              </div>
              {/* <!--// #logo --> */}
              <div id="top_menu">
                <ul className="top_menu">
                  <li>
                    <a href="#">SALE</a>
                    <div className="top_menu_sub">
                      <div className="top_menu_sub_inner">
                        <ul className="dep1">
                          <li>
                            <a href="#">Women</a>
                          </li>
                          <li>
                            <a href="#">Men</a>
                          </li>
                        </ul>
                        <ul className="dep2">
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
                        <div className="top_menu_sub_inner_thumb">
                          <ul>
                            <li>
                              <a href="#">
                                <div className="MenuSubInner">
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
                              <div className="MenuSubInner">
                                <p>피그먼트 스몰 어센틱 로고 티셔츠 차콜</p>
                                <span>
                                  27,000<strong>원</strong>
                                </span>
                              </div>
                              {/* <!-- .MenuSubInner --> */}
                            </li>
                            <li>
                              <a href=""></a>
                              <div className="MenuSubInner">
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
                    <div className="top_menu_sub">
                      <div className="top_menu_sub_inner">
                        <ul className="dep1">
                          <li>
                            <a href="#">BEST</a>
                          </li>
                          <li>
                            <a href="#">MD'S PICK</a>
                          </li>
                        </ul>
                        <ul className="dep2">
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
                        <div className="top_menu_sub_inner_thumb">
                          <ul>
                            <li>
                              <a className="best" href="">
                                <div className="MenuSubInner">
                                  <p>프레피 럭비 맨투맨 네이비</p>
                                  <span>
                                    79,000<strong>원</strong>
                                  </span>
                                </div>
                                {/* <!-- .MenuSubInner --> */}
                              </a>
                            </li>
                            <li>
                              <a className="best" href=""></a>
                              <div className="MenuSubInner">
                                <p>빅 로고 트랙 자켓 블랙</p>
                                <span>
                                  119,000<strong>원</strong>
                                </span>
                              </div>
                              {/* <!-- .MenuSubInner --> */}
                            </li>
                            <li>
                              <a className="best" href=""></a>
                              <div className="MenuSubInner">
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
                    <div className="top_menu_sub">
                      <div className="top_menu_sub_inner">
                        <ul className="dep1">
                          <li>
                            <a href="#">BEST</a>
                          </li>
                          <li>
                            <a href="#">MD'S PICK</a>
                          </li>
                        </ul>
                        <ul className="dep2">
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
                        <div className="top_menu_sub_inner_thumb">
                          <ul>
                            <li>
                              <a className="women" href="">
                                <div className="MenuSubInner">
                                  <p>우먼 크롭 럭비 맨투맨 그린</p>
                                  <span>
                                    79,000<strong>원</strong>
                                  </span>
                                </div>
                                {/* <!-- .MenuSubInner --> */}
                              </a>
                            </li>
                            <li>
                              <a className="women" href=""></a>
                              <div className="MenuSubInner">
                                <p>우먼 크롭 옥스포드 셔츠 화이트</p>
                                <span>
                                  79,000<strong>원</strong>
                                </span>
                              </div>
                              {/* <!-- .MenuSubInner --> */}
                            </li>
                            <li>
                              <a className="women" href=""></a>
                              <div className="MenuSubInner">
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
                    <div className="top_menu_sub">
                      <div className="top_menu_sub_inner clearfix">
                        <ul className="dep1">
                          <li>
                            <a href="#">BEST</a>
                          </li>
                          <li>
                            <a href="#">MD'S PICK</a>
                          </li>
                        </ul>
                        <ul className="dep2">
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
                        <div className="top_menu_sub_inner_thumb">
                          <ul>
                            <li>
                              <a className="men" href=""></a>
                              <div className="MenuSubInner">
                                <p>스몰 어센틱 로고 롱슬리브 피그먼트 차콜</p>
                                <span>
                                  55,000<strong>원</strong>
                                </span>
                              </div>
                              {/* <!-- .MenuSubInner --> */}
                            </li>
                            <li>
                              <a className="men" href=""></a>
                              <div className="MenuSubInner">
                                <p>빅 컬리지 C 로고 맨투맨 멜란지 그레이</p>
                                <span>
                                  69,000<strong>원</strong>
                                </span>
                              </div>
                              {/* <!-- .MenuSubInner --> */}
                            </li>
                            <li>
                              <a className="men" href=""></a>
                              <div className="MenuSubInner">
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
                    <div className="top_menu_sub">
                      <div className="top_menu_sub_inner clearfix">
                        <ul className="dep1">
                          <li>
                            <a href="#">BEST</a>
                          </li>
                          <li>
                            <a href="#">MD'S PICK</a>
                          </li>
                        </ul>
                        <ul className="dep2">
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
                        <div className="top_menu_sub_inner_thumb">
                          <ul>
                            <li>
                              <a className="men" href=""></a>
                              <div className="MenuSubInner">
                                <p>스몰 어센틱 로고 롱슬리브 피그먼트 차콜</p>
                                <span>
                                  44,000<strong>원</strong>
                                </span>
                              </div>
                              {/* <!-- .MenuSubInner --> */}
                            </li>
                            <li>
                              <a className="men" href=""></a>
                              <div className="MenuSubInner">
                                <p>빅 컬리지 C 로고 맨투맨 멜란지 그레이</p>
                                <span>
                                  62,100<strong>원</strong>
                                </span>
                              </div>
                              {/* <!-- .MenuSubInner --> */}
                            </li>
                            <li>
                              <a className="men" href=""></a>
                              <div className="MenuSubInner">
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
                    <div className="top_menu_sub">
                      <div className="top_menu_sub_inner clearfix">
                        <ul className="dep1">
                          <li>
                            <a href="#">BEST</a>
                          </li>
                          <li>
                            <a href="#">MD'S PICK</a>
                          </li>
                        </ul>
                        <ul className="dep2">
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
                        <div className="top_menu_sub_inner_thumb">
                          <ul>
                            <li>
                              <a className="men" href=""></a>
                              <div className="MenuSubInner">
                                <p>스몰 어센틱 로고 롱슬리브 피그먼트 차콜</p>
                                <span>
                                  44,000<strong>원</strong>
                                </span>
                              </div>
                              {/* <!-- .MenuSubInner --> */}
                            </li>
                            <li>
                              <a className="men" href=""></a>
                              <div className="MenuSubInner">
                                <p>빅 컬리지 C 로고 맨투맨 멜란지 그레이</p>
                                <span>
                                  62,100<strong>원</strong>
                                </span>
                              </div>
                              {/* <!-- .MenuSubInner --> */}
                            </li>
                            <li>
                              <a className="men" href=""></a>
                              <div className="MenuSubInner">
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
                      <img src={myPageIcon} alt="mypage" />
                    </a>
                  </li>
                  <li>
                    <a href=".search_inner" className="click_btn">
                      <img src={searchIcon} alt="검색" />
                    </a>
                    {/* <!-- search sub 영역 --> */}
                    <div className="search_inner">
                      <div className="searchWrapper">
                        {/* <!-- //search_txt --> */}
                        <form action="">
                          <input type="search" className="searchBar" placeholder="search" onfocus="this.placeholder=''" onblur="this.placeholder='#신상품'" />
                          <input type="image" className="search_btn" src="img/search.png" />
                        </form>
                      </div>
                      {/* <!-- // .searchWrapper --> */}
                    </div>
                    {/* <!-- // .search_inner --> */}
                  </li>
                  <li>
                    <a href="#">
                      <img src={wish} alt="찜하기" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={cartIcon} alt="장바구니" />
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!-- //#top_memeber --> */}
            </div>
          </div>
          {/* <!--//#headerInner --> */}
          <div className="layer_shadow"></div>
        </header>

        <main>
          <section className="slideWrapper">
            <ul className="slider">
              <li>
                <a href="#">
                  <img src={p22Fall03} alt="메인이미지1" title="1" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={p22Fall03a} alt="메인이미지2" title="2" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={p22Fall08a} alt="메인이미지4" title="4" />
                </a>
              </li>
            </ul>
          </section>
          {/* <!-- //.slideWrapper --> */}
          <div className="mainBanner clearfix">
            <div className="bannerImg"></div>
            {/* <!-- //.bannerImg --> */}
            <div className="mainBanner clearfix">
              <div className="bannerImg"></div>
              {/* <!-- //.bannerImg --> */}
            </div>
            {/* <!--//.mainBanner  --> */}
          </div>
          {/* <!--//.mainBanner  --> */}
          <div className="main_section main_stylepick_section">
            <div className="stylepick itenInner">
              <h3 className="title">Collection</h3>
              <ul>
                <li>
                  <div className="box_inner">
                    <a className="thumbBox" href="#">
                      <img src={cl1} alt="제품명" />
                    </a>
                    {/* <!-- 상품설명  --> */}
                    <div className="description">
                      <div className="name">
                        <a href="#">
                          <span>2022</span> Colorful Daily Life
                        </a>
                      </div>
                    </div>
                    {/* <!-- //.name --> */}
                  </div>
                </li>
                <li>
                  <div className="box_inner">
                    <a className="thumbBox" href="#">
                      <img src={cl2} alt="제품명" />
                    </a>
                    {/* <!-- 상품설명  --> */}
                    <div className="description">
                      <div className="name">
                        <a href="#">
                          <span>2022</span> Befriend Covernat{" "}
                        </a>
                      </div>
                      {/* <!-- //.name --> */}
                    </div>
                  </div>
                </li>

                <li>
                  <div className="box_inner">
                    <a className="thumbBox" href="#">
                      <img src={cl3} alt="제품명" />
                    </a>
                    {/* <!-- 상품설명  --> */}
                    <div className="description">
                      <div className="name">
                        <a href="#">
                          <span>2022</span> Covernatural
                        </a>
                      </div>
                    </div>
                    {/* <!-- //.name --> */}
                  </div>
                </li>
                <li>
                  <div className="box_inner">
                    <a className="thumbBox" href="#">
                      <img src={cl4} alt="제품명" />
                    </a>
                    {/* <!-- 상품설명  --> */}
                    <div className="description">
                      <div className="name">
                        <a href="#">
                          <span>2022</span> Covernat Sports Club
                        </a>
                      </div>
                    </div>
                    {/* <!-- //.name --> */}
                  </div>
                </li>
                <li>
                  <div className="box_inner">
                    <a className="thumbBox" href="#">
                      <img src={cl5} alt="제품명" />
                    </a>
                    {/* <!-- 상품설명  --> */}
                    <div className="description">
                      <div className="name">
                        <a href="#">
                          <span>2022</span> Fleece, Show Yourself
                        </a>
                      </div>
                    </div>
                    {/* <!-- //.name --> */}
                  </div>
                </li>
                <li>
                  <div className="box_inner">
                    <a className="thumbBox" href="#">
                      <img src={cl6} alt="제품명" />
                    </a>
                    {/* <!-- 상품설명  --> */}
                    <div className="description">
                      <div className="name">
                        <a href="#">
                          <span>2022</span> Rediscover 'C' Lover
                        </a>
                      </div>
                    </div>
                    {/* <!-- //.name --> */}
                  </div>
                </li>
                <li>
                  <div className="box_inner">
                    <a className="thumbBox" href="#">
                      <img src={cl7} alt="제품명" />
                    </a>
                    {/* <!-- 상품설명  --> */}
                    <div className="description">
                      <div className="name">
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

          <div className="main_whatnew_section clearfix main_section">
            <h3 className="title">New Item</h3>
            <div className="itemInner">
              <ul>
                <li>
                  <div className="box_inner">
                    <a className="thumbBox" href="#">
                      <img src={newPr} alt="제품명" />
                    </a>
                    {/* <!-- 상품설명  --> */}
                    <div className="description">
                      <div className="name">
                        <a href="#">숏 더플 코트 네이비</a>
                      </div>
                      <div className="priceBox">
                        <span className="price">239,000</span>
                      </div>
                      {/* <!-- //.priceBox --> */}
                      <div className="review">
                        <span>2건</span>
                      </div>
                      {/* <!-- //.review --> */}
                      <div className="wishIcon">
                        <a href="#"></a>
                      </div>
                      {/* <!-- wishIcon --> */}
                    </div>
                    {/* <!-- //.name --> */}
                  </div>
                </li>
                <li>
                  <div className="box_inner">
                    <a className="thumbBox" href="#">
                      <img src={newPr2} alt="제품명" />
                    </a>
                    {/* <!-- 상품설명  --> */}
                    <div className="description">
                      <div className="name">
                        <a href="#">라운드 카라 하프 코트 브라운</a>
                      </div>
                      <div className="priceBox">
                        <span className="price">219,000</span>
                      </div>
                      {/* <!-- //.priceBox --> */}
                      <div className="review">
                        <span>1건</span>
                      </div>
                      {/* <!-- //.review --> */}
                      <div className="wishIcon">
                        <a href="#"></a>
                      </div>
                      {/* <!-- wishIcon --> */}
                    </div>
                    {/* <!-- //.name --> */}
                  </div>
                </li>
                <li>
                  <div className="box_inner">
                    <a className="thumbBox" href="#">
                      <img src={newPr3} alt="제품명" />
                    </a>
                    {/* <!-- 상품설명  --> */}
                    <div className="description">
                      <div className="name">
                        <a href="#">[예약발송 10/10] 카라 퀄팅 자켓 블랙</a>
                      </div>
                      <div className="priceBox">
                        <span className="price">169,000</span>
                      </div>
                      {/* <!-- //.priceBox --> */}
                      <div className="review">
                        <span>2건</span>
                      </div>
                      {/* <!-- //.review --> */}
                      <div className="wishIcon">
                        <a href="#"></a>
                      </div>
                      {/* <!-- wishIcon --> */}
                    </div>
                    {/* <!-- //.name --> */}
                  </div>
                </li>
                <li>
                  <div className="box_inner">
                    <a className="thumbBox" href="#">
                      <img src={newPr4} alt="제품명" />
                    </a>
                    {/* <!-- 상품설명  --> */}
                    <div className="description">
                      <div className="name">
                        <a href="#">하프 집업 맨투맨 네이비</a>
                      </div>
                      <div className="priceBox">
                        <span className="price">79,000</span>
                      </div>
                      {/* <!-- //.priceBox --> */}
                      <div className="review">
                        <span>3건</span>
                      </div>
                      {/* <!-- //.review --> */}
                      <div className="wishIcon">
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

          <div className="mainBanner clearfix">
            <div className="bannerImg"></div>
            {/* <!-- //.bannerImg --> */}
          </div>
          {/* <!--//.mainBanner  --> */}

          {/* <!--- best item ---> */}
          <div className="main_bestseller_section">
            <h3 className="title">Weekly Best</h3>
            {/* <!-- 탭 영역 --> */}
            <div className="main_bestseller_inner main_section">
              {/* <!-- 탭 메뉴 버튼 --> */}
              <input type="radio" name="bestseller" id="tap1" checked />
              <label className="tap1" for="tap1">
                Women
              </label>

              <input type="radio" name="bestseller" id="tap2" />
              <label className="tap2" for="tap2">
                Man
              </label>

              <input type="radio" name="bestseller" id="tap3" />
              <label className="tap3" for="tap3">
                Brand Bag
              </label>
              {/* <!-- 탭 상품영역 --> */}

              <div className="women_box tapInner itemInner">
                <ul>
                  <li>
                    <div className="box_inner">
                      <a className="thumbBox" href="#">
                        <img src={best1} alt="제품명" />
                      </a>
                      <span className="rank">1</span>
                      <div className="description">
                        <div className="name">
                          <a href="#">(W) C 로고 맨투맨 라이트 그레이</a>
                        </div>
                        <div className="priceBox">
                          <span className="price">59,000</span>
                        </div>
                        <div className="review">
                          <span>리뷰 48건</span>
                        </div>
                        <div className="wishIcon">
                          <a href="#"></a>
                        </div>
                      </div>
                      {/* <!--inner--> */}
                    </div>
                  </li>
                  <li>
                    <div className="box_inner">
                      <a className="thumbBox" href="#">
                        <img src={best2} alt="제품명" />
                      </a>
                      <span className="rank">2</span>
                      {/* <!-- 상품설명  --> */}
                      <div className="description">
                        <div className="name">
                          <a href="#">(W) 아플리케 아치 로고 후디 그레이</a>
                        </div>
                        <div className="priceBox">
                          <span className="price">85,000</span>
                        </div>
                        {/* <!-- //.priceBox --> */}
                        <div className="review">
                          <span>리뷰 51건</span>
                        </div>
                        {/* <!-- //.review --> */}
                        <div className="wishIcon">
                          <a href="#"></a>
                        </div>
                        {/* <!-- wishIcon --> */}
                      </div>
                      {/* <!-- //.name --> */}
                    </div>
                  </li>
                  <li>
                    <div className="box_inner">
                      <a className="thumbBox" href="#">
                        <img src={best3} alt="제품명" />
                      </a>
                      <span className="rank">3</span>
                      {/* <!-- 상품설명  --> */}
                      <div className="description">
                        <div className="name">
                          <a href="#">(W) 서클 클로버 맨투맨 멜란지 그레이</a>
                        </div>
                        <div className="priceBox">
                          <span className="price">75,000</span>
                        </div>
                        {/* <!-- //.priceBox --> */}
                        <div className="review">
                          <span>리뷰 33건</span>
                        </div>
                        {/* <!-- //.review --> */}
                        <div className="wishIcon">
                          <a href="#"></a>
                        </div>
                        {/* <!-- wishIcon --> */}
                      </div>
                      {/* <!-- //.name --> */}
                    </div>
                  </li>
                  <li>
                    <div className="box_inner">
                      <a className="thumbBox" href="#">
                        <img src={best4} alt="제품명" />
                      </a>
                      <span className="rank">4</span>
                      {/* <!-- 상품설명  --> */}
                      <div className="description">
                        <div className="name">
                          <a href="#">(W) CGC 루즈핏 피케 원피스 네이비</a>
                        </div>
                        <div className="priceBox">
                          <span className="price">89,000</span>
                        </div>
                        {/* <!-- //.priceBox --> */}
                        <div className="review">
                          <span>리뷰 8건</span>
                        </div>
                        {/* <!-- //.review --> */}
                        <div className="wishIcon">
                          <a href="#"></a>
                        </div>
                        {/* <!-- wishIcon --> */}
                      </div>
                      {/* <!-- //.name --> */}
                    </div>
                  </li>
                  <li>
                    <div className="box_inner">
                      <a className="thumbBox" href="#">
                        <img src={best5} alt="제품명" />
                      </a>
                      <span className="rank">5</span>
                      {/* <!-- 상품설명  --> */}
                      <div className="description">
                        <div className="name">
                          <a href="#">(W) 아플리케 아치 로고 맨투맨 그레이</a>
                        </div>
                        <div className="priceBox">
                          <span className="price">75,000</span>
                        </div>
                        {/* <!-- //.priceBox --> */}
                        <div className="review">
                          <span>리뷰 29건</span>
                        </div>
                        {/* <!-- //.review --> */}
                        <div className="wishIcon">
                          <a href="#"></a>
                        </div>
                        {/* <!-- wishIcon --> */}
                      </div>
                      {/* <!-- //.name --> */}
                    </div>
                  </li>
                  <li>
                    <div className="box_inner">
                      <a className="thumbBox" href="#">
                        <img src={best6} alt="제품명" />
                      </a>
                      <span className="rank">6</span>
                      {/* <!-- 상품설명  --> */}
                      <div className="description">
                        <div className="name">
                          <a href="#">(W) CGC 스웻 스커트 네이비</a>
                        </div>
                        <div className="priceBox">
                          <span className="price">59,000</span>
                        </div>
                        {/* <!-- //.priceBox --> */}
                        <div className="review">
                          <span>리뷰 5건</span>
                        </div>
                        {/* <!-- //.review --> */}
                        <div className="wishIcon">
                          <a href="#"></a>
                        </div>
                        {/* <!-- wishIcon --> */}
                      </div>
                      {/* <!-- //.name --> */}
                    </div>
                  </li>
                  <li>
                    <div className="box_inner">
                      <a className="thumbBox" href="#">
                        <img src={best7} alt="제품명" />
                      </a>
                      <span className="rank">7</span>
                      {/* <!-- 상품설명  --> */}
                      <div className="description">
                        <div className="name">
                          <a href="#">(W) 빅 클로버 하트 기모 맨투맨 오트밀</a>
                        </div>
                        <div className="priceBox">
                          <span className="price">79,000</span>
                        </div>
                        {/* <!-- //.priceBox --> */}
                        <div className="review">
                          <span>리뷰 2건</span>
                        </div>
                        {/* <!-- //.review --> */}
                        <div className="wishIcon">
                          <a href="#"></a>
                        </div>
                        {/* <!-- wishIcon --> */}
                      </div>
                      {/* <!-- //.name --> */}
                    </div>
                  </li>
                  <li>
                    <div className="box_inner">
                      <a className="thumbBox" href="#">
                        <img src={best8} alt="제품명" />
                      </a>
                      <span className="rank">8</span>
                      {/* <!-- 상품설명  --> */}
                      <div className="description">
                        <div className="name">
                          <a href="#">(W) 크롭 케이블 카라 니트 블루</a>
                        </div>
                        <div className="priceBox">
                          <span className="price">99,000</span>
                        </div>
                        {/* <!-- //.priceBox --> */}
                        <div className="review">
                          <span>리뷰 0건</span>
                        </div>
                        {/* <!-- //.review --> */}
                        <div className="wishIcon">
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

              <div className="man_box tapInner itemInner">
                <ul>
                  <li>
                    <div className="box_inner">
                      <a className="thumbBox" href="#">
                        <img src={mBest1} alt="제품명" />
                      </a>
                      <span className="rank">1</span>
                      {/* <!-- 상품설명  --> */}
                      <div className="description">
                        <div className="name">
                          <a href="#">(M)C 로고 맨투맨 네이비</a>
                        </div>
                        <div className="priceBox">
                          <span className="price">59,000</span>
                        </div>
                        {/* <!-- //.priceBox --> */}
                        <div className="review">
                          <span>리뷰 205건</span>
                        </div>
                        {/* <!-- //.review --> */}
                        <div className="wishIcon">
                          <a href="#"></a>
                        </div>
                        {/* <!-- wishIcon --> */}
                      </div>
                      {/* <!-- //.name --> */}
                    </div>
                  </li>
                  <li>
                    <div className="box_inner">
                      <a className="thumbBox" href="#">
                        <img src={mBest2} alt="제품명" />
                      </a>
                      <span className="rank">2</span>
                      {/* <!-- 상품설명  --> */}
                      <div className="description">
                        <div className="name">
                          <a href="#">(M)불독 아치 로고 맨투맨 헤더그레이</a>
                        </div>
                        <div className="priceBox">
                          <span className="price">69,000</span>
                        </div>
                        {/* <!-- //.priceBox --> */}
                        <div className="review">
                          <span>리뷰 166건</span>
                        </div>
                        {/* <!-- //.review --> */}
                        <div className="wishIcon">
                          <a href="#"></a>
                        </div>
                        {/* <!-- wishIcon --> */}
                      </div>
                      {/* <!-- //.name --> */}
                    </div>
                  </li>
                  <li>
                    <div className="box_inner">
                      <a className="thumbBox" href="#">
                        <img src={mBest3} alt="제품명" />
                      </a>
                      <span className="rank">3</span>
                      {/* <!-- 상품설명  --> */}
                      <div className="description">
                        <div className="name">
                          <a href="#">(M)어센틱 로고 후디 그레이</a>
                        </div>
                        <div className="priceBox">
                          <span className="price">79,000</span>
                        </div>
                        {/* <!-- //.priceBox --> */}
                        <div className="review">
                          <span>리뷰 234건</span>
                        </div>
                        {/* <!-- //.review --> */}
                        <div className="wishIcon">
                          <a href="#"></a>
                        </div>
                        {/* <!-- wishIcon --> */}
                      </div>
                      {/* <!-- //.name --> */}
                    </div>
                  </li>
                  <li>
                    <div className="box_inner">
                      <a className="thumbBox" href="#">
                        <img src={mBest4} alt="제품명" />
                      </a>
                      <span className="rank">4</span>
                      {/* <!-- 상품설명  --> */}
                      <div className="description">
                        <div className="name">
                          <a href="#">(M)C 로고 옥스포드 스트라이프 셔츠 그레이</a>
                        </div>
                        <div className="priceBox">
                          <span className="price">79,000</span>
                        </div>
                        {/* <!-- //.priceBox --> */}
                        <div className="review">
                          <span>리뷰 63건</span>
                        </div>
                        {/* <!-- //.review --> */}
                        <div className="wishIcon">
                          <a href="#"></a>
                        </div>
                        {/* <!-- wishIcon --> */}
                      </div>
                      {/* <!-- //.name --> */}
                    </div>
                  </li>
                  <li>
                    <div className="box_inner">
                      <a className="thumbBox" href="#">
                        <img src={mBest5} alt="제품명" />
                      </a>
                      <span className="rank">5</span>
                      {/* <!-- 상품설명  --> */}
                      <div className="description">
                        <div className="name">
                          <a href="#">(M)스트라이프 럭비 맨투맨 네이비</a>
                        </div>
                        <div className="priceBox">
                          <span className="price">79,000</span>
                        </div>
                        {/* <!-- //.priceBox --> */}
                        <div className="review">
                          <span>리뷰 80건</span>
                        </div>
                        {/* <!-- //.review --> */}
                        <div className="wishIcon">
                          <a href="#"></a>
                        </div>
                        {/* <!-- wishIcon --> */}
                      </div>
                      {/* <!-- //.name --> */}
                    </div>
                  </li>
                  <li>
                    <div className="box_inner">
                      <a className="thumbBox" href="#">
                        <img src={mBest6} alt="제품명" />
                      </a>
                      <span className="rank">6</span>
                      {/* <!-- 상품설명  --> */}
                      <div className="description">
                        <div className="name">
                          <a href="#">(M)C 로고 하프 집업 맨투맨 멜란지 그레이</a>
                        </div>
                        <div className="priceBox">
                          <span className="price">69,000</span>
                        </div>
                        {/* <!-- //.priceBox --> */}
                        <div className="review">
                          <span>리뷰 41건</span>
                        </div>
                        {/* <!-- //.review --> */}
                        <div className="wishIcon">
                          <a href="#"></a>
                        </div>
                        {/* <!-- wishIcon --> */}
                      </div>
                      {/* <!-- //.name --> */}
                    </div>
                  </li>
                  <li>
                    <div className="box_inner">
                      <a className="thumbBox" href="#">
                        <img src={mBest7} alt="제품명" />
                      </a>
                      <span className="rank">7</span>
                      {/* <!-- 상품설명  --> */}
                      <div className="description">
                        <div className="name">
                          <a href="#">(M)베이직 니트 가디건 블랙</a>
                        </div>
                        <div className="priceBox">
                          <span className="price">89,000</span>
                        </div>
                        {/* <!-- //.priceBox --> */}
                        <div className="review">
                          <span>리뷰 43건</span>
                        </div>
                        {/* <!-- //.review --> */}
                        <div className="wishIcon">
                          <a href="#"></a>
                        </div>
                        {/* <!-- wishIcon --> */}
                      </div>
                      {/* <!-- //.name --> */}
                    </div>
                  </li>
                  <li>
                    <div className="box_inner">
                      <a className="thumbBox" href="#">
                        <img src={mBest8} alt="제품명" />
                      </a>
                      <span className="rank">8</span>
                      {/* <!-- 상품설명  --> */}
                      <div className="description">
                        <div className="name">
                          <a href="#">(M)어센틱 로고 후디 라이트 그레이</a>
                        </div>
                        <div className="priceBox">
                          <span className="price">79,000</span>
                        </div>
                        {/* <!-- //.priceBox --> */}
                        <div className="review">
                          <span>리뷰 84건</span>
                        </div>
                        {/* <!-- //.review --> */}
                        <div className="wishIcon">
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

              <div className="Brand_Bag_box tapInner itemInner">
                <ul>
                  <li>
                    <div className="box_inner">
                      <a className="thumbBox" href="#">
                        <img src={bag1} alt="제품명" />
                      </a>
                      <span className="rank">1</span>
                      {/* <!-- 상품설명  --> */}
                      <div className="description">
                        <div className="name">
                          <a href="#">어센틱 로고 럭색 27L 블랙</a>
                        </div>
                        <div className="priceBox">
                          <span className="price">89,000</span>
                        </div>
                        {/* <!-- //.priceBox --> */}
                        <div className="review">
                          <span>리뷰 295건</span>
                        </div>
                        {/* <!-- //.review --> */}
                        <div className="wishIcon">
                          <a href="#"></a>
                        </div>
                        {/* <!-- wishIcon --> */}
                      </div>
                      {/* <!-- //.name --> */}
                    </div>
                  </li>
                  <li>
                    <div className="box_inner">
                      <a className="thumbBox" href="#">
                        <img src={bag2} alt="제품명" />
                      </a>
                      <span className="rank">2</span>
                      {/* <!-- 상품설명  --> */}
                      <div className="description">
                        <div className="name">
                          <a href="#">어센틱 메신저백 블랙</a>
                        </div>
                        <div className="priceBox">
                          <span className="price">79,000</span>
                        </div>
                        {/* <!-- //.priceBox --> */}
                        <div className="review">
                          <span>리뷰 53건</span>
                        </div>
                        {/* <!-- //.review --> */}
                        <div className="wishIcon">
                          <a href="#"></a>
                        </div>
                        {/* <!-- wishIcon --> */}
                      </div>
                      {/* <!-- //.name --> */}
                    </div>
                  </li>
                  <li>
                    <div className="box_inner">
                      <a className="thumbBox" href="#">
                        <img src={bag3} alt="제품명" />
                      </a>
                      <span className="rank">3</span>
                      {/* <!-- 상품설명  --> */}
                      <div className="description">
                        <div className="name">
                          <a href="#">C 로고 투웨이 백 카키</a>
                        </div>
                        <div className="priceBox">
                          <span className="price">39,000</span>
                        </div>
                        {/* <!-- //.priceBox --> */}
                        <div className="review">
                          <span>리뷰 16건</span>
                        </div>
                        {/* <!-- //.review --> */}
                        <div className="wishIcon">
                          <a href="#"></a>
                        </div>
                        {/* <!-- wishIcon --> */}
                      </div>
                      {/* <!-- //.name --> */}
                    </div>
                  </li>
                  <li>
                    <div className="box_inner">
                      <a className="thumbBox" href="#">
                        <img src={bag4} alt="제품명" />
                      </a>
                      <span className="rank">4</span>
                      {/* <!-- 상품설명  --> */}
                      <div className="description">
                        <div className="name">
                          <a href="#">뉴베이직 캔버스 백 블랙</a>
                        </div>
                        <div className="priceBox">
                          <span className="price">29,000</span>
                        </div>
                        {/* <!-- //.priceBox --> */}
                        <div className="review">
                          <span>리뷰 23건</span>
                        </div>
                        {/* <!-- //.review --> */}
                        <div className="wishIcon">
                          <a href="#"></a>
                        </div>
                        {/* <!-- wishIcon --> */}
                      </div>
                      {/* <!-- //.name --> */}
                    </div>
                  </li>
                  <li>
                    <div className="box_inner">
                      <a className="thumbBox" href="#">
                        <img src={bag5} alt="제품명" />
                      </a>
                      <span className="rank">5</span>
                      {/* <!-- 상품설명  --> */}
                      <div className="description">
                        <div className="name">
                          <a href="#">MIL 레거시 백팩 블랙</a>
                        </div>
                        <div className="priceBox">
                          <span className="price">139,000</span>
                        </div>
                        {/* <!-- //.priceBox --> */}
                        <div className="review">
                          <span>리뷰 11건</span>
                        </div>
                        {/* <!-- //.review --> */}
                        <div className="wishIcon">
                          <a href="#"></a>
                        </div>
                        {/* <!-- wishIcon --> */}
                      </div>
                      {/* <!-- //.name --> */}
                    </div>
                  </li>
                  <li>
                    <div className="box_inner">
                      <a className="thumbBox" href="#">
                        <img src={bag6} alt="제품명" />
                      </a>
                      <span className="rank">6</span>
                      {/* <!-- 상품설명  --> */}
                      <div className="description">
                        <div className="name">
                          <a href="#">어센틱 데님 투웨이 백 블랙</a>
                        </div>
                        <div className="priceBox">
                          <span className="price">45,000</span>
                        </div>
                        {/* <!-- //.priceBox --> */}
                        <div className="review">
                          <span>리뷰 19건</span>
                        </div>
                        {/* <!-- //.review --> */}
                        <div className="wishIcon">
                          <a href="#"></a>
                        </div>
                        {/* <!-- wishIcon --> */}
                      </div>
                      {/* <!-- //.name --> */}
                    </div>
                  </li>
                  <li>
                    <div className="box_inner">
                      <a className="thumbBox" href="#">
                        <img src={bag7} alt="제품명" />
                      </a>
                      <span className="rank">7</span>
                      {/* <!-- 상품설명  --> */}
                      <div className="description">
                        <div className="name">
                          <a href="#">어센틱 3웨이 초크백 블랙</a>
                        </div>
                        <div className="priceBox">
                          <span className="price">49,000</span>
                        </div>
                        {/* <!-- //.priceBox --> */}
                        <div className="review">
                          <span>리뷰 10건</span>
                        </div>
                        {/* <!-- //.review --> */}
                        <div className="wishIcon">
                          <a href="#"></a>
                        </div>
                        {/* <!-- wishIcon --> */}
                      </div>
                      {/* <!-- //.name --> */}
                    </div>
                  </li>
                  <li>
                    <div className="box_inner">
                      <a className="thumbBox" href="#">
                        <img src={bag8} alt="제품명" />
                      </a>
                      <span className="rank">8</span>
                      {/* <!-- 상품설명  --> */}
                      <div className="description">
                        <div className="name">
                          <a href="#">어센틱 타입1 백팩 블랙</a>
                        </div>
                        <div className="priceBox">
                          <span className="price">139,000</span>
                        </div>
                        {/* <!-- //.priceBox --> */}
                        <div className="review">
                          <span>리뷰 7건</span>
                        </div>
                        {/* <!-- //.review --> */}
                        <div className="wishIcon">
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

          <div className="main_snap_section">
            <h3 className="title">Best review</h3>
            <div className="snapInner main_section">
              <ul>
                <li>
                  <div className="snapBox">
                    <a href="#">
                      <img src={rw1} alt="인플루언서1" />
                      <div className="snap_o"></div>
                    </a>
                  </div>
                  {/* <!-- snapBox --> */}
                </li>
                <li>
                  <div className="snapBox">
                    <a href="#">
                      <img src={rw2} alt="인플루언서2" />
                      <div className="snap_o"></div>
                    </a>
                  </div>
                  {/* <!-- snapBox --> */}
                </li>
                <li>
                  <div className="snapBox">
                    <a href="#">
                      <img src={rw3} alt="인플루언서3" />
                      <div className="snap_o"></div>
                    </a>
                  </div>
                  {/* <!-- snapBox --> */}
                </li>
                <li>
                  <div className="snapBox">
                    <a href="#">
                      <img src={rw4} alt="인플루언서4" />
                      <div className="snap_o"></div>
                    </a>
                  </div>
                  {/* <!-- snapBox --> */}
                </li>
                <li>
                  <div className="snapBox">
                    <a href="#">
                      <img src={rw5} alt="인플루언서5" />
                      <div className="snap_o"></div>
                    </a>
                  </div>
                  {/* <!-- snapBox --> */}
                </li>
                <li>
                  <div className="snapBox">
                    <a href="#">
                      <img src={rw6} alt="인플루언서6" />
                      <div className="snap_o"></div>
                    </a>
                  </div>
                  {/* <!-- snapBox --> */}
                </li>
                <li>
                  <div className="snapBox">
                    <a href="#">
                      <img src={rw7} alt="인플루언서7" />
                      <div className="snap_o"></div>
                    </a>
                  </div>
                  {/* <!-- snapBox --> */}
                </li>
                <li>
                  <div className="snapBox">
                    <a href="#">
                      <img src={rw8} alt="인플루언서8" />
                      <div className="snap_o"></div>
                    </a>
                  </div>
                  {/* <!-- snapBox --> */}
                </li>
                <li>
                  <div className="snapBox">
                    <a href="#">
                      <img src={rw9} alt="인플루언서9" />
                      <div className="snap_o"></div>
                    </a>
                  </div>
                  {/* <!-- snapBox --> */}
                </li>
                <li>
                  <div className="snapBox">
                    <a href="#">
                      <img src={rw10} alt="인플루언서10" />
                      <div className="snap_o"></div>
                    </a>
                  </div>
                  {/* <!-- snapBox --> */}
                </li>
                <li>
                  <div className="snapBox">
                    <a href="#">
                      <img src={rw11} alt="인플루언서11" />
                      <div className="snap_o"></div>
                    </a>
                  </div>
                  {/* <!-- snapBox --> */}
                </li>
                <li>
                  <div className="snapBox">
                    <a href="#">
                      <img src={rw12} alt="인플루언서12" />
                      <div className="snap_o"></div>
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
          <div className="footer_inner">
            <div className="footer_section02">
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
            <div className="footerArea">
              <div className="footer_section01">
                <div className="bt_cscenter">
                  <div className="bt_cs">00-000-0000</div>
                  <div className="bt_time">평일 오전 0시 ~ 오후 0시 (주말, 공휴일 휴무)</div>
                </div>
                {/* <!-- //.bt_cscenter --> */}
                <div className="bt_info">
                  (주) Covernat
                  <span></span>
                  대표이사 Covernat
                  <span></span>
                  사업자등록번호 000-00-000000
                  <span></span>
                  통신판매업 신고번호 제 0000-서울성동-0000호
                  <br />
                  서울특별시 성동구 송정길 00, 00층 (송정동) [00, Seoul, Republic of Korea]
                  <br />
                  개인정보 보호책임자 Covernat
                  <span></span>
                  email covernat@covernat.co.kr
                </div>
                <div className="bt_sns">
                  <a herf="#">
                    <img src={SNS} alt="페이스북" />
                  </a>
                  <a herf="#">
                    <img src={SNS1} alt="인스타그램" />
                  </a>
                  <a herf="#">
                    <img src={SNS2} alt="유튜브" />
                  </a>
                  <a herf="#">
                    <img src={SNS3} alt="네이버" />
                  </a>
                </div>
                {/* <!--//.bt_sns  --> */}
              </div>
              {/* <!-- //footer_section01 --> */}
              <div className="footer_section03">Copyright &copy; B.Cave All Right Reserved.</div>
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
