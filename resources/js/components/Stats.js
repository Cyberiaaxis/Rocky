import React, { useState } from "react";
import Chart from "react-google-charts";
import "../styles/Stats.scss";

const Stats = () => {
    return (
        <React.Fragment>
<div class="StatsBox">
    <div>
        <ul class="statsDetails">
            <li>
              <p>First Stat</p>
                <ul>
                    <li>second item first subitem</li>
                    <li>second item second subitem</li>
                    <li>second item third subitem</li>
                </ul>
            </li>
          <li>Total</li>
          <li>Total</li>
          <li>Total</li>
          <li>Total</li>

        </ul>
    </div>
    <div>
        <ul class="statsDetails">
            <li>
               <p> Second Stat </p>
                <ul>
                    <li>second item first subitem</li>
                    <li>second item second subitem</li>
                    <li>second item third subitem</li>
                </ul>
            </li>
          <li>Total</li>
          <li>Total</li>
          <li>Total</li>
          <li>Total</li>
        </ul>
    </div>
</div>

        </React.Fragment>
    );
};

export default Stats;
