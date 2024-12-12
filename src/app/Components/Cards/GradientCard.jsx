import React from "react";
import MediumText from "../TextStyles/MediumText";
import BodyText from "../TextStyles/BodyText";

const GradientCard = ({ header, description, imageUrl }) => {
    return (
        <div className="py-8 px-1 pb-0 rounded-lg shadow-lg bg-gradient-to-b from-blue-600 to-purple-900 text-white max-w-md">
            <div className="text-center">
                {/* Header */}
                <MediumText>Global mesh network</MediumText>

                {/* Description */}
                <BodyText>
                    Handle massive concurrent meetings volumes extra content
                    here
                </BodyText>
            </div>

            {/* Image */}
            <div className="flex items-center">
                <img
                    src={imageUrl}
                    alt={header}
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
};

export default GradientCard;
