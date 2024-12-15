import React from "react";

const TransparentButton = ({
    textColour = "white",
    children,
}) => {
    return (
        <button
            className={`bg-[#E6E6E633] inline-flex rounded-full px-5 py-[10px]`}
        >
            <p
                className={`text-{${textColour}} text-opacity-70 text-sm font-medium`}
            >
                {children}
            </p>
        </button>
    );
};

export default TransparentButton;
