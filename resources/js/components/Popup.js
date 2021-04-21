import React, { useEffect } from "react";
import useFetchApi from "../libraries/useFetchApi";

import "../styles/Pop.scss";

export default function Popup() {

    const url = 'events';

    const { result, api , loading} = useFetchApi(url);

    useEffect(() => { api(url)},[api]);

    const randomRange = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
        <div className='action'>
            {loading && result.map((value, key) => {
                let odd = {
                    top: randomRange(10, 40) + '%',
                    right: randomRange(10, 40) + '%',
                    bottom: randomRange(10, 40) + '%',
                    marginTop: 10 + 'rem',
                }
                let even = {
                    left: randomRange(10, 30) + '%',
                    top: randomRange(40, 6) + '%'
                }
				return <p className='popup' key={key} data-tooltip={value} style={(key % 2 === 0) ? even : odd} ></p>;
                })}
        </div>
    );
            }