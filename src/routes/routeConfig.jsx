import MainLayouts from "../layouts/MainLayouts";

import LandingPage from "../pages/LandingPage";

const routes = [
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },

    
    ],
  },
];

export default routes;
