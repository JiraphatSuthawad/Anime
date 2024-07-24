import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Spinner } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/button";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
} from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Divider } from "@nextui-org/divider";
import { SearchIcon } from "./Button/SearchIcon";

const Navbars = ({ inputData, setInputData, Dis }) => {
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [inputText, setInputText] = useState();

  const addInput = (e) => {
    setInputData(e.target.value);
  };

  const handleSearchClick = () => {
    setInputData(inputText);
  };

  return (
    <Navbar isBordered maxWidth="full" className=" light overflow-auto ">
      <NavbarBrand className="col-span-2 w-80 ">
        <NavbarContent className="mr-4">
          <NavbarItem className=" font-bold text-5xl text-inherit text-black focus-in-expand-fwd max-sm:text-xl max-md:text-2xl max-lg:text-3xl max-xl:text-4xl ">
            AnimeList
          </NavbarItem>
        </NavbarContent>
      </NavbarBrand>

      <NavbarBrand className=" flex justify-center items-center sm:flex gap-5 sm:justify-start">
        <NavbarItem className="px-5">
          <Link
            to="/"
            className="font-bold text-xl text-black hover:text-pink-500"
          >
            Home
          </Link>
        </NavbarItem>

        <NavbarItem className="px-5">
          <Link
            to="/Favorite"
            className="font-bold text-xl text-black hover:text-red-400"
          >
            Favorite
          </Link>
        </NavbarItem>

        <NavbarItem className="px-5">
          <Link
            to="/Catagory"
            className="font-bold text-xl text-black hover:text-sky-400"
          >
            Catagory
          </Link>
        </NavbarItem>

        <NavbarItem className="px-5">
          <Link
            to="/Random"
            className="font-bold text-xl text-black hover:text-violet-600"
          >
            Random
          </Link>
        </NavbarItem>
      </NavbarBrand>

      <NavbarBrand className="flex justify-end items-center w-full">
        <NavbarItem>
          <Input
            key="inside"
            type="text"
            label="Searching.."
            size="sm"
            className="w-4/4"
            disabled={Dis}
            onChange={addInput}
          />
        </NavbarItem>
      </NavbarBrand>
    </Navbar>
  );
};

export default Navbars;
