import React from "react";
export const MaranFooter = ({ isAbsolute = true }) => {
  return (
    <footer style={{ ...(isAbsolute ? { position: "absolute", bottom: 0 } : { marginTop: 96 }) }}>
      <div className="fot_n">
        <p>Company: MARAN . Ceo Cpo : MARAN . Address : apM PLACE 7F 723 105, Euljiro 7-ga, Jung-gu, Seoul, Korea. Business license : 518-30-00323</p>
      </div>
    </footer>
  );
};
export default MaranFooter;
