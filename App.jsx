import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Kennel from "./pages/Kennel";
import Tasks from "./pages/Tasks";
import Shop from "./pages/Shop";
import Breeding from "./pages/Breeding";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-800">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kennel" element={<Kennel />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/breeding" element={<Breeding />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}