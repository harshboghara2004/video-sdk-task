import React from "react";

const ComplianceList = () => {
    const logos = ["hippa", "soc2", "iso", "certin", "gdpr"];
    return (
        <div className="mt-6 flex items-center justify-center gap-x-12">
            {logos.map((fileName, index) => (
                <div key={index} className="w-auto h-auto">
                    <img
                        src={`/assets/compliances/${fileName}.svg`}
                        alt={fileName.replace(".svg", "")}
                        className="w-full h-full object-cover"
                    />
                </div>
            ))}
        </div>
    );
};

export default ComplianceList;
