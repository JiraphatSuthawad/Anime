import React from "react";
import Navbars from "../../../commons/Navbars";
import axios from "axios";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Card, CardFooter, Spinner } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/button";
import Id from "./Id";
import DetailView from "../../../commons/DetailView";
import ReactPaginate from "react-paginate";
import {
  Pagination,
  PaginationItem,
  PaginationCursor,
} from "@nextui-org/react";
import ButtonHR from "../../../commons/Button/Button-HR";
import { Skeleton } from "@nextui-org/react";

const Cycling = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortAZ, setSortAZ] = useState(false);
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const animeIds = Id[0].data.map((anime) => anime.id);

  useEffect(() => {
    localStorage.removeItem("offset");
    localStorage.removeItem("currentPage");
    setOffset(0);
    setCurrentPage(1);
  }, []);

  const handlePageClick = (page) => {
    setLoading(true);
    const newOffset = page * 20;
    setTimeout(() => {
      setOffset(newOffset);
      setCurrentPage(page);
      localStorage.setItem("offset", newOffset);
      localStorage.setItem("currentPage", page);
    }, 1000);
  };

  useEffect(() => {
    const animeRequests = async () => {
      try {
        const res = await axios.get(`https://kitsu.io/api/edge/anime`, {
          params: {
            "page[limit]": 20,
            "page[offset]": offset,
            "filter[id]": animeIds.join(","),
          },
        });
        setData(res.data.data);
        setPageCount(Math.ceil(res.data.meta.count / 20));
        setLoading(false);
      } catch (err) {
        console.log("Error", err);
        setLoading(false);
      }
    };
    animeRequests();
  }, [offset]);

  const filteredData = data
    .filter((anime) => {
      const title = anime.attributes?.titles?.en_jp?.toLowerCase() || "";
      return title.includes(filter.toLowerCase());
    })

    .sort((a, b) => {
      const titleA = a.attributes?.titles?.en_jp?.toLowerCase() || "";
      const titleB = b.attributes?.titles?.en_jp?.toLowerCase() || "";
      if (sortAZ) {
        if (titleA < titleB) return -1;
        if (titleA > titleB) return 1;
        return 0;
      }
      return 0;
    });
  return (
    <div className=" home-bg">
      {selectedAnime ? (
        <DetailView
          anime={selectedAnime}
          onBack={() => setSelectedAnime(null)}
        />
      ) : (
        <>
          <Navbars />

          <div className="flex justify-between items-center m-8">
            <div className=" font-bold text-4xl text-inherit text-white box ">
              Cycling
            </div>
            <Button
              onClick={() => setSortAZ(!sortAZ)}
              color="white"
              variant="ghost"
              className="m-2 text-white text-2xl font-bold"
            >
              {sortAZ ? "Default" : "A-Z"}
            </Button>
          </div>

          <div>
            <div className="grid grid-cols-5 gap-4 mx-10 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3 max-xl:grid-cols-4">
              {loading ? (
                <>
                  {Array.from({ length: 20 }).map((_, index) => (
                    <Skeleton key={index} className="rounded-lg ">
                      <Card className="w-[200px] space-y-5 p-4" radius="lg">
                        <Skeleton className="rounded-lg">
                          <div className="h-24 rounded-lg bg-default-300"></div>
                        </Skeleton>
                        <div className="space-y-3">
                          <Skeleton className="w-3/5 rounded-lg">
                            <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                          </Skeleton>
                          <Skeleton className="w-4/5 rounded-lg">
                            <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                          </Skeleton>
                          <Skeleton className="w-2/5 rounded-lg">
                            <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                          </Skeleton>
                        </div>
                      </Card>
                    </Skeleton>
                  ))}
                </>
              ) : (
                filteredData.map((anime) => (
                  <Card className="bg-white/20">
                    <div
                      className="flex-col justify-center mx-10 cursor-pointer box "
                      key={uuidv4()}
                      onClick={() => setSelectedAnime(anime)}
                    >
                      <div className="h-8">
                        <p className="text-2xl truncate hover:text-balance text-white sm:text-lg md:text-xl">
                          {anime.attributes?.titles?.en_jp}
                        </p>
                      </div>

                      <img
                        key={uuidv4()}
                        src={anime.attributes?.posterImage?.medium}
                        alt={anime.attributes?.titles?.en}
                        className="object-cover rounded-xl img-border justify-self-center my-5 "
                        width={270}
                        onLoad={() => setLoading(false)}
                      />
                    </div>
                    <CardFooter className="justify-center absolute bottom-1">
                      <ButtonHR anime={anime} />
                    </CardFooter>
                  </Card>
                ))
              )}
            </div>
          </div>
          <div className="flex justify-center pb-5 pt-10 bg-white/30 ">
            <Pagination
              showControls
              total={pageCount}
              initialPage={currentPage}
              onChange={handlePageClick}
              color="secondary"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Cycling;
