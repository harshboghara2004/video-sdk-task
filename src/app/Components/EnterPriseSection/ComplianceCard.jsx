import React from "react";
import MediumText from "../TextStyles/MediumText";
import BodyText from "../TextStyles/BodyText";
import ComplianceList from "./ComplianceList";

const ComplianceCard = ({ svgIcon, header, description, direction }) => {
    return (
        <div
            className="w-[800px] h-[353px] px-1 py-3 relative bg-neutral-900 text-center p-6 rounded-lg shadow-lg"
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

            {/* Compliances list */}
            <ComplianceList />
        </div>
    );
};

export default ComplianceCard;
