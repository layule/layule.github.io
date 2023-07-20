import * as React from "react";
import { ONE, bag, bar, btnmenu, candles, classic, gift, ico, ka, logoA, logoLabo, se } from "../images/lelabo";
import "/src/styles/lelabo/font.scss";
import "/src/styles/lelabo/reset.scss";
import "/src/styles/lelabo/style.scss";
import "/src/styles/lelabo/stylem.scss";
import { useState } from "react";

export default function Component() {
  const [activeTab, setActiveTab] = useState(1);

  const [text, setText] = useState("");
  const onChange = e => {
    setText(e.target.value);
  };

  const onReset = () => {
    setText("");
  };

  return (
    <div className="page-container lelabo">
      <div className="topevent">
        <p>Enjoy free shipping on all purchases and benefit from gift wrapping and round gift cards.</p>
      </div>

      <div className="lelabomemu">
        <div className="ph_me">
          <a href="#">
            <img src={btnmenu} />
          </a>
        </div>
        <nav>
          <ul className="lelabomemuflx">
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
          </ul>
        </nav>
        <ul className="lelaborig">
          <li className="icon_u">
            <a href="#">
              <img src={ico} />
            </a>
          </li>
          <li className="bag">
            <a href="#">
              {" "}
              <img src={bag} />
            </a>
          </li>
          <li className="se">
            <a href="#">
              <img src={se} />
            </a>
          </li>
        </ul>
      </div>
      <div className="lelabomainimg">
        <img src={ONE} />
      </div>
      <div className="lelabo_main_txt">
        <div className="collection">
          <input className="colletion_txt" type="radio" name="lelabo_main_txt" id="tap01" />
          <label className="tap01" htmlFor="tap01" onClick={() => setActiveTab(activeTab => 1)}>
            Classic collection
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
            Collection gift
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
            Classic candles
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
            Scented bar
          </label>
          {activeTab === 4 && (
            <div className="innerA">
              <img src={bar} />
            </div>
          )}
        </div>
      </div>

      <footer className="lelabofooter">
        <section className="marketing_bn">
          <h2>Le Labo Communications</h2>
          <div className="blook"></div>
          <div className="blck_line"></div>
          <div className="listItem">
            <div className="copy_item">
              <p>Subscribe to Aesop emails to receive news about products, services, stores, events, cultural interests and more.</p>
            </div>
            <div className="certification_box">
              <input className="certification1" type="checkbox" />
              <p>I am at least 14 years old (required)</p>
            </div>
            <div className="certification_box">
              <input className="certification2" type="checkbox" />
              <p>I agree to the collection and use of personal information (required)</p>
            </div>
            <div className="letter_box">
              Information regarding Le Labo's products, services and promotions will be emailed to you for marketing purposes, until you cancel your consent.
              <br />
              You do not have to consent to the collection and use of your personal information for marketing purposes, in which case you will not receive marketing information.
            </div>
            <div className="certification_box">
              <input className="certification3" type="checkbox" />
              <p>I agree to receive marketing information (required)</p>
            </div>
            <div className="letter_box">I agree to receive advertising information via newsletter email.</div>
            <div className="email_input">
              <div className="letter_input">
                <input onChange={onChange} value={text} />
                <button onClick={onReset}>click</button>
              </div>
            </div>
          </div>
        </section>
        <div className="footer_gather">
          <section className="footer_section">
            <h3>Order & Support</h3>
            <div className="blook"></div>
            <nav className="footer_col">
              <ul>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Delivery</a>
                </li>
                <li>
                  <a href="#">Return</a>
                </li>
                <li>
                  <a href="#">Track Delivery</a>
                </li>
                <li>
                  <a href="#">Order History</a>
                </li>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
              </ul>
            </nav>
          </section>
          <section className="footer_section">
            <h3>Service</h3>
            <div className="blook"></div>
            <nav className="footer_col">
              <ul>
                <li>
                  <a href="#">Corporate Purchase</a>
                </li>
                <li>
                  <a href="#">Chat Consultation</a>
                </li>
                <li>
                  <a href="#">Campaign</a>
                </li>
              </ul>
            </nav>
          </section>
          <section className="footer_section">
            <h3>Introduction</h3>
            <div className="blook"></div>
            <nav className="footer_col">
              <ul>
                <li>
                  <a href="#">Brand story</a>
                </li>
                <li>
                  <a href="#">Employment</a>
                </li>
                <li>
                  <a href="#">Privacy policy</a>
                </li>
                <li>
                  <a href="#">Operation/management policy</a>
                </li>
                <li>
                  <a href="#">Activation</a>
                </li>
                <li>
                  <a href="#">Cookie Policy</a>
                </li>
              </ul>
            </nav>
          </section>
          <section className="footer_section">
            <h3>Social</h3>
            <div className="blook"></div>
            <nav className="footer_col">
              <ul>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">YouTube</a>
                </li>
                <li>
                  <a href="#">Kakao Plus Friend</a>
                </li>
              </ul>
            </nav>
          </section>
        </div>
        <div className="footer_end">
          ELCA Korea Representative: Teng, Hsiao-Hua (Catherine), Meritz Tower, 382 Gangnam-daero (Yeoksam-dong), Gangnam-gu, Seoul, 06232
          <br />
          Business registration number: 211-81-71889
          <br />
          Mail-order business report number: Gangnam-15737
          <br />
          Customer Care Support Team: 1544-1345 conciergekr@lelabofragrances.com
          <br />
          Hosting provider: Amazon Web Services
          <br />
        </div>
      </footer>
    </div>
  );
}
