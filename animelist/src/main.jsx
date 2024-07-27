import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Random from "./Components/Page/Random";
import DetailView from "./Components/commons/DetailView";
import Cetagory from "./Components/Page/Cetegory";
import MidleSchool from "./Components/Page/Catagory/1/MidleSchool";
import Cycling from "./Components/Page/Catagory/2/Cycling";
import ElementarySchool from "./Components/Page/Catagory/3/ElementarySchool";
import Mermaid from "./Components/Page/Catagory/4/Mermaid";
import Android from "./Components/Page/Catagory/5/Android";
import AllGirlSchool from "./Components/Page/Catagory/6/AllGirlSchool";
import Vampire from "./Components/Page/Catagory/7/Vampire";
import Wrestling from "./Components/Page/Catagory/8/Wrestling";
import Samurai from "./Components/Page/Catagory/9/Samurai";
import Elf from "./Components/Page/Catagory/10/Elf";
import Trending from "./Components/Page/Trending";
import Favorite from "./Components/Page/Favorite";

const router = createBrowserRouter([
  { path: "/", element: <App /> },

  {
    path: "/Random",
    element: <Random />,
  },

  {
    path: "/Cetegory",
    element: <Cetegory />,
  },

  {
    path: "/Favorite",
    element: <Favorite />,
  },

  {
    path: "/DetailView",
    element: <DetailView />,
  },
  {
    path: "/Trending",
    element: <Trending />,
  },
  {
    path: "/Cetegory/MidleSchool",
    element: <MidleSchool />,
  },
  {
    path: "/Cetegory/Cycling",
    element: <Cycling />,
  },
  {
    path: "/Cetegory/ElementarySchool",
    element: <ElementarySchool />,
  },
  {
    path: "/Cetegory/Mermaid",
    element: <Mermaid />,
  },
  {
    path: "/Cetegory/Android",
    element: <Android />,
  },
  {
    path: "/Cetegory/AllGirlSchool",
    element: <AllGirlSchool />,
  },
  {
    path: "/Category/Vampire",
    element: <Vampire />,
  },
  {
    path: "/Category/Wrestling",
    element: <Wrestling />,
  },
  {
    path: "/Category/Samurai",
    element: <Samurai />,
  },
  {
    path: "/Category/Elf",
    element: <Elf />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
