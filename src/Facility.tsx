import React from "react";

interface ClinicProps {
    recruiting: boolean;
    id: string;
    name: string;
    description: string;
    url: string;
    conditions: string[];
}

const Clinic: React.FC<ClinicProps> = ({
                                           recruiting,
                                           id,
                                           name,
                                           description,
                                           url,
                                           conditions,
                                       }) => {
    const recruitingColor = recruiting ? "bg-green-500" : "bg-red-500";
    const recruitingText = recruiting ? "Recruiting" : "Not recruiting";

    return (
        <div className="bg-white shadow-md p-4 relative max-w-2xl">
            <div className="absolute top-2 left-2">
                <div
                    className={`px-1.5 py-0.5 rounded-md text-xs text-white ${recruitingColor} mr-2 mb-4`}
                >
                    {recruitingText}
                </div>
            </div>
            <div className="flex items-baseline">
                <div
                    className="border-2 border-red-600 rounded-full w-6 h-6 flex justify-center items-center text-red-600 font-bold text-md mr-2"
                    style={{ minWidth: "1.5rem" }}
                >
                    H
                </div>
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-md mb-1 text-left"
                    style={{ marginTop: "1.7rem", lineHeight: "1.2" }}
                >
                    {name}
                </a>
            </div>
            <div className="text-gray-500 text-opacity-50 text-sm absolute top-2 right-2">
                {id}
            </div>
            <div className="text-left">
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-2 break-words text-justify text-blue-600 hover:text-blue-800 visited:text-purple-600"
                >
                    {description}
                </a>
            </div>
            <div className="mt-2">
                <p className="text-gray-600 text-sm font-medium mb-1 text-left">Conditions</p>
                <div className="flex flex-wrap">
                    {conditions.map((condition, index) => (
                        <div
                            key={index}
                            className="rounded-full bg-gray-200 text-gray-700 text-sm py-1 px-2 mr-2 mb-2"
                        >
                            {condition}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Clinic;