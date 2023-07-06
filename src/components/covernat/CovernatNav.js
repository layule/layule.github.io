import * as React from "react";
import { like, logo, search, shopping } from "../../images/covernat";
export default function CovernatNav() {
  return (
    <div className="page-container covernat">
      <header className="covernatHeader">
        <div className="covernatPointInner">
          <a href="#">
            <img className="logo_cover" src={logo} />
          </a>
          <div className="covernatTopMenu">
            <ul className="TopMenu">
              <li>
                <p className="TopMenu--font--color">
                  <a href="/covernetmen">MEN</a>
                </p>
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
                        <ul className="product_cover">
                          <li>
                            <a href="#">재킷</a>
                          </li>
                          <li>
                            <a href="#">코트</a>
                          </li>
                          <li>
                            <a href="#">패딩</a>
                          </li>
                          <li>
                            <a href="#">무스탕</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">상의</a>
                        <ul className="product_cover">
                          <li>
                            <a href="#">반소매 티셔츠</a>
                          </li>
                          <li>
                            <a href="#">긴소매 티셔츠</a>
                          </li>
                          <li>
                            <a href="#">셔츠</a>
                          </li>
                          <li>
                            <a href="#">맨투맨</a>
                          </li>
                          <li>
                            <a href="#">슬리브리스</a>
                          </li>
                          <li>
                            <a href="#">후디</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">하의</a>
                        <ul className="product_cover">
                          <li>
                            <a href="#">데님</a>
                          </li>
                          <li>
                            <a href="#">트레이닝</a>
                          </li>
                          <li>
                            <a href="#">코튼</a>
                          </li>
                          <li>
                            <a href="#">레깅스</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <p className="TopMenu--font--color">
                  <a href="#">WOMEN</a>
                </p>
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
                        <ul className="product_cover">
                          <li>
                            <a href="#">재킷</a>
                          </li>
                          <li>
                            <a href="#">코트</a>
                          </li>
                          <li>
                            <a href="#">패딩</a>
                          </li>
                          <li>
                            <a href="#">무스탕</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">상의</a>
                        <ul className="product_cover">
                          <li>
                            <a href="#">반소매 티셔츠</a>
                          </li>
                          <li>
                            <a href="#">긴소매 티셔츠</a>
                          </li>
                          <li>
                            <a href="#">블라우스</a>
                          </li>
                          <li>
                            <a href="#">셔츠</a>
                          </li>
                          <li>
                            <a href="#">맨투맨</a>
                          </li>
                          <li>
                            <a href="#">슬리브리스</a>
                          </li>
                          <li>
                            <a href="#">후디</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">하의</a>
                        <ul className="product_cover">
                          <li>
                            <a href="#">데님</a>
                          </li>
                          <li>
                            <a href="#">트레이닝</a>
                          </li>
                          <li>
                            <a href="#">코튼</a>
                          </li>
                          <li>
                            <a href="#">레깅스</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">원피스</a>
                        <ul className="product_cover">
                          <li>
                            <a href="#">롱</a>
                          </li>
                          <li>
                            <a href="#">미디</a>
                          </li>
                          <li>
                            <a href="#">숏</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <p className="TopMenu--font--color">
                  <a href="#">ACC</a>
                </p>
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
                        <ul className="product_cover">
                          <li>
                            <a href="#">볼캡</a>
                          </li>
                          <li>
                            <a href="#">버킷햇</a>
                          </li>
                          <li>
                            <a href="#">비니</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">가방</a>
                        <ul className="product_cover">
                          <li>
                            <a href="#">백팩</a>
                          </li>
                          <li>
                            <a href="#">크로스백</a>
                          </li>
                          <li>
                            <a href="#">토트백</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">신발</a>{" "}
                        <ul className="product_cover">
                          <li>
                            <a href="#">스니커즈</a>
                          </li>
                          <li>
                            <a href="#">슬라이드</a>
                          </li>
                          <li>
                            <a href="#">기타</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">용품</a>
                        <ul className="product_cover">
                          <li>
                            <a href="#">악세사리</a>
                          </li>
                          <li>
                            <a href="#">라이프</a>
                          </li>
                          <li>
                            <a href="#">양말</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <p className="TopMenu--font--color">
                  <a href="#">PROMOTION</a>
                </p>
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
                <p className="TopMenu--font--color">
                  <a href="#">COLLABORATION</a>
                </p>
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
            <ul className="covernatIcon">
              <li>
                <a href="#">
                  <img src={like}></img>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={shopping}></img>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={search}></img>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}
