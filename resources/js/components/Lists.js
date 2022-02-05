import React, { useEffect, useState } from "react";
import Marquee from "react-marquee-master";
import "../styles/Lists.scss";
import Http from "../libraries/Http";

const Lists = () => {
    const [responseData, setResponseData] = useState([]);
    const [isScrolling, setIsScrolling] = useState(false);

    const fetchData = async () => {
        const response = await Promise.all([ 'listRight', 'listLeft' ].map(url => Http(url)));
        return [...response.map(response => response.data)]
    };

    useEffect(() => {
        fetchData().then((data) => console.log(data) || setResponseData(data));
    }, []);

    useEffect(() => {
        const id = setTimeout(() => {
            setIsScrolling((scrolling) => !scrolling);
        }, 5000);
        return () => clearTimeout(id);
    }, [isScrolling]);
    // console.log(responseData[0].map());
    const listItems = responseData.map((data, index) => console.log(data) );

    return (
        <>
            <div height="300px" className="player-left">
                <p className="listHeading">Menu Heading</p>
                {isScrolling ? <Marquee delay="80" marqueeItems={responseData} /> : <ul>{listItems}</ul>}
            </div>

            <div height="300px" className="player-right">
                <p className="listHeading">Menu Heading</p>
                {isScrolling ? <Marquee delay="80" marqueeItems={responseData} /> : <ul>{listItems}</ul>}
            </div>
        </>
    );
};
export default Lists;
