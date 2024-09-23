import React from "react";
import logo from "../assets/logo.png";

const App = () => {
  return (
    <div>
      <div className="bg-purple-800 text-white text-center p-2 text-sm">
        🚚 With FREESHIPPING, orders of ₹ 5000+ get free shipping
      </div>
      <header className="flex justify-between items-center p-4 bg-white shadow-md">
        <div className="text-2xl font-bold text-purple-800">
          <img src={logo} alt="logo" />
        </div>
        <nav className="flex space-x-5">
          <a href="#" className="text-black">
            Personalize Prints
          </a>
          <a href="#" className="text-black">
            Artwork Print
          </a>
          <a href="#" className="text-black">
            Other Printing
          </a>
          <a href="#" className="text-black">
            Design Services
          </a>
        </nav>
        <div className="flex space-x-4">
          <button
            id="phoneBtn"
            className="bg-transparent border-none cursor-pointer text-lg"
          >
            📞
          </button>
          <button
            id="userBtn"
            className="bg-transparent border-none cursor-pointer text-lg"
          >
            👤
          </button>
          <button
            id="cartBtn"
            className="bg-transparent border-none cursor-pointer text-lg"
          >
            🛒
          </button>
        </div>
      </header>
    </div>
  );
};

export default App;
