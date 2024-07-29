import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spinner } from "@nextui-org/react";
import TrendingView from "../commons/TrendingView";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Trending = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAnime, setSelectedAnime] = useState(null);

  useEffect(() => {
    const animeRequests = async () => {
      try {
        const res = await axios.get(
          `https://kitsu.io/api/edge/trending/anime`,
          {
            params: {
              "page[limit]": 20,
              "page[offset]": 0,
            },
          }
        );
        setData(res.data.data);
        setLoading(false);
      } catch (err) {
        console.log("Error", err);
        setLoading(false);
      }
    };
    animeRequests();
  }, []);

  return (
    <div className="">
      {selectedAnime ? (
        <TrendingView
          anime={selectedAnime}
          onBack={() => setSelectedAnime(null)}
        />
      ) : (
        <div className="p-5">
          <div className="flex m-4 justify-center">
            <div className="font-bold text-5xl text-inherit text-white btn">
              TOP 10 Anime
            </div>
          </div>
          {loading ? (
            <Spinner color="secondary" labelColor="secondary" />
          ) : (
            <Swiper
              slidesPerView={5}
              spaceBetween={30}
              pagination={{ clickable: true }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {data.map((anime) => (
                <SwiperSlide key={anime.id}>
                  <div className="box ml-5">
                    <h4 className="text-2xl truncate text-white hover:text-balance focus-in-expand-fwd">
                      {anime.attributes?.titles?.en_jp}
                    </h4>
                    <img
                      src={anime.attributes?.posterImage?.medium}
                      alt={anime.attributes?.titles?.en}
                      className="object-cover rounded-xl img-border justify-self-center my-5 w-72 max-sm:w-20 max-md:w-30 max-lg:w-40 max-xl:w-65"
                      onClick={() => setSelectedAnime(anime)}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      )}
    </div>
  );
};

export default Trending;
