import React from "react";
import { Button } from "@nextui-org/button";
import { SearchIcon } from "./SearchIcon";

function ButtonSearch({ handleSearchClick, Dis }) {
  return (
    <Button
      onClick={handleSearchClick}
      disabled={Dis}
      color="white"
      variant="ghost"
      className="mx-3 font-bold text-lg text-black h-12 bg-white"
    >
      <SearchIcon />
    </Button>
  );
}

export default ButtonSearch;
