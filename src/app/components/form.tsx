"use client"
import React, { useState } from "react";
import Card from "./card";

export default function Ecommercehero() {
  interface CardProps {
    image: string;
    title: string;
    description: string;
    price: number;
    rating: number;
  }

  const products: CardProps[] = [
    {
      image: "https://via.placeholder.com/150",
      title: "Product 1",
      description: "This is the description for Product 1.",
      price: 19.99,
      rating: 4.2,
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Product 2",
      description: "This is the description for Product 2.",
      price: 29.99,
      rating: 4.5,
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Product 3",
      description: "This is the description for Product 3.",
      price: 39.99,
      rating: 4.8,
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Product 4",
      description: "This is the description for Product 4.",
      price: 49.99,
      rating: 4.9,
    },
  ];

  const [filteredProducts, setFilteredProducts] = useState<CardProps[]>(products);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortOption, setSortOption] = useState<string>("price");

  // Handle search functionality
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  // Handle sorting functionality
  const handleSort = (option: string) => {
    setSortOption(option);
    const sorted = [...filteredProducts].sort((a, b) =>
      option === "price" ? a.price - b.price : b.rating - a.rating
    );
    setFilteredProducts(sorted);
  };

  return (
    <div className="w-screen h-screen justify-center">
      {/* Header Section */}
      <div className="w-full h-[20%] bg-red-400 flex items-center justify-around">
        <h1 className="text-3xl text-white">E-commerce</h1>
        <div className="flex gap-2 items-center">
          <input
            type="text"
            placeholder="Search products..."
            className="bg-white h-[70%] px-3 py-1 rounded-2xl"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <button className="bg-red-300 cursor-pointer py-1 px-3 rounded-full">
            Search
          </button>
        </div>
      </div>

      {/* Filter and Sort Section */}
      <div className="h-[10%] w-full bg-red-300 flex justify-center gap-6 items-center">
        <h1 className="text-6xl text-white">Discover Your New Escapade</h1>
        <button className="bg-white py-2 px-6 rounded-full text-red-400 hover:bg-red-300">
          Shop Now
        </button>
        <select
          className="bg-white py-2 px-4 rounded-full"
          value={sortOption}
          onChange={(e) => handleSort(e.target.value)}
        >
          <option value="price">Sort by Price</option>
          <option value="rating">Sort by Rating</option>
        </select>
      </div>

      {/* Product List Section */}
      <div className="flex flex-wrap justify-center gap-6 mt-6">
        {filteredProducts.map((product, index) => (
          <Card
            key={index}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </div>
    </div>
  );
}