import React from "react";

const CaptionText = ({
    textColour = "white",
    textSize = 14,
    textAlign = "center",
    opacity = 100,
    children,
}) => {
    return (
        <p
            className={`
            font-lato font-semibold
            text-[${textColour}]  
            text-[${textSize}]  
            leading-[20px] 
            tracking-[0.2em] 
            text-${textAlign}
            opacity-${opacity}
        `}
        >
            {children}
        </p>
    );
};

export default CaptionText;

// #B2B2B2
