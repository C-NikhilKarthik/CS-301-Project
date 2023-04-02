import React from "react";
import Card from "./Card";
const cards = [
  {
    title: "Space",
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274__340.jpg",
  },
  {
    title: "Space",
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274__340.jpg",
  },
  {
    title: "Space",
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274__340.jpg",
  },
  {
    title: "Space",
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274__340.jpg",
  },
  {
    title: "Space",
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274__340.jpg",
  },
  {
    title: "Space",
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274__340.jpg",
  },
];
function Interests() {
  return (
    <div className="flex flex-col h-full">
      <h1 className="text-xl font-semibold px-2">Choose your Interests</h1>
      <div className="h-full p-2  w-full overflow-y-scroll">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Interests;
