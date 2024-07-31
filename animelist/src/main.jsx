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
    path: "/category",
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
    path: "/category/midleSchool",
    element: <MidleSchool />,
  },
  {
    path: "/category/cycling",
    element: <Cycling />,
  },
  {
    path: "/category/elementarySchool",
    element: <ElementarySchool />,
  },
  {
    path: "/category/mermaid",
    element: <Mermaid />,
  },
  {
    path: "/category/android",
    element: <Android />,
  },
  {
    path: "/category/allgirlschool",
    element: <AllGirlSchool />,
  },
  {
    path: "/category/vampire",
    element: <Vampire />,
  },
  {
    path: "/category/wrestling",
    element: <Wrestling />,
  },
  {
    path: "/category/samurai",
    element: <Samurai />,
  },
  {
    path: "/category/elf",
    element: <Elf />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
