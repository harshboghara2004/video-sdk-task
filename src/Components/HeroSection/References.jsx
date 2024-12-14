import React from "react";
import ArrowIcon from "./ArrowIcon";

const References = () => {
    const items = [
        { arrowDir: "up-right", title: "Read Migration Guide" },
        { arrowDir: "down", title: "VideoSDK vs Twilio" },
        { arrowDir: "down", title: "Why not Zoom" },
    ];

    return (
        <div className="flex flex-col items-center gap-x-10 md:flex-row ">
            {items.map((item, index) => (
                <ArrowIcon
                    key={index}
                    arrowDir={item.arrowDir}
                    title={item.title}
                />
            ))}
        </div>
    );
};

export default References;
