import ErrorPage from '../ErrorPage';
import App from '../components/App';

import { createBrowserRouter } from "react-router-dom";

import { Home } from '../components/Home/Home';
import { AboutMe } from '../components/AboutMe/AboutMe';
import { Skills } from '../components/Skills/Skills';
import { Projects } from '../components/Projects/Projects';
import { Experience } from '../components/Experience/Experience';
import { ContactMe } from '../components/ContactMe/ContactMe';


export const router = createBrowserRouter([
  {
    path: "/",
    element:  <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "home/",
        element: <Home/>,
      },
      {
        path: "about-me/",
        element: <AboutMe/>,
      },
      {
        path: "projects/",
        element: <Projects/>,
      },
      {
        path: "skills/",
        element: <Skills/>,
      },
      {
        path: "experience/",
        element: <Experience/> ,
      },
      {
        path: "contact-me/",
        element: <ContactMe/> ,
      },
    ],
  }
])