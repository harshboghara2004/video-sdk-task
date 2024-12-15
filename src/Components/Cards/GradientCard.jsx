import React from "react";
import MediumText from "../TextStyles/MediumText";
import BodyText from "../TextStyles/BodyText";

const GradientCard = ({ header, description, imageUrl }) => {
    return (
        <div className="w-full h-4/5 py-8 px-2 pb-0 rounded-xl shadow-lg bg-gradient-to-b from-[#536EFFC2] to-[#D2A8FF4D] text-white flex flex-col justify-end">
            <div className="text-center">
                {/* Header */}
                <MediumText>{header}</MediumText>

                {/* Description */}
                <div className="mt-4">
                    <BodyText textColour="#A8A8A8" textSize={22} opacity={75}>
                        {description}
                    </BodyText>
                </div>
            </div>

            {/* Image */}
            <div className="flex items-center">
                <img
                    src={imageUrl}
                    alt={header}
                    className="w-fit h-fit object-cover"
                />
            </div>
        </div>
    );
};

export default GradientCard;
