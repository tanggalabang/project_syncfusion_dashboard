import { createBrowserRouter, Navigate } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import SurveyPublicView from "./views/SurveyPublicView";
// import Surveys from "./views/Surveys";
// import SurveyView from "./views/SurveyView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: '/dashboard',
        element: <Navigate to="/" />
      },
      {
        path: "/",
        element: <DefaultLayout />,
      },
      // {
      //   path: "/surveys",
      //   element: <Surveys />,
      // },
      // {
      //   path: "/surveys/create",
      //   element: <SurveyView />,
      // },
      // {
      //   path: "/surveys/:id",
      //   element: <SurveyView />,
      // },
    ],
  },
  {
    path: "/",
    element: <GuestLayout/>,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      // {
      //   path: "/signup",
      //   element: <Signup />,
      // },
    ],
  },
  // {
  //   path: "/survey/public/:slug",
  //   element: <SurveyPublicView />,
  // },
]);

export default router;
