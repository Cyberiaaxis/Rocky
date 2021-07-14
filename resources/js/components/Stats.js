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
                            <h2>First Stat</h2>
                            <ul>
                                <li>second item first subitem</li>
                                <li>second item second subitem</li>
                                <li>second item third subitem</li>
                            </ul>
                        </li>
                        <li>
                            <p>Total</p>
                        </li>
                        <li>
                            <p>Total</p>
                        </li>
                        <li>
                            <p>Total</p>
                        </li>
                        <li>
                            <p>Total</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul class="statsDetails">
                        <li>
                            <h2>Second Stat</h2>
                            <ul>
                                <li>second item first subitem</li>
                                <li>second item second subitem</li>
                                <li>second item third subitem</li>
                            </ul>
                        </li>
                        <li>
                            <p>Total</p>
                        </li>
                        <li>
                            <p>Total</p>
                        </li>
                        <li>
                            <p>Total</p>
                        </li>
                        <li>
                            <p>Total</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="StatsBox">
                <div>
                    <ul class="statsDetails">
                        <li>
                            <h2>First Stat</h2>
                            <ul>
                                <li>second item first subitem</li>
                                <li>second item second subitem</li>
                                <li>second item third subitem</li>
                            </ul>
                        </li>
                        <li>
                            <p>Total</p>
                        </li>
                        <li>
                            <p>Total</p>
                        </li>
                        <li>
                            <p>Total</p>
                        </li>
                        <li>
                            <p>Total</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul class="statsDetails">
                        <li>
                            <h2>Second Stat</h2>
                            <ul>
                                <li>
                                    <p>second item first subitem</p>
                                    <Chart
                                        width={"500px"}
                                        height={"300px"}
                                        chartType="PieChart"
                                        loader={<div>Loading Chart</div>}
                                        data={[
                                            ["Task", "Hours per Day"],
                                            ["Work", 11],
                                            ["Eat", 2],
                                            ["Commute", 2],
                                            ["Watch TV", 2],
                                            ["Sleep", 7],
                                        ]}
                                        options={{
                                            title: "My Daily Activities",
                                            // Just add this option
                                            is3D: true,
                                        }}
                                        rootProps={{ "data-testid": "2" }}
                                    />
                                </li>
                                <li>second item second subitem</li>
                                <li>second item third subitem</li>
                            </ul>
                        </li>
                        <li>
                            <p>Total</p>
                        </li>
                        <li>
                            <p>Total</p>
                        </li>
                        <li>
                            <p>Total</p>
                        </li>
                        <li>
                            <p>Total</p>
                        </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Stats;
