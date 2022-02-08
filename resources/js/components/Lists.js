import React, { useEffect, useState } from "react";
import Marquee from "react-marquee-master";
import "../styles/Lists.scss";
import Http from "../libraries/Http";

const Lists = () => {
    const [responseData, setResponseData] = useState([]);
    const [isScrolling, setIsScrolling] = useState(false);
    const [listRight, listLeft] = responseData;

    const fetchData = async () => {
        const response = await Promise.all(["rightList", "leftList"].map((url) => Http(url)));
    return [...response.map((response) => response.data)];
    };

    useEffect(() => {
        fetchData().then((data) => setResponseData(data));
    }, []);

    useEffect(() => {
        const id = setTimeout(() => {
            setIsScrolling((scrolling) => !scrolling);
        }, 10000);
    return () => clearTimeout(id);
    }, [isScrolling]);

    return (
        <>
            <div height="300px" className="player-left">
                <p className="listHeading">Menu Heading</p>
                {listLeft && <Marquee delay={isScrolling ? "40" : "10000" } marqueeItems={listLeft.data} />}
            </div>

            <div height="300px" className="player-right">
                <p className="listHeading">Menu Heading</p>
                {listRight && <Marquee delay={isScrolling ? "40" : "10000" } marqueeItems={listRight.data} />}
            </div>
        </>
    );
};

export default Lists;
