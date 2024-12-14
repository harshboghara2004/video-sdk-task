import React from "react";

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

const SmallScreen = () => {
    return (
        <div className="lg:hidden grid sm:grid-cols-2 items-center justify-center gap-y-10">
            {list.map((fileName, index) => (
                <div key={index} className="w-auto h-auto">
                    <img
                        src={`/assets/companies/${fileName}`}
                        alt={fileName.replace(".svg", "")}
                        className="object-contain"
                    />
                </div>
            ))}
        </div>
    );
};

const LargeScreen = () => {
    return (
        <div className="hidden lg:flex mt-12 flex-row items-center justify-center gap-x-16">
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

const CompanyList = () => {
    return (
        <>
            <SmallScreen />
            <LargeScreen />
        </>
    );
};

export default CompanyList;
