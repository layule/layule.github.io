import * as React from "react";
import { ONE, bar, candles, classic, gift, ka, logoA, logoLabo, se } from "../images/lelabo";
import "/src/styles/lelabo/font.scss";
import "/src/styles/lelabo/reset.scss";
import "/src/styles/lelabo/style.scss";
import "/src/styles/lelabo/stylem.scss";
import { colletion, logo, pr1 } from "../images/covernat";
import { useState } from "react";

export default function Component() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="page-container lelabo">
      <div className="topevent">
        <p>Enjoy free shipping on all purchases and benefit from gift wrapping and round gift cards.</p>
      </div>
      <div className="lelabomemu">
        <nav className="lelabomemuflx">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Body&face</a>
          </li>
          <li>
            <a href="#">Hiar</a>
          </li>
          <li>
            <a href="#">Grooming</a>
          </li>
          <li>
            <a href="#">Lifestyle</a>
          </li>
          <li>
            <a href="#">Discovery</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">
              <img src={se} />
            </a>
          </li>
        </nav>
        <nav className="lelaborig">
          <li>
            <a href="#">login</a>
          </li>
          <li>
            <a href="#">wish list</a>
          </li>
          <li>
            <a href="#">cart</a>
          </li>
        </nav>
      </div>
      <div className="lelabomainimg">
        <img src={ONE} />
      </div>
      <div className="lelabo_main_txt">
        <div className="collection">
          <input className="colletion_txt" type="radio" name="lelabo_main_txt" id="tap01" />
          <label className="tap01" htmlFor="tap01" onClick={() => setActiveTab(activeTab => 1)}>
            classic collection
          </label>
          {activeTab === 1 && (
            <div className="innerA">
              <img src={classic} />
            </div>
          )}
        </div>
        <div className="gift">
          <input className="colletion_txt" type="radio" name="lelabo_main_txt" id="tap02" />
          <label className="tap02" htmlFor="tap02" onClick={() => setActiveTab(activeTab => 2)}>
            collection gift
          </label>
          {activeTab === 2 && (
            <div className="innerA">
              <img src={gift} />
            </div>
          )}
        </div>
        <div className="candles">
          <input className="colletion_txt" type="radio" name="lelabo_main_txt" id="tap03" />
          <label className="tap03" htmlFor="tap03" onClick={() => setActiveTab(activeTab => 3)}>
            classic candles
          </label>
          {activeTab === 3 && (
            <div className="innerA">
              <img src={candles} />
            </div>
          )}
        </div>
        <div className="bar">
          <input className="colletion_txt" type="radio" name="lelabo_main_txt" id="tap04" />
          <label className="tap04" htmlFor="tap04" onClick={() => setActiveTab(activeTab => 4)}>
            scented bar
          </label>
          {activeTab === 4 && (
            <div className="innerA">
              <img src={bar} />
            </div>
          )}
        </div>
      </div>

      <footer className="lelabofooter">
        이엘씨에이한국(유) 대표: Teng, Hsiao-Hua (Catherine), 서울시 강남구 강남대로 382 (역삼동) 메리츠타워, 06232
        <br />
        사업자등록번호: 211-81-71889
        <br />
        통신판매업신고번호: 강남-15737호
        <br />
        고객관리지원팀: 1544-1345 conciergekr@lelabofragrances.com
        <br />
        호스팅제공자: Amazon Web Services
        <br />
      </footer>
    </div>
  );
}
