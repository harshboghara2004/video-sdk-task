import React from "react";

const GradientRPBText = ({ children }) => {
    return (
        <span className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            {children}
        </span>
    );
};

export default GradientRPBText;
