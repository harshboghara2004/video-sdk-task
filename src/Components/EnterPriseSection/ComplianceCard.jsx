import React from "react";
import MediumText from "../TextStyles/MediumText";
import BodyText from "../TextStyles/BodyText";
import ComplianceList from "./ComplianceList";

const ComplianceCard = ({ svgIcon, header, description, direction }) => {
    return (
        <div
            className={`w-full h-auto rounded-2xl bg-gradient-to-br from-[#5568FE8F] to-[#C329BE9F] p-[1.5px]`}
        >
            <div className="px-4 py-2 bg-black w-full h-full items-center rounded-2xl">
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
                <BodyText textColour="#A8A8A8" textSize={22} opacity={75}>
                    {description}
                </BodyText>

                {/* Compliances list */}
                <ComplianceList />
            </div>
        </div>
    );
};

export default ComplianceCard;
