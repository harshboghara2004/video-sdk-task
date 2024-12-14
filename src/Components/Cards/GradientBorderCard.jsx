import React from "react";
import BodyText from "../TextStyles/BodyText";
import MediumText from "../TextStyles/MediumText";

const GradientBorderCard = ({ svgIcon, header, description, direction }) => {
    return (
        <div
            className={`max-w-[1000px] h-full rounded-2xl bg-gradient-to-br from-[#5568FE8F] to-[#C329BE9F] p-[1.5px]`}
        >
            <div className="p-3 py-10 bg-black w-full h-full items-center rounded-2xl">
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
        </div>
    );
};

export default GradientBorderCard;
