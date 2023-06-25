import * as React from "react";
import MaranNavogation from "../components/maran/MaranNavigation";
import MaranFooter from "../components/maran/MaranFooter";

export default function App() {
  return (
    <div className="page-container maran">
      <MaranNavogation />
      <p class="about_explanation">
        "The most comfortable and classy clothing with a natural aesthetic.”
        <br />
        <br />
        The delicate details of the casual wear make up our simple yet sophisticated collection.
        <br />
        <br />
        Based on carefully selected materials,
        <br />
        <br />
        a relaxed form gives a sense of confidence in movement,
        <br />
        <br />
        combined with an unmatched level of comfort.
        <br />
        <br />
        Trend-focused, urban and stylish yet subtle, offering timeless and casual looks that are well-suited for any occasion.
      </p>
      <MaranFooter />
    </div>
  );
}
