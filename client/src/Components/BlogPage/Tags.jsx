import { useState } from "react";

const Tags = ({ title, imageUrl, Selected, onSelect }) => {
    const [isSelected, setIsSelected] = useState(false);

    const handleCardClick = () => {
        onSelect(!isSelected)
        setIsSelected(!isSelected);
    };
    return (
        <div
            className={`relative rounded-full text-slate-200 text-base cursor-pointer shadow-lg bg-slate-700 overflow-hidden ${isSelected ? "ring-4 ring-indigo-500" : ""
                }`}
            onClick={handleCardClick}
        >
            <div className="py-2 px-12 relative flex items-center justify-between">
                <div className="font-medium">{title}</div>
                {isSelected ? (
                    <span className="flex absolute right-1 items-center justify-center w-8 h-8 bg-blue-600 rounded-full lg:h-8 lg:w-8">
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5 text-blue-200 lg:w-6 lg:h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </span>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};

export default Tags;
