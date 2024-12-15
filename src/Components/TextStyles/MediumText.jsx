import React from "react";

const MediumText = ({
    textColour = "white",
    textAlign = "center",
    opacity = 100,
    children,
}) => {
    return (
        <p
            className={`font-lato 
            text-${textColour} 
            text-[28px] 
            font-bold 
            text-${textAlign} 
            opacity-${opacity}`}
        >
            {children}
        </p>
    );
};

export default MediumText;
