import { createContext, useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NewInStore from "./Components/NewInStore/NewInStore";

import NavBar from "./Components/NavBar/NavBar";
import MainDashBoard from "./Components/MainDashBoard/MainDashBoard";
import {
  PaymentContext,
  UserNameContext,
} from "./Components/ContextAPI/PaymentSectionContext";

function App() {
  const displayStudentList = [
    {
      product_id: 1,
      name: "Smartphone",
      description: "High-end smartphone with advanced features.",
      price: 599.99,
      unit: "Piece",
      image: "https://example.com/images/smartphone.jpg",
      discount: 10,
      availability: true,
      brand: "BrandX",
      category: "Electronics",
      rating: 4.5,
      reviews: [
        {
          user_id: 1,
          rating: 5,
          comment: "Great phone with a superb camera!",
        },
        {
          user_id: 2,
          rating: 4,
          comment: "Good performance, but the battery life could be better.",
        },
      ],
    },
    {
      product_id: 2,
      name: "Laptop",
      description: "Powerful laptop for work and gaming.",
      price: 999.99,
      unit: "Piece",
      image: "https://example.com/images/laptop.jpg",
      discount: 5,
      availability: true,
      brand: "BrandY",
      category: "Electronics",
      rating: 4.7,
      reviews: [
        {
          user_id: 3,
          rating: 5,
          comment: "Excellent laptop for gaming and work tasks.",
        },
        {
          user_id: 4,
          rating: 4,
          comment: "Good value for the price.",
        },
      ],
    },
    {
      product_id: 3,
      name: "Wireless Headphones",
      description: "Premium wireless headphones with noise-cancellation.",
      price: 149.99,
      unit: "Piece",
      image: "https://example.com/images/headphones.jpg",
      discount: 15,
      availability: true,
      brand: "SoundMasters",
      category: "Electronics",
      rating: 4.8,
      reviews: [
        {
          user_id: 5,
          rating: 5,
          comment: "Top-notch sound quality and comfort.",
        },
        {
          user_id: 6,
          rating: 4,
          comment: "Impressive noise-cancellation, but a bit pricey.",
        },
      ],
    },
    {
      product_id: 4,
      name: "Smartwatch",
      description: "Feature-packed smartwatch with fitness tracking.",
      price: 199.99,
      unit: "Piece",
      image: "https://example.com/images/smartwatch.jpg",
      discount: 10,
      availability: true,
      brand: "TechWear",
      category: "Wearables",
      rating: 4.6,
      reviews: [
        {
          user_id: 7,
          rating: 4,
          comment: "Great value for the features it offers.",
        },
        {
          user_id: 8,
          rating: 5,
          comment: "Sleek design and accurate fitness tracking.",
        },
      ],
    },
    {
      product_id: 5,
      name: "Professional DSLR Camera",
      description: "High-quality DSLR camera for photography enthusiasts.",
      price: 499.99,
      unit: "Piece",
      image: "https://example.com/images/camera.jpg",
      discount: 5,
      availability: true,
      brand: "PhotoPro",
      category: "Cameras",
      rating: 4.9,
      reviews: [
        {
          user_id: 9,
          rating: 5,
          comment: "Exceptional image quality and versatility.",
        },
        {
          user_id: 10,
          rating: 4,
          comment: "A bit heavy, but the results are worth it.",
        },
      ],
    },
    {
      product_id: 6,
      name: "Smart TV",
      description: "High-definition smart TV with built-in streaming apps.",
      price: 799.99,
      unit: "Piece",
      image: "https://example.com/images/tv.jpg",
      discount: 8,
      availability: true,
      brand: "ViewTech",
      category: "Electronics",
      rating: 4.7,
      reviews: [
        {
          user_id: 11,
          rating: 5,
          comment: "Stunning picture quality and user-friendly interface.",
        },
        {
          user_id: 12,
          rating: 4,
          comment: "A great addition to our home entertainment setup.",
        },
      ],
    },
    {
      product_id: 7,
      name: "Tablet",
      description: "Compact tablet for productivity and entertainment.",
      price: 299.99,
      unit: "Piece",
      image: "https://example.com/images/tablet.jpg",
      discount: 12,
      availability: true,
      brand: "TabTech",
      category: "Electronics",
      rating: 4.4,
      reviews: [
        {
          user_id: 13,
          rating: 4,
          comment:
            "Good value for the price, but the battery life could be better.",
        },
        {
          user_id: 14,
          rating: 5,
          comment: "Ideal for both work and entertainment on the go.",
        },
      ],
    },
    {
      product_id: 8,
      name: "Gaming Console",
      description: "Next-gen gaming console for immersive gaming experiences.",
      price: 399.99,
      unit: "Piece",
      image: "https://example.com/images/console.jpg",
      discount: 10,
      availability: true,
      brand: "GameX",
      category: "Gaming",
      rating: 4.8,
      reviews: [
        {
          user_id: 15,
          rating: 5,
          comment: "Incredible gaming performance and graphics.",
        },
        {
          user_id: 16,
          rating: 4,
          comment: "A must-have for gaming enthusiasts.",
        },
      ],
    },
    {
      product_id: 9,
      name: "Energy-Efficient Refrigerator",
      description: "Modern refrigerator with energy-saving features.",
      price: 599.99,
      unit: "Piece",
      image: "https://example.com/images/refrigerator.jpg",
      discount: 5,
      availability: true,
      brand: "CoolTech",
      category: "Appliances",
      rating: 4.6,
    },
  ];
  const name = "Niharika";

  const userName = "Steve Jobs";

  return (
    <>
      <UserNameContext.Provider value={{ name, userName }}>
        <PaymentContext.Provider value={{ displayStudentList,userName }}>
          <NavBar />
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Home
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Profile
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                Contact
              </button>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              Shivakumar
              <MainDashBoard />
            </div>
            <div
              class="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              Niharika
              <NewInStore />
            </div>
            <div
              class="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              Srikanth
            </div>
          </div>
          Get Your Home Needs New In Store dispaly chedda m aukuntunna
        </PaymentContext.Provider>
      </UserNameContext.Provider>
    </>
  );
}

export default App;

//                   js obj or arrya 
// Redux Predictable State.         Management Library

// Redux(boilerplate code ).  100 lines 

// --- Redux-toolkit 30 lines 

// 99.9%