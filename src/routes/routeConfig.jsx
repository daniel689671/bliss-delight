import MainLayouts from "../layouts/MainLayouts";
import Dmoin from "../pages/Dmoin";

import LandingPage from "../pages/LandingPage";

const routes = [
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        index: true,
        element: <Dmoin />,
      },
      {
        path: "/dmoin",
        element: <LandingPage />,
      },
    ],
  },
];

export default routes;
