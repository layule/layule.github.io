import * as React from "react";
import * as jQuery from "jquery";
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
  logo,
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
  vi1,
} from "../images/purelife";
import "/src/styles/purelife/style.scss";
import "/src/styles/purelife/reset.scss";
import { initBxSlider } from "../module/bxSlider";
import { initClickToGiveClass } from "../module/clickToGiveClass";

export default function Component() {
  const script = () => {
    (function ($) {
      $(function () {
        $(".slider1").bxSlider({
          auto: true,
          controls: false,
        });

        $(".instabestitem > ul").bxSlider({
          auto: true,
          maxSlides: 5, // 한 번에 보여줄 슬라이드 수 (기본값 1)
          slideWidth: 426, // 하나의 슬라이드 하나의 너비값
          moveSlides: 1, // 움직일 슬라이드 갯수
          speed: 500, // 전환될떄의 시간
          pause: 3000, // 정지된 슬라이드가 유지되는 시간
          controls: false, // false : 컨드롤 삭제 / true : 컨트롤 노출 (기본값)
          pager: false,
        });

        $(".iconbtn").clickToGiveClass({
          class: "topbtn",
        });
      });
    })(jQuery);
  };
  React.useEffect(() => {
    initClickToGiveClass();
    initBxSlider();
    script();
  }, []);

  return (
    <div className="page-container purelife">
      <body>
        <header>
          <div id="container">
            <div className="inner">
              <div id="logo">
                <img src={logo} alt="logo" />
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
                            onFocus={() => (this.placeholder = "")}
                            onBlur={() => (this.placeholder = "검색어를 입력해주세요.")}
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
            <ul className="slider1">
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
                    <img src={vi1} alt="vido" />
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

        <footer style={{ paddingTop: 30, paddingBottom: 30 }}>
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
    </div>
  );
}
