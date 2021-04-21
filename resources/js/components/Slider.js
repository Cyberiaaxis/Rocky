import React from "react";
import Popup from './Popup';

import "../styles/Slider.scss";


const Slider = () => {
    const [imageIndex, setimageIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setimageIndex();
        }, 1000)
    
        return () => {
            clearTimeout(timer)
        }
    }, []);

    setImageIndex = () => {

        if (imageIndex === 6) {
            imageIndex = 0;
        } else {
            imageIndex += 1;
        }
        setimageIndex({ imageIndex });
    };

    const imageList = [
        // "https://deadline.com/wp-content/uploads/2018/03/pb4_master_keyart_aw_land_v2-_-35-e1584361674557.jpg",
        // "https://content.api.news/v3/images/bin/3dad2a36dcd4369995d2cc8ef1d42978",
        // "https://deadline.com/wp-content/uploads/2018/03/pb4_master_keyart_aw_land_v2-_-35-e1584361674557.jpg",
        // "https://content.api.news/v3/images/bin/3dad2a36dcd4369995d2cc8ef1d42978",
        // "https://deadline.com/wp-content/uploads/2018/03/pb4_master_keyart_aw_land_v2-_-35-e1584361674557.jpg",
        // "https://deadline.com/wp-content/uploads/2018/03/pb4_master_keyart_aw_land_v2-_-35-e1584361674557.jpg",
        // "https://content.api.news/v3/images/bin/3dad2a36dcd4369995d2cc8ef1d42978",
        // "https://deadline.com/wp-content/uploads/2018/03/pb4_master_keyart_aw_land_v2-_-35-e1584361674557.jpg",
        // "https://content.api.news/v3/images/bin/3dad2a36dcd4369995d2cc8ef1d42978",
        // "https://deadline.com/wp-content/uploads/2018/03/pb4_master_keyart_aw_land_v2-_-35-e1584361674557.jpg"
    ];

    return (
        <div className="app" id={imageIndex}>
            <Popup />
            <img src={imageList[imageIndex]} className="w-100 h-100" alt={imageIndex} />
        </div>
    );
}

export default Slider;