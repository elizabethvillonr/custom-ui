import PublicLayout from '../components/PublicLayout';
import PrivateLayout from '../components/PrivateLayout';
import ErrorPage from '../ErrorPage';
import App from '../components/App'

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element:  <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "private/",
        element: <PrivateLayout />,
      },
      {
        path: "public/",
        element: <PublicLayout />,
      },
    ],
  }
])