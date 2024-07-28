import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "@nextui-org/react";
import { v4 as uuidv4 } from "uuid";
import { Image, Button } from "@nextui-org/react";
import Navbars from "./Navbars";

function TrendingView({ anime, onBack }) {
  return (
    <div
      style={{
        backgroundImage: `url(${anime?.attributes?.coverImage?.original})`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex justify-end mb-10">
        <Button
          onClick={onBack}
          color="primary"
          variant="shadow"
          className="mt-10 mx-10 "
        >
          X
        </Button>
      </div>
      <Card className="m-0 bg-white/70 ">
        <div className="flex flex-col lg:flex-row justify-center items-center ">
          <img
            className="m-10 rounded-xl  focus-in-expand-fwd max-sm:h-60 max-sm:w-40"
            key={anime?.id}
            src={anime?.attributes?.posterImage?.medium}
            alt={anime?.attributes?.titles?.en}
            width={270}
          />

          <div className="flex flex-col justify-center items-center lg:items-start w-full lg:w-auto sm:text-lg md:text-xl">
            <div
              key={uuidv4()}
              className="text-6xl font-medium text-black px-10 pt-10 pb-2 focus-in-expand-fwd max-sm:text-xl max-md:text-2xl max-lg:text-3xl max-xl:text-4xl"
            >
              {anime?.attributes?.titles?.en_jp}
            </div>
            <hr className="border-black mx-10 my-2 focus-in-expand-fwd" />
            <span className="text-xl font-medium text-black px-10 focus-in-expand-fwd">
              {anime?.attributes?.titles?.ja_jp}
            </span>

            <div
              key={uuidv4()}
              className="text-3xl truncate font-medium text-black px-10 pt-10 pb-2 focus-in-expand-fwd max-sm:text-xl max-md:text-2xl max-lg:text-3xl max-xl:text-4xl "
            >
              RatingAnime: {anime?.attributes?.averageRating}
            </div>
            <div className="text-xl font-medium text-black text-wrap p-10 focus-in-expand-fwd max-sm:text-lg max-md:text-2xl max-lg:text-3xl max-xl:text-4xl ">
              Description: {anime?.attributes?.description}
            </div>
            <div className="text-xl font-medium text-black text-clip mx-10 my-5 focus-in-expand-fwd ">
              AgeRating: {anime?.attributes?.ageRatingGuide}
            </div>
            <div className="text-xl font-medium text-black mx-10 my-5 focus-in-expand-fwd ">
              Type: {anime?.attributes?.showType}
            </div>
            <div className="text-xl font-medium text-black mx-10 my-5 text-clip focus-in-expand-fwd ">
              Episode: {anime?.attributes?.episodeLength}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default TrendingView;
