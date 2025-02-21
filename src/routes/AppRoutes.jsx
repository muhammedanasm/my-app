import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../component/dashboard/Dashboard";
import AuthLayout from "../layouts/AuthLayout";
import Youtube from "../pages/youtube page/Youtube";

const AppRoutes = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <AuthLayout>
                <Youtube />
              </AuthLayout>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default AppRoutes;
