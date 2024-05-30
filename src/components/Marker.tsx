import React from "react";

const MyMarker = ({ text: any, tooltip: any, $hover: any }) => {
    const handleClick = () => {
        console.log(`You clicked on ${tooltip}`);
    };

    return (
        <div className={$hover ? "circle hover" : "circle"} onClick={handleClick}>
            <span className="circleText" title={tooltip}>
                {text}
            </span>
        </div>
    );
};

export default MyMarker;