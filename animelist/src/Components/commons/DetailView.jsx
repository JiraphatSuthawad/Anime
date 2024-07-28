import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "@nextui-org/react";
import { v4 as uuidv4 } from "uuid";
import { Image, Button } from "@nextui-org/react";

function DetailView({ anime, onBack }) {
  return (
    <div
      className="bg-h-dvh bg-cover bg-center"
      style={{
        backgroundImage: `url(${anime?.attributes?.coverImage?.original})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex justify-end ">
        <Button
          onClick={onBack}
          color="primary"
          variant="shadow"
          className="mt-10 mx-10 "
        >
          X
        </Button>
      </div>
      <Card className="m-10 bg-white/70 ">
        <div className="flex flex-col lg:flex-row justify-center items-center mb-20">
          <img
            className="m-10 rounded-xl max-h-full focus-in-expand-fwd "
            key={anime?.id}
            src={anime?.attributes?.posterImage?.medium}
            alt={anime?.attributes?.titles?.en}
            width={270}
          />

          <div className="flex flex-col justify-center items-center lg:items-start w-full lg:w-auto sm:text-lg md:text-xl">
            <div
              key={uuidv4()}
              className="text-6xl font-medium text-black px-10 pt-10 pb-2 focus-in-expand-fwd"
            >
              {anime?.attributes?.titles?.en_jp}
            </div>
            <hr className="border-black mx-10 my-2 focus-in-expand-fwd" />
            <span className="text-xl font-medium text-black px-10 focus-in-expand-fwd">
              {anime?.attributes?.titles?.ja_jp}
            </span>

            {/* ซ่อนข้อมูลเหล่านี้เมื่ออยู่หน้าจอ lg */}
            <div
              key={uuidv4()}
              className="text-3xl truncate font-medium text-black px-10 pt-10 pb-2 focus-in-expand-fwd max-sm:text-xl max-md:text-2xl max-lg:text-3xl max-xl:text-4xl hidden lg:block"
            >
              RatingAnime: {anime?.attributes?.averageRating}
            </div>
            <div className="text-xl font-medium text-black text-wrap p-10 focus-in-expand-fwd max-sm:text-lg max-md:text-2xl max-lg:text-3xl max-xl:text-4xl hidden lg:block">
              Description: {anime?.attributes?.description}
            </div>
            <div className="text-xl font-medium text-black text-clip mx-10 focus-in-expand-fwd hidden lg:block">
              AgeRating: {anime?.attributes?.ageRatingGuide}
            </div>
            <div className="text-xl font-medium text-black mx-10 focus-in-expand-fwd hidden lg:block">
              Type: {anime?.attributes?.showType}
            </div>
            <div className="text-xl font-medium text-black mx-10 text-clip focus-in-expand-fwd hidden lg:block">
              Episode: {anime?.attributes?.episodeLength}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default DetailView;
