import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { logo } from "../../images/maran";

export const MaranNavogation = () => {
  const [age, setAge] = React.useState(10);

  const handleChange = event => {
    setAge(event.target.value);
  };
  return (
    <div className="page-container maran">
      <nav className="mav_size">
        <ul className="lag_line">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">
              <img src={logo} alt="maranlogo" />
            </a>
          </li>
          <li>
            <a>
              <div>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                  <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={age} onChange={handleChange} label="Age">
                    <MenuItem value={10}>Korea </MenuItem>
                    <MenuItem value={20}>English</MenuItem>
                    <MenuItem value={30}>China</MenuItem>
                    <MenuItem value={40}>Italy</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </a>
          </li>
        </ul>
      </nav>
      <div className="#">
        <ul>
          <li>
            <a href="#">Archive</a>
          </li>
          <li>
            <a href="#">Campaign</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MaranNavogation;
