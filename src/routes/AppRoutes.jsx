import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routeConfig from "./routeConfig";

const router = createBrowserRouter(routeConfig);

const AppRoutes = () => {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-wine-950 text-white">
          <p className="text-gold-300">Loading...</p>
        </div>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default AppRoutes;
