import React, { useEffect, useState } from "react";
import Marquee from "react-marquee-master";
import "../styles/Lists.scss";
import Fetch from "../libraries/Fetch";

const Lists = () => {
    const [responseData, setResponseData] = useState([]);
    const [isScrolling, setIsScrolling] = useState(false);

    const fetchData = async () => {
        const result = await Fetch("topplayerlist", { method: "get" });
        setResponseData(result);
    };

    const listItems = responseData.map((data) => <li>{data}</li>);

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const id = setTimeout(() => {
            setIsScrolling((scrolling) => !scrolling);
            console.log("looping timer");
        }, 5000);
        return () => clearTimeout(id);
    }, [isScrolling]);

    return (
        <>
            <div height="300px" className="player-left">
                <p className="listHeading">Menu Heading</p>
                {isScrolling ? <Marquee delay="40" marqueeItems={responseData} /> : <ul>{listItems}</ul>}
            </div>
            ,
            <div height="300px" className="player-right">
                <p className="listHeading">Menu Heading</p>
                {isScrolling ? <Marquee delay="40" marqueeItems={responseData} /> : <ul>{listItems}</ul>}
            </div>
        </>
    );
};
export default Lists;
