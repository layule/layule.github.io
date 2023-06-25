import * as React from "react";
import MaranNavogation from "../components/maran/MaranNavigation";
import MaranFooter from "../components/maran/MaranFooter";

export default function App() {
  return (
    <div className="page-container maran">
      <MaranNavogation />
      <div class="login">
        <fieldset>
          <div class="login_form">
            <ul>
              <li>
                <label class="id ePlaceholder" title="MEMBER ID">
                  <input id="member_id" name="member_id" fw-filter="isFill" fw-label="아이디" fw-msg="" class="inputTypeText" placeholder="MEMBER ID" value="" type="text" />
                </label>
              </li>
              <li>
                <label class="password ePlaceholder" title="PASSWORD">
                  <input
                    id="member_passwd"
                    name="member_passwd"
                    fw-filter="isFill&amp;isMin[4]&amp;isMax[16]"
                    fw-label="패스워드"
                    fw-msg=""
                    autocomplete="off"
                    value=""
                    type="password"
                    placeholder="PASSWORD"
                  />
                </label>
              </li>
            </ul>
          </div>

          <div class="login_btn">
            <ul>
              <li class="right">
                <a href="#none" onclick="">
                  LOGIN
                </a>
              </li>
            </ul>
          </div>
        </fieldset>
      </div>
      <MaranFooter />
    </div>
  );
}
