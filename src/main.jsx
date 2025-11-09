import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router/dom";
import { router } from "./routes/routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
     <Suspense fallback={<div className="text-center mt-10">Loading...</div>}></Suspense>
    <RouterProvider router={router} />
  </StrictMode>
);
