import React from "react";

const HeaderText = ({
    textColour = "white",
    textAlign = "center",
    opacity = 100,
    children,
}) => {
    return (
        <div className="px-1 flex flex-col items-center">
            <div className="justify-center items-center">
                <p
                    className={`
                    font-lato font-bold text-5xl lg:text-6xl leading-[54px]
                    text-${textColour} 
                    text-${textAlign}
                    opacity-${opacity}
                `}
                >
                    {children}
                </p>
            </div>
        </div>
    );
};

export default HeaderText;
