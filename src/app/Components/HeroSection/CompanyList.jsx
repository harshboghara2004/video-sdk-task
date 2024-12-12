import React from "react";

const CompanyList = () => {
    const list = [
        "tyho.svg",
        "okadoc.svg",
        "alan.svg",
        "icici.svg",
        "examedi.svg",
        "fynd.svg",
        "judge.svg",
        "radius.svg",
    ];

    return (
        <div className="mt-12 flex items-center justify-center gap-x-16">
            {list.map((fileName, index) => (
                <div key={index} className="w-auto h-auto">
                    <img
                        src={`/assets/companies/${fileName}`}
                        alt={fileName.replace(".svg", "")}
                        className="w-full h-full object-contain"
                    />
                </div>
            ))}
        </div>
    );
};

export default CompanyList;
