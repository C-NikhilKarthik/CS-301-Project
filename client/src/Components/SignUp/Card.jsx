import { useState } from "react";

const Card = ({ title, description, imageUrl }) => {
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
      <img
        className="w-full h-56 object-cover"
        src={imageUrl}
        alt={title}
      />
      <div className="p-6 flex justify-end">
        <div className="text-lg font-medium text-gray-900">{title}</div>
        {/* {isSelected ? (<) : ()} */}
      </div>
    </div>
  );
};

export default Card;
