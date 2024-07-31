import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Random from "./Components/Page/Random";
import DetailView from "./Components/commons/DetailView";
import MidleSchool from "./Components/Page/Category/1/MidleSchool";
import Cycling from "./Components/Page/Category/2/Cycling";
import ElementarySchool from "./Components/Page/Category/3/ElementarySchool";
import Mermaid from "./Components/Page/Category/4/Mermaid";
import Android from "./Components/Page/Category/5/Android";
import AllGirlSchool from "./Components/Page/Category/6/AllGirlSchool";
import Vampire from "./Components/Page/Category/7/Vampire";
import Wrestling from "./Components/Page/Category/8/Wrestling";
import Samurai from "./Components/Page/Category/9/Samurai";
import Elf from "./Components/Page/Category/10/Elf";
import Trending from "./Components/Page/Trending";
import Favorite from "./Components/Page/Favorite";
import Catagory from "./Components/Page/Category";

const router = createBrowserRouter([
  { path: "/", element: <App /> },

  {
    path: "/random",
    element: <Random />,
  },

  {
    path: "/catagory",
    element: <Catagory />,
  },

  {
    path: "/favorite",
    element: <Favorite />,
  },

  {
    path: "/detailView",
    element: <DetailView />,
  },
  {
    path: "/trending",
    element: <Trending />,
  },
  {
    path: "/catagory/midleSchool",
    element: <MidleSchool />,
  },
  {
    path: "/catagory/cycling",
    element: <Cycling />,
  },
  {
    path: "/catagory/elementarySchool",
    element: <ElementarySchool />,
  },
  {
    path: "/catagory/mermaid",
    element: <Mermaid />,
  },
  {
    path: "/catagory/android",
    element: <Android />,
  },
  {
    path: "/catagory/allgirlschool",
    element: <AllGirlSchool />,
  },
  {
    path: "/catagory/vampire",
    element: <Vampire />,
  },
  {
    path: "/catagory/wrestling",
    element: <Wrestling />,
  },
  {
    path: "/catagory/samurai",
    element: <Samurai />,
  },
  {
    path: "/catagory/elf",
    element: <Elf />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
