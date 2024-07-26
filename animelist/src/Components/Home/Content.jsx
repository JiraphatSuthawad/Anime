import axios from "axios";
import { useState, useEffect } from "react";
import { Button } from "@nextui-org/button";
import { v4 as uuidv4 } from "uuid";
import Navbars from "../commons/Navbars";
import { Spinner } from "@nextui-org/react";
import DetailView from "../commons/DetailView";
import { Card, CardFooter } from "@nextui-org/card";
import ButtonHR from "../commons/Button/Button-HR";
import { Pagination } from "@nextui-org/react";
import Trending from "../Page/Trending";
import { useDebounce } from "@uidotdev/usehooks";
import { Skeleton } from "@nextui-org/skeleton";

const Content = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const [offset, setOffset] = useState(
    localStorage.getItem("offset")
      ? parseInt(localStorage.getItem("offset"))
      : 0
  );
  const [currentPage, setCurrentPage] = useState(
    localStorage.getItem("currentPage")
      ? parseInt(localStorage.getItem("currentPage"))
      : 1
  );
  const [sortAZ, setSortAZ] = useState(false);
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [inputData, setInputData] = useState("");
  const debouncedSearchTerm = useDebounce(inputData, 400);
  const [dis, setDis] = useState(false);

  useEffect(() => {
    localStorage.removeItem("offset");
    localStorage.removeItem("currentPage");
    setOffset(0);
    setCurrentPage(1);
  }, []);

  const handlePageClick = (page) => {
    const newOffset = page * 20;
    setOffset(newOffset);
    setCurrentPage(page);
    localStorage.setItem("offset", newOffset);
    localStorage.setItem("currentPage", page);
  };

  useEffect(() => {
    const animeRequests = async () => {
      try {
        let url = sortAZ
          ? `https://kitsu.io/api/edge/anime?sort=ratingRank`
          : `https://kitsu.io/api/edge/anime?filter[text]=${inputData}`;

        const res = await axios.get(url, {
          params: {
            "page[limit]": 20,
            "page[offset]": offset,
          },
        });

        setData(res.data.data);
        setPageCount(Math.ceil(res.data.meta.count / 20));
        setLoading(false);

        console.log(res.data.data);
      } catch (err) {
        console.log("Error", err);
        setLoading(false);
      }
    };
    animeRequests();
  }, [offset, debouncedSearchTerm, sortAZ]);

  const sortWord = () => {
    setSortAZ(!sortAZ);
    setDis(!dis);
    setInputData("");
  };

  return (
    <div className="home-bg 2xl:w-full">
      {selectedAnime ? (
        <DetailView
          anime={selectedAnime}
          onBack={() => setSelectedAnime(null)}
        />
      ) : (
        <>
          <Navbars
            filter={filter}
            setFilter={setFilter}
            inputData={inputData}
            setInputData={setInputData}
            Dis={dis}
            setDis={setDis}
          />
          <Trending />
          <div className="flex flex-col sm:flex-row justify-between items-center m-4">
            <div className="font-bold text-4xl text-inherit text-white btn">
              Update
            </div>
            <Button
              key={uuidv4()}
              onClick={sortWord}
              color="white"
              variant="ghost"
              className="m-2 text-white text-xl sm:text-lg md:text-xl font-bold "
            >
              {sortAZ ? "Default" : "Rating"}
            </Button>
          </div>

          <div className="mb-10">
            <div className="grid grid-cols-5 gap-4 mx-10 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3 max-xl:grid-cols-4 ">
              {loading ? (
                <Spinner color="secondary" labelColor="secondary" />
              ) : (
                data.map((anime) => (
                  <div className="flex-col" key={uuidv4()}>
                    <Card className="bg-white/20">
                      <div
                        className="flex-col justify-center mx-10 cursor-pointer box"
                        onClick={() => setSelectedAnime(anime)}
                      >
                        <div className="h-8">
                          <p className="text-2xl truncate hover:text-balance text-white sm:text-lg md:text-xl">
                            {anime.attributes?.titles?.en_jp}
                          </p>
                        </div>

                        <img
                          src={anime.attributes?.posterImage?.medium}
                          alt={anime.attributes?.titles?.en}
                          className="object-cover rounded-xl img-border justify-self-center my-5 "
                          width={270}
                        />
                      </div>
                      <CardFooter className="justify-center absolute bottom-1">
                        <ButtonHR anime={anime} />
                      </CardFooter>
                    </Card>
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="flex justify-center pb-5 pt-10 bg-white/30">
            <Pagination
              showControls
              total={pageCount - 1}
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

export default Content;
