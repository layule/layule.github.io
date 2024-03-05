import React from "react";
import { MaranNavogation } from "../components/maran/MaranNavigation";
import { MaranFooter } from "../components/maran/MaranFooter";
import { c01, c02, c03, c05, c06, c07, c08, c09, c10, c11, c12, c13, c15, c16, c17, c18, c19, c20, c21, c23, c24, c25, c26 } from "../images/maran";

export default function MaranCampaign() {
  return (
    <div className="page-container maran">
      <MaranNavogation />
      <div className="continer">
        <div className="contents">
          <ul className="tham_tall">
            <li className="thumbnail">
              <a>
                <img src={c26} />
              </a>
            </li>
            <li className="thumbnail">
              <a>
                <img src={c25} />
              </a>
            </li>
            <li className="thumbnail">
              <a>
                <img src={c24} />
              </a>
            </li>
            <li className="thumbnail">
              <a>
                <img src={c23} />
              </a>
            </li>
            <li className="thumbnail">
              <a>
                <img src={c21} />
              </a>
            </li>
            <li className="thumbnail">
              <a>
                <img src={c20} />
              </a>
            </li>
            <li className="thumbnail">
              <a>
                <img src={c19} />
              </a>
            </li>
            <li className="thumbnail">
              <a>
                <img src={c18} />
              </a>
            </li>
            <li className="thumbnail">
              <a>
                <img src={c17} />
              </a>
            </li>
            <li className="thumbnail">
              <a>
                <img src={c16} />
              </a>
            </li>
            <li className="thumbnail">
              <a>
                <img src={c15} />
              </a>
            </li>
            <li className="thumbnail">
              <a>
                <img src={c13} />
              </a>
            </li>
            <li className="thumbnail">
              <a>
                <img src={c12} />
              </a>
            </li>
            <li className="thumbnail">
              <a>
                <img src={c11} />
              </a>
            </li>
            <li className="thumbnail">
              <a>
                <img src={c10} />
              </a>
            </li>
            <li className="thumbnail">
              <a>
                <img src={c09} />
              </a>
            </li>
            <li className="thumbnail">
              <a>
                <img src={c08} />
              </a>
            </li>
            <li className="thumbnail">
              <a>
                <img src={c07} />
              </a>
            </li>
            <li className="thumbnail">
              <a>
                <img src={c06} />
              </a>
            </li>
            <li className="thumbnail">
              <a>
                <img src={c05} />
              </a>
            </li>
            <li className="thumbnail">
              <a>
                <img src={c03} />
              </a>
            </li>
            <li className="thumbnail">
              <a>
                <img src={c02} />
              </a>
            </li>
            <li className="thumbnail">
              <a>
                <img src={c01} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <MaranFooter isAbsolute={false} />
    </div>
  );
}
