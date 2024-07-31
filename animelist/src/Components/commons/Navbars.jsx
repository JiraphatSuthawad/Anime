import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Input,
  Button,
} from "@nextui-org/react";
import Swal from "sweetalert2";
import ButtonSearch from "./Button/Button-Search";

const Navbars = ({ inputData, setInputData, Dis, setDis }) => {
  const [inputText, setInputText] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const addInput = (e) => {
    setInputText(e.target.value);
  };

  const handleSearchClick = () => {
    if (inputText !== "") {
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Search: ${inputText}`,
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

  const menuItems = [
    { label: "Home", path: "/", color: "black", hoverColor: "pink-500" },
    {
      label: "Favorite",
      path: "/favorite",
      color: "black",
      hoverColor: "red-400",
    },
    {
      label: "Category",
      path: "/catagory",
      color: "black",
      hoverColor: "sky-400",
    },
    {
      label: "Random",
      path: "/random",
      color: "black",
      hoverColor: "violet-600",
    },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      maxWidth="full"
      className="overflow-auto"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="col-span-2 w-auto">
          <NavbarContent className="mr-4">
            <NavbarItem className="font-bold text-5xl text-inherit text-black focus-in-expand-fwd max-sm:text-xl max-md:text-2xl max-lg:text-3xl max-xl:text-4xl">
              AnimeList
            </NavbarItem>
          </NavbarContent>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-5 sm:justify-start"
        justify="center"
      >
        {menuItems.map((item) => (
          <NavbarItem key={item.label} className="px-5">
            <Link
              to={item.path}
              className={`font-bold text-xl text-${item.color} hover:text-${item.hoverColor}`}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent
        justify="end"
        className="ml-auto flex justify-end items-center px-2"
      >
        <NavbarItem className="flex items-center">
          <Input
            type="text"
            label="Searching.."
            size="sm"
            className="w-full"
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
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link
              to={item.path}
              className={`w-full text-${item.color} hover:text-${item.hoverColor}`}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Navbars;
