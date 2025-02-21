import React from "react";
import Sidebar from "../component/sidebar/Sidebar";
import Header from "../component/header/Header";
import "./authlayout.css";

const AuthLayout = ({ children }) => {
  return (
    <div>
      <div className="layout">
        <div className="layout-section">
          <>
            <Sidebar />
          </>

          <div className="layout-head-content">
            <Header />
            <main className="content">{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
