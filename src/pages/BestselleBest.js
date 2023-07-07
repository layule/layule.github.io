import * as React from "react";
import "/src/styles/bestseller/font.scss";
import "/src/styles/bestseller/reset.scss";
import "/src/styles/bestseller/style.scss";
import "/src/styles/bestseller/stylem.scss";
import BestsellerNav from "../components/Bestseller/BestsellerNav";
import BestsellerFooter from "../components/Bestseller/BestsellerFooter";

export default function BestsellerBest() {
  return (
    <div className="page-container bestseller">
      <BestsellerNav></BestsellerNav>
      <div className="content">
        <div className="content-sub">
          <div className="seach-help">
            <h2> 도움말 검색창</h2>
            <span className="sereen-seach">카카오톡 선물하기 서비스를 이용하시는데 도움이 필요하신가요?</span>
            <div className="box_search">
              <form action="/web/search" method="get">
                <fieldset>
                  <legend className="screen_out">도움말 검색</legend>
                  <input type="text" className="hide" name="service" value="66"></input>
                  <input type="text" className="tf_search" name="query" placeholder="도움말을 검색해 보세요" autocomplete="off"></input>
                  <input type="text" className="hide" name="locale" value="ko"></input>
                  <button type="submit" className="btn_search">
                    <span className="ico_commercecs">검색</span>
                  </button>
                </fieldset>
              </form>
            </div>
            <div className="sort_helpcs">
              <h2 className="screen_out">도움말 메뉴</h2>
              <div className="upper_sort">
                <ul className="list_upper">
                  <li>
                    <a href="" className="link_upper link_all">
                      자주하는 질문
                    </a>
                  </li>
                  <li>
                    <a href="" className="link_upper">
                      이용 방법
                    </a>
                  </li>
                  <li>
                    <a href="" classNamess="link_upper">
                      서비스 안내
                    </a>
                  </li>
                  <li>
                    <a href="" className="link_upper">
                      결제
                    </a>
                  </li>
                  <li>
                    <a href="" className="link_upper">
                      배송상품
                    </a>
                  </li>
                  <li>
                    <a href="" className="link_upper">
                      교환권
                    </a>
                  </li>
                  <li id="onCategory">
                    <a href="" className="link_upper on">
                      <span className="screen_out">선택됨</span>기타
                    </a>
                  </li>
                  <li>
                    <a href="" className="link_upper">
                      분쟁해결기준
                    </a>
                  </li>
                </ul>
              </div>
              <strong className="screen_out">하위메뉴</strong>
              <ul className="list_under">
                <li>
                  <a href="" className="link_under on">
                    <span className="screen_out">선택됨</span>입점 문의
                  </a>
                </li>
                <li>
                  <a href="" className="link_under">
                    이벤트
                  </a>
                </li>
                <li>
                  <a href="" className="link_under">
                    오류/장애
                  </a>
                </li>
              </ul>
            </div>
            <article id="mArticle">
              <h2 id="kakaoBody" className="tit_commercecs">
                입점 문의
              </h2>
              <div className="detail_helpcs">
                <strong className="screen_out">도움말 목록</strong>
                <ul className="list_helpcs">
                  <li id="help_0" className="">
                    <div className="ask_help">
                      <span className="ico_commercecs ico_ask">질문</span>
                      <a className="link_ask" aria-expanded="false">
                        선물하기에 입점하려면 어떻게 해야 하나요?
                      </a>
                    </div>
                    <div className="answer_help">
                      <span className="ico_commercecs ico_answer">답변</span>
                      <p>선물하기 입점은 아래와 같은 순서대로 진행되며, 자세한 내용은 '바로가기' 화면 하단의 '유의사항'을 확인해 주세요.</p>
                      <p>
                        <br />
                      </p>
                      <p>
                        <b>입점 신청 및 진행 절차</b>
                      </p>
                      <p>
                        - 배송상품/모바일 교환권 제휴 제안을 등록 &gt; 선물하기 담당자가 제안 선정 여부를 검토 &gt; 선정된 제안이라면 판매 조건 및 상품 개발 협의 &gt; 계약 진행
                        &gt; 판매 시작
                      </p>
                      <div>
                        <br />
                      </div>
                      <p>
                        <span>
                          ☞ '
                          <a href="" target="_blank">
                            배송상품 제휴 제안하기' 바로가기
                          </a>
                        </span>
                        <b>
                          <br />
                        </b>
                      </p>
                      <p>
                        <b>
                          ☞ '
                          <a href="" target="_blank">
                            교환권 제휴 제안하기' 바로가기
                          </a>
                        </b>
                      </p>
                      <p>
                        <br />
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="counsel_helpcs">
                <div className="wrap_btn">
                  <a href="" className="btn_counselcs">
                    <span className="ico_commercecs ico_talk">톡</span>상담하기
                  </a>
                  <a id="requestCs" href="" className="btn_inquirycs">
                    1:1 문의하기
                  </a>
                  <form id="reqForm" action="" method="get">
                    <input id="reqFormService" type="hidden" name="service"></input>
                  </form>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
      <BestsellerFooter></BestsellerFooter>
    </div>
  );
}
