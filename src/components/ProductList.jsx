import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";
import "./ProductList.css";

const plantData = [
  {
    category: "Indoor Plants",
    plants: [
      {
        id: 1,
        name: "Snake Plant",
        price: 299,
        image: "https://via.placeholder.com/150",
      },
      {
        id: 2,
        name: "Money Plant",
        price: 199,
        image: "https://via.placeholder.com/150",
      },
    ],
  },
  {
    category: "Outdoor Plants",
    plants: [
      {
        id: 3,
        name: "Rose Plant",
        price: 249,
        image: "https://via.placeholder.com/150",
      },
      {
        id: 4,
        name: "Hibiscus",
        price: 279,
        image: "https://via.placeholder.com/150",
      },
    ],
  },
  {
    category: "Succulents",
    plants: [
      {
        id: 5,
        name: "Aloe Vera",
        price: 159,
        image: "https://via.placeholder.com/150",
      },
      {
        id: 6,
        name: "Cactus",
        price: 129,
        image: "https://via.placeholder.com/150",
      },
    ],
  },
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div className="product-list">
      <h1>Our Plants</h1>

      {plantData.map((category, index) => (
        <div key={index} className="category-section">
          <h2>{category.category}</h2>

          <div className="plant-grid">
            {category.plants.map((plant) => (
              <div key={plant.id} className="plant-card">
                <img src={plant.image} alt={plant.name} />
                <h3>{plant.name}</h3>
                <p>₹{plant.price}</p>
                <button onClick={() => dispatch(addItem(plant))}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
