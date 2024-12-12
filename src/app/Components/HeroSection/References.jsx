import React from "react";
import ArrowIcon from "./ArrowIcon";

const References = () => {
    const items = [
        { arrowDir: "up-right", title: "Read Migration Guide" },
        { arrowDir: "down", title: "VideoSDK vs Twilio" },
        { arrowDir: "down", title: "Why not Zoom" },
    ];

    return (
        <div className="mt-14 flex flex-row items-center justify-between gap-x-10">
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
