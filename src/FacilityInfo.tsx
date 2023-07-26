import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGlobe, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

interface FacilityProps {
    name: string;
    address: string;
    emailAddress?: string;
    websiteUrl?: string;
    locationId?: number;
}

const FacilityCard: React.FC<FacilityProps> = ({ name, address, emailAddress, websiteUrl, locationId }) => {
    return (
        <div
            className="facility-card bg-white p-2 rounded-2xl border border-white border-opacity-60 shadow-md max-w-sm relative"
        >
            {/* Triangle on the center bottom */}
            <div className="triangle-bottom absolute bottom-0 left-0 right-0 mx-auto w-0 h-0 border-t-4 border-transparent border-white"></div>
            <div className="flex justify-center items-center absolute top-0 left-0 right-0 transform -translate-y-1/2">
                <div className="border-2 border-red-600 rounded-full w-8 h-8 flex justify-center items-center text-red-600 font-bold text-lg">
                    H
                </div>
            </div>
            <h3 className="text-2xl font-semibold mb-1 break-words pt-4">
                {name}
            </h3>
            <p className="text-xs mb-2 break-words">
                {address}
            </p>
            <div className="flex flex-wrap justify-center">
                {emailAddress && (
                    <a
                        href={`mailto:${emailAddress}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mr-2"
                    >
                        <button
                            className="text-blue-500 bg-gray-200 px-3 py-2 rounded-full hover:bg-blue-500 hover:text-white transition"
                        >
                            <FontAwesomeIcon icon={faEnvelope} />
                        </button>
                    </a>
                )}
                {websiteUrl && (
                    <a
                        href={websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mr-2"
                    >
                        <button
                            className="text-blue-500 bg-gray-200 px-3 py-2 rounded-full hover:bg-blue-500 hover:text-white transition"
                        >
                            <FontAwesomeIcon icon={faGlobe} />
                        </button>
                    </a>
                )}
                {locationId && (
                    <button
                        className="text-blue-500 bg-gray-200 px-3 py-2 rounded-full hover:bg-blue-500 hover:text-white transition"
                    >
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                    </button>
                )}
            </div>
        </div>
    );
};

export default FacilityCard;