import React from "react";

interface CardProps {
  image: string;
  title: string;
  description: string;
  price: number;
  rating: number;
}

const Card: React.FC<CardProps> = ({ image, title, description, price, rating }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 w-64">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-md" />
      <h2 className="text-lg font-bold mt-2">{title}</h2>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
      <div className="flex justify-between items-center mt-3">
        <span className="text-red-500 font-bold">${price.toFixed(2)}</span>
        <span className="text-yellow-500 text-sm">⭐ {rating}</span>
      </div>
    </div>
  );
};

export default Card;