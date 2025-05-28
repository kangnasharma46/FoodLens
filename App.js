import React from "react";
import ReactDOM from "react-dom/client";
import { logo } from "./Assests/logo.png";

//Header Component

const HeaderComponent = () => {
  <div className="header">
    <div>
      <img className="header-image" src={logo}></img>
    </div>
    <ul>
      <li>Home</li>
      <li>Cart</li>
      <li>Profile</li>
    </ul>
  </div>;
};

const FoodRestaurant = () => (
  <div>
    <HeaderComponent />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FoodRestaurant />);
