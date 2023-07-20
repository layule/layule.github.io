import "/src/styles/bestseller/font.scss";
import "/src/styles/bestseller/reset.scss";
import "/src/styles/bestseller/style.scss";
import "/src/styles/bestseller/stylem.scss";
import BestsellerNav from "../components/Bestseller/BestsellerNav";
import BestsellerFooter from "../components/Bestseller/BestsellerFooter";
import React, { useEffect, useState } from "react";

export default function BestsellerBest() {
  const [activeTab, setActiveTab] = useState(1);

  const [text, setText] = useState("");
  const onChange = e => {
    setText(e.target.value);
  };

  const onReset = () => {
    setText("");
  };

  return (
    <div className="page-container bestseller">
      <BestsellerNav></BestsellerNav>
      <div className="continer">
        <div className="bestsellerWrap">
          <div className="bestsellerhead">
            <div className="hide">
              <div className="content">
                <div className="content-sub">
                  <div className="seach-help">
                    <span className="sereen-seach">베스트셀러 서비스를 이용하시는데 도움이 필요하신가요?</span>
                    <div className="box_search">
                      <form action="/web/search" method="get">
                        <fieldset>
                          <input type="text" className="tf_search" name="query" placeholder="도움말을 검색해 보세요" autocomplete="off"></input>
                          <button type="submit" className="btn_search">
                            <span className="ico_commercecs">검색</span>
                          </button>
                        </fieldset>
                      </form>
                    </div>
                  </div>
                  <div className="sort_helpcs">
                    <h2 className="screen_out">도움말 메뉴</h2>
                    <div className="upper_sort">
                      <ul className="list_upper">
                        <li>
                          <a href="" onClick={() => setActiveTab(activeTab => 1)} className="link_upper">
                            자주하는 질문
                          </a>
                        </li>

                        <li>
                          <a href="" onClick={() => setActiveTab(activeTab => 2)} className="link_upper">
                            이용 방법
                          </a>
                          {activeTab === 2 && (
                            <div className="detail_helpcs">
                              <strong className="screen_out">도움말 목록</strong>
                              <ul className="list_helpcs">
                                <li id="help_0" className="">
                                  <div className="ask_help">
                                    <span className="ico_commercecs ico_ask">질문</span>
                                    <a className="link_ask" aria-expanded="false">
                                      베스트셀러에 입점하려면 어떻게 해야 하나요?
                                    </a>
                                  </div>
                                  <div className="answer_help">
                                    <span className="ico_commercecs ico_answer">답변</span>
                                    <p>베스트셀러 입점은 아래와 같은 순서대로 진행되며, 자세한 내용은 '바로가기' 화면 하단의 '유의사항'을 확인해 주세요.</p>
                                    <p>
                                      <br />
                                    </p>
                                    <p>
                                      <b>입점 신청 및 진행 절차</b>
                                    </p>
                                    <p>- 업체 등록 &gt; 베스트셀러 담당자가 여부를 검토 &gt; 검토 후 베스트셀러와 커머스 협의 &gt; 계약 진행 &gt; 판매 시작</p>
                                    <div>
                                      <br />
                                    </div>
                                    <p>
                                      <span>
                                        ☞ '
                                        <a href="" target="_blank">
                                          업체등록' 바로가기
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
                                          라이브 커머스 신청' 바로가기
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
                          )}
                        </li>

                        <li>
                          <a href="" onClick={() => setActiveTab(activeTab => 3)} classNamess="link_upper">
                            서비스 안내
                          </a>
                          {activeTab === 3 && (
                            <div className="detail_helpcs">
                              <strong className="screen_out">도움말 목록</strong>
                              <ul className="list_helpcs">
                                <li id="help_0" className="">
                                  <div className="ask_help">
                                    <span className="ico_commercecs ico_ask">질문</span>
                                    <a className="link_ask" aria-expanded="false">
                                      베스트셀러에 입점하려면 어떻게 해야 하나요?
                                    </a>
                                  </div>
                                  <div className="answer_help">
                                    <span className="ico_commercecs ico_answer">답변</span>
                                    <p>베스트셀러 입점은 아래와 같은 순서대로 진행되며, 자세한 내용은 '바로가기' 화면 하단의 '유의사항'을 확인해 주세요.</p>
                                    <p>
                                      <br />
                                    </p>
                                    <p>
                                      <b>입점 신청 및 진행 절차</b>
                                    </p>
                                    <p>- 업체 등록 &gt; 베스트셀러 담당자가 여부를 검토 &gt; 검토 후 베스트셀러와 커머스 협의 &gt; 계약 진행 &gt; 판매 시작</p>
                                    <div>
                                      <br />
                                    </div>
                                    <p>
                                      <span>
                                        ☞ '
                                        <a href="" target="_blank">
                                          업체등록' 바로가기
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
                                          라이브 커머스 신청' 바로가기
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
                          )}
                        </li>

                        <li>
                          <a href="" onClick={() => setActiveTab(activeTab => 4)} className="link_upper">
                            결제
                          </a>
                          {activeTab === 4 && (
                            <div className="detail_helpcs">
                              <strong className="screen_out">도움말 목록</strong>
                              <ul className="list_helpcs">
                                <li id="help_0" className="">
                                  <div className="ask_help">
                                    <span className="ico_commercecs ico_ask">질문</span>
                                    <a className="link_ask" aria-expanded="false">
                                      베스트셀러에 입점하려면 어떻게 해야 하나요?
                                    </a>
                                  </div>
                                  <div className="answer_help">
                                    <span className="ico_commercecs ico_answer">답변</span>
                                    <p>베스트셀러 입점은 아래와 같은 순서대로 진행되며, 자세한 내용은 '바로가기' 화면 하단의 '유의사항'을 확인해 주세요.</p>
                                    <p>
                                      <br />
                                    </p>
                                    <p>
                                      <b>입점 신청 및 진행 절차</b>
                                    </p>
                                    <p>- 업체 등록 &gt; 베스트셀러 담당자가 여부를 검토 &gt; 검토 후 베스트셀러와 커머스 협의 &gt; 계약 진행 &gt; 판매 시작</p>
                                    <div>
                                      <br />
                                    </div>
                                    <p>
                                      <span>
                                        ☞ '
                                        <a href="" target="_blank">
                                          업체등록' 바로가기
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
                                          라이브 커머스 신청' 바로가기
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
                          )}
                        </li>
                        <li>
                          <a href="" onClick={() => setActiveTab(activeTab => 5)} className="link_upper">
                            기타
                          </a>
                          {activeTab === 5 && (
                            <div className="detail_helpcs">
                              <strong className="screen_out">도움말 목록</strong>
                              <ul className="list_helpcs">
                                <li id="help_0" className="">
                                  <div className="ask_help">
                                    <span className="ico_commercecs ico_ask">질문</span>
                                    <a className="link_ask" aria-expanded="false">
                                      베스트셀러에 입점하려면 어떻게 해야 하나요?
                                    </a>
                                  </div>
                                  <div className="answer_help">
                                    <span className="ico_commercecs ico_answer">답변</span>
                                    <p>베스트셀러 입점은 아래와 같은 순서대로 진행되며, 자세한 내용은 '바로가기' 화면 하단의 '유의사항'을 확인해 주세요.</p>
                                    <p>
                                      <br />
                                    </p>
                                    <p>
                                      <b>입점 신청 및 진행 절차</b>
                                    </p>
                                    <p>- 업체 등록 &gt; 베스트셀러 담당자가 여부를 검토 &gt; 검토 후 베스트셀러와 커머스 협의 &gt; 계약 진행 &gt; 판매 시작</p>
                                    <div>
                                      <br />
                                    </div>
                                    <p>
                                      <span>
                                        ☞ '
                                        <a href="" target="_blank">
                                          업체등록' 바로가기
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
                                          라이브 커머스 신청' 바로가기
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
                          )}
                        </li>
                        <li>
                          <a href="" onClick={() => setActiveTab(activeTab => 6)} className="link_upper">
                            분쟁해결기준
                          </a>
                          {activeTab === 6 && (
                            <div className="detail_helpcs">
                              <strong className="screen_out">도움말 목록</strong>
                              <ul className="list_helpcs">
                                <li id="help_0" className="">
                                  <div className="ask_help">
                                    <span className="ico_commercecs ico_ask">질문</span>
                                    <a className="link_ask" aria-expanded="false">
                                      베스트셀러에 입점하려면 어떻게 해야 하나요?
                                    </a>
                                  </div>
                                  <div className="answer_help">
                                    <span className="ico_commercecs ico_answer">답변</span>
                                    <p>베스트셀러 입점은 아래와 같은 순서대로 진행되며, 자세한 내용은 '바로가기' 화면 하단의 '유의사항'을 확인해 주세요.</p>
                                    <p>
                                      <br />
                                    </p>
                                    <p>
                                      <b>입점 신청 및 진행 절차</b>
                                    </p>
                                    <p>- 업체 등록 &gt; 베스트셀러 담당자가 여부를 검토 &gt; 검토 후 베스트셀러와 커머스 협의 &gt; 계약 진행 &gt; 판매 시작</p>
                                    <div>
                                      <br />
                                    </div>
                                    <p>
                                      <span>
                                        ☞ '
                                        <a href="" target="_blank">
                                          업체등록' 바로가기
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
                                          라이브 커머스 신청' 바로가기
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
                          )}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <article id="mArticle">
                  <h2 id="kakaoBody" className="tit_commercecs">
                    입점 문의
                  </h2>
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
        </div>
      </div>
      <BestsellerFooter></BestsellerFooter>
    </div>
  );
}
