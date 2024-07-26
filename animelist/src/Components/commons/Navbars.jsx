import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
} from "@nextui-org/react";
import Swal from "sweetalert2";
import ButtonSearch from "./Button/Button-Search";

const Navbars = ({ inputData, setInputData, Dis, setDis }) => {
  const [inputText, setInputText] = useState("");

  const addInput = (e) => {
    setInputText(e.target.value);
  };

  const handleSearchClick = () => {
    if (inputText !== "") {
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Seach : ${inputText}`,
        showConfirmButton: false,
        timer: 1500,
      });
      setInputData(inputText);
      setInputText("");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <Navbar isBordered maxWidth="full" className="overflow-auto">
      <NavbarBrand className="col-span-2 w-80">
        <NavbarContent className="mr-4">
          <NavbarItem className="font-bold text-5xl text-inherit text-black focus-in-expand-fwd max-sm:text-xl max-md:text-2xl max-lg:text-3xl max-xl:text-4xl">
            AnimeList
          </NavbarItem>
        </NavbarContent>
      </NavbarBrand>

      <NavbarBrand className="flex justify-center items-center sm:flex gap-5 sm:justify-start">
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
            onClick={() => setDis(true)}
          >
            Favorite
          </Link>
        </NavbarItem>

        <NavbarItem className="px-5">
          <Link
            to="/Catagory"
            className="font-bold text-xl text-black hover:text-sky-400"
            onClick={() => setDis(true)}
          >
            Category
          </Link>
        </NavbarItem>

        <NavbarItem className="px-5">
          <Link
            to="/Random"
            className="font-bold text-xl text-black hover:text-violet-600"
            onClick={() => setDis(true)}
          >
            Random
          </Link>
        </NavbarItem>
      </NavbarBrand>

      <NavbarBrand className="flex justify-end items-center w-full">
        <NavbarItem className="flex items-center">
          <Input
            type="text"
            label="Searching.."
            size="sm"
            className="w-80"
            disabled={Dis}
            onChange={addInput}
            value={inputText}
          />
          <ButtonSearch
            handleSearchClick={handleSearchClick}
            Dis={Dis}
            inputText={inputText}
          />
        </NavbarItem>
      </NavbarBrand>
    </Navbar>
  );
};

export default Navbars;
