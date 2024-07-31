import React, { useState, useEffect } from "react";
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
  const [isMobileView, setIsMobileView] = useState(false);

  const addInput = (e) => {
    setInputText(e.target.value);
  };

  const handleSearchClick = () => {
    if (inputText !== "") {
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

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 850);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      path: "/category",
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
        {isMobileView && (
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className=" lg:hidden xl:hidden 2xl:hidden "
          />
        )}
        <NavbarBrand className="col-span-2 w-auto">
          <NavbarContent className="mr-10">
            <NavbarItem className="font-bold text-5xl text-inherit text-black focus-in-expand-fwd max-sm:text-3xl max-md:text-3xl max-lg:text-3xl max-xl:text-4xl">
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
          <NavbarItem key={item.label} className="px-0">
            <Link
              to={item.path}
              className={`font-bold text-xl text-${item.color} hover:text-${item.hoverColor}`}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
        <div className="g flex justify-center items-center">
          <Input
            type="text"
            label="Searching.."
            size="sm"
            className="w-full "
            disabled={Dis}
            onChange={addInput}
            value={inputText}
          />
          <ButtonSearch
            handleSearchClick={handleSearchClick}
            Dis={Dis}
            inputText={inputText}
          />
        </div>
      </NavbarContent>

      <NavbarMenu>
        <div className="p-4 flex justify-center items-center">
          <Input
            type="text"
            label="Searching.."
            size="sm"
            className="w-50 h-full"
            disabled={Dis}
            onChange={addInput}
            value={inputText}
          />
          <ButtonSearch
            handleSearchClick={handleSearchClick}
            Dis={Dis}
            inputText={inputText}
          />
        </div>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link
              to={item.path}
              className={`w-full text-${item.color} hover:text-${item.hoverColor}`}
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
