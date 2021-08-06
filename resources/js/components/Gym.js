import React from "react";
import TextField from "@material-ui/core/TextField";
// import AccessibilitySharpIcon from "@material-ui/icons/AccessibilitySharp";
import "./gym.css";

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <div className="result">Result Comes Here</div>
      <div className="mainBox">
        <ul>
          <li>
            <h3>Strength</h3>
            <p> some text here goes here</p>
          </li>
          <li>
            <TextField
              id="outlined-number"
              label="Number"
              type="number"
              variant="outlined"
              defaultValue="Small"
              size="small"
            />
          </li>
          <li>
            {" "}
            <button type="button"> Do </button>
          </li>
        </ul>
        <ul>
          <li>
            <h3>Strength</h3>
            <p> some text here goes here</p>
          </li>
          <li>
            <TextField
              id="outlined-number"
              label="Number"
              type="number"
              variant="outlined"
              defaultValue="Small"
              size="small"
            />
          </li>
          <li>
            {" "}
            <button type="button"> Do </button>
          </li>
        </ul>
        <ul>
          <li>
            <h3>Strength</h3>
            <p> some text here goes here</p>
          </li>
          <li>
            <TextField
              id="outlined-number"
              label="Number"
              type="number"
              variant="outlined"
              defaultValue="Small"
              size="small"
            />
          </li>
          <li>
            {" "}
            <button type="button"> Do </button>
          </li>
        </ul>
        <ul>
          <li>
            <h3>Strength</h3>
            <p> some text here goes here</p>
          </li>
          <li>
            <TextField
              id="outlined-number"
              label="Number"
              type="number"
              variant="outlined"
              defaultValue="Small"
              size="small"
            />
          </li>
          <li>
            {" "}
            <button type="button"> Do </button>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}
