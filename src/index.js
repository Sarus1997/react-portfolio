
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss";
import "assets/demo/demo.css";

import Index from "views/Index.js";
import CertificatePage from "views/examples/CertificatePage.js";
import ProfilePage from "views/examples/ProfilePage.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/components" element={<Index />} />
      <Route path="/certificate-page" element={<CertificatePage />} />
      <Route path="/profile-page" element={<ProfilePage />} />
      <Route path="*" element={<Navigate to="/components" replace />} />
    </Routes>
  </BrowserRouter>
);
