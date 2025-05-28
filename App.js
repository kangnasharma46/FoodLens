import React from "react";
import ReactDOM from "react-dom/client";
import { logo } from "./Assests/logo.png";

//Header Component
const HeaderComponent = () => (
  <div className="header">
    <div>
      <img
        className="header-image"
        src="https://cdn.pixabay.com/photo/2022/08/02/04/46/icon-7359529_1280.png"
        alt={logo}
      ></img>
    </div>
    <div className="header-menu">
      <ul>
        <li>Home</li>
        <li>Cart</li>
        <li>Profile</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
    </div>
  </div>
);

//Food Card Component
const FoodCard = () => (
  <div className="food-card">
    <img
      className="food-card-image"
      src="https://cdn.pixabay.com/photo/2023/07/12/20/40/ai-generated-8123328_1280.png"
      alt={logo}
    />
    <h3>Biryani Hub</h3>
    <h4>cuinies,indian,asian</h4>
    <h4>4.3 stars</h4>
    <h4>25min </h4>
  </div>
);

//Food Container Component
const FoodContainer = () => (
  <div className="food-container">
    <div className="food-container-search">
      <h3>search</h3>
    </div>
    <div className="food-container-card">
      <FoodCard />
    </div>
  </div>
);
const AppLayout = () => (
  <div className="appLayout">
    <HeaderComponent />
    <FoodContainer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
