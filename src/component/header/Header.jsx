import React, { useState } from "react";
import { IoMicSharp } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { MdVideoCall } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import profile from "../../assets/user.png";
import "./header.css";

const Header = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Music",
    "Gaming",
    "Trailers",
    "Study Skills",
    "Technology",
    "Live",
    "Comedy",
    "Sports",
    "Science",
  ];
  return (
    <div>
      <div className="header">
        <div className="search-mic">
          <div className="search">
            <input type="text" />
            <IoIosSearch />
          </div>
          <div className="mic">
            <IoMicSharp size={20} />
          </div>
        </div>
        <div className="right-side">
          <MdVideoCall />
          <FaBell />
          <img src={profile} alt="profile" />
        </div>
      </div>
      <div className="subhead">
        <div className="categories">
          {categories.map((item, index) => (
            <p
              key={index}
              className={`category-item ${
                activeCategory === item ? "active" : ""
              }`}
              onClick={() => setActiveCategory(item)}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
