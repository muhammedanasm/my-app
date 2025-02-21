import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import youtubeimg from "../../assets/youtube.png";
import { MdHome } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false); // Sidebar toggle state

  const menuItems = [
    {
      path: "/",
      label: "Home",
      icon: <MdHome />,
    },
    {
      path: "",
      label: "Shorts",
      icon: <SiYoutubeshorts />,
    },
    {
      path: "",
      label: "Subscription",
      icon: <MdSubscriptions />,
    },
  ];
  const location = useLocation(); // Get the current location
  const navigate = useNavigate(); // Hook for programmatic navigation

  // Function to determine if a route is active
  const isActive = (path) => {
    return location.pathname === path;
  };
  // Function to handle navigation
  const handleNavigation = (path) => {
    navigate(path); // Navigate to the specified path
  };
  return (
    <div>
      <div className={`youtube-sidebar ${isCollapsed ? "collapsed" : ""}`}>
        <div className="logo-menu">
          <div className="menu" onClick={() => setIsCollapsed(!isCollapsed)}>
            <RxHamburgerMenu />
          </div>
          {!isCollapsed && (
            <div className="logo">
              <img src={youtubeimg} alt="YouTube Logo" />
            </div>
          )}
        </div>
        {/* nav links */}
        <div className="navlinks">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="navlink-2"
              onClick={() => handleNavigation(item.path)} // Navigate to the item's path
              style={{
                background: isActive(item.path) ? "#272727" : "transparent",
                borderRadius: "4px",
                cursor: "pointer", // Add pointer cursor for better UX
              }}
            >
              <div className="navlink-inner">
                <div className="nav1">
                  {item.icon}
                  {!isCollapsed && <p>{item.label}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
