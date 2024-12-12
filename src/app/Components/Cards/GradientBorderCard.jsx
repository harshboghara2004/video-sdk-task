import React from "react";
import BodyText from "../TextStyles/BodyText";
import MediumText from "../TextStyles/MediumText";

const GradientBorderCard = ({ svgIcon, header, description, direction }) => {
    return (
        <div
            className="w-[326px] h-auto px-1 py-4 relative bg-neutral-900 text-center p-6 rounded-lg shadow-lg max-w-sm mx-auto"
            style={{
                border: `2px solid`,
                borderImage: `linear-gradient(${direction}, #5568FE8F, #C329BE9F) 1`,
            }}
        >
            {/* Icon */}
            <div className="mt-6 flex justify-center mb-4">
                <img
                    src={`/assets/enterprise/${svgIcon}.svg`}
                    alt=""
                    className="w-[60px] h-[60px] object-cover"
                />
            </div>

            {/* Header */}
            <MediumText>{header}</MediumText>

            {/* Description */}
            <BodyText>{description}</BodyText>
        </div>
    );
};

export default GradientBorderCard;
