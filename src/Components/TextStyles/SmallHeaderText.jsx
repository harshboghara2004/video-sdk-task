import React from "react";

const SmallHeaderText = ({
    textColour = "white",
    textAlign = "center",
    opacity = 100,
    children,
}) => {
    return (
        <p
            className={`font-lato 
                text-${textColour} 
                opacity-${opacity}
                font-medium 
                text-[20px]
                text-[${textAlign}]
            `}
        >
            {children}
        </p>
    );
};

export default SmallHeaderText;
