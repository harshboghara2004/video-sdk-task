import React from "react";

const ComplianceList = () => {
    const logos = ["hippa", "soc2", "iso", "certin", "gdpr"];
    return (
        <div className="w-full mt-6 px-8 grid grid-cols-2 md:flex-1 md:grid-cols-3 lg:grid-cols-5 items-center md:justify-between gap-2 gap-y-8">
            {logos.map((fileName, index) => (
                <div
                    key={index}
                    className="col-span-1 flex items-center justify-center"
                >
                    <img
                        src={`/assets/compliances/${fileName}.svg`}
                        alt={fileName.replace(".svg", "")}
                        className="object-cover"
                    />
                </div>
            ))}
        </div>
    );
};

export default ComplianceList;
