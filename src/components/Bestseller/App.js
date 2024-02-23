import React from "react";
import "/src/styles/bestseller/font.scss";
import "/src/styles/bestseller/New.scss";
import Dropdown from "../../components/Bestseller/Dropdown";
const App = props => {
  const [dropdownVisibility, setDropdownVisibility] = React.useState(false);
  return (
    <div id="app">
      <button onClick={e => setDropdownVisibility(!dropdownVisibility)}>{dropdownVisibility ? "Close" : "Open"}</button>
      <Dropdown visibility={dropdownVisibility}>
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
          <li>item 4</li>
        </ul>
      </Dropdown>
    </div>
  );
};
export default App;
