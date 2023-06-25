import * as React from "react";
export default function MaranFooter({ isAbsolute = true }) {
  return (
    <footer style={{ ...(isAbsolute ? { position: "absolute", bottom: 0 } : { marginTop: 96 }) }}>
      <div class="for_txt_po">
        <ul>
          <li>
            <a href="#">Company</a>
            <br />

            <a href="#">Agreemen</a>
            <br />

            <a href="#">Privacy</a>
            <br />

            <a href="#">Guide</a>
          </li>

          <li className="number">
            1500 - 0000 <br />
            10AM - 5PM <br />
            MON - FRI <br />
            SAT, SUN, HOLIDDAY
          </li>
          <li>
            <p>
              Ctdots Corp | MARAN | 00000 서울특별시 중구 신당동
              <br />
              Business License 000-00-00000
              <br />
              Mail Order License No. 제2021-서울-00000
              <br />
              maran.kr@gmail.com
            </p>
          </li>
          <li>
            <p class="copyright">2023 &copy; MARAN Corp. All Right Reserved.</p>
          </li>
        </ul>
      </div>
    </footer>
  );
}
