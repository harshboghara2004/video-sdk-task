import React from "react";

const BodyText = ({
    textColour = "white",
    textSize = 18,
    textAlign = "center",
    opacity = 100,
    children,
}) => {
    return (
        <p
            className={`
            mt-2 px-1 
            text-[${textColour}] 
            text-[${textSize}px] 
            font-medium font-lato 
            text-${textAlign} 
            opacity-${opacity}`}
        >
            {children}
        </p>
    );
};

export default BodyText;

// textSize=18
// A8A8A8
// opacity-75
