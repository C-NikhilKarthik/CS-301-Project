import { useState } from "react";

const Card = ({ title, imageUrl }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleCardClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div
      className={`relative rounded-lg shadow-lg bg-white overflow-hidden ${
        isSelected ? "ring-4 ring-indigo-500" : ""
      }`}
      onClick={handleCardClick}
    >
      <img className="w-full h-56 object-cover" src={imageUrl} alt={title} />
      <div className="p-6 flex justify-between">
        <div className="text-lg font-medium text-gray-900">{title}</div>
        {isSelected ? (
          <span className="flex items-center justify-center w-8 h-8 bg-blue-900 rounded-full lg:h-8 lg:w-8">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-blue-400 lg:w-6 lg:h-6"
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

export default Card;
