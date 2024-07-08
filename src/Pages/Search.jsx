import Card from "@/Card/Card";
import { MAIN_API } from "../../Utils/Api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Search() {
  const [searchval, setSearchVal] = useState("");
  const [apiData, setApiData] = useState([]);
  const [searchApiData, setSearchApiData] = useState([]);

  const getApiData = async () => {
    const URL = await fetch(MAIN_API);
    const data = await URL.json();
    setApiData(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setSearchApiData(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    getApiData();
  }, []);

  const handleSearchBar = (e) => {
    setSearchVal(e.target.value);
  };

  console.log("searchValue>>>>>>>", apiData);

  const handleSearchBtn = () => {
    const FilteredData = searchApiData.filter((itemm) =>
      itemm?.info?.name.toLowerCase().includes(searchval.toLocaleLowerCase())
    );
    setApiData(FilteredData);
    setSearchVal("");
  };

  return apiData && searchApiData.length === 0 ? (
    <h1>wait...</h1>
  ) : (
    <div>
      <div className="mx-8">
        <input
          className=" mt-4 p-2 w-3/4 border border-gray-300 rounded-lg"
          placeholder="search..."
          value={searchval}
          onChange={handleSearchBar}
          onKeyUp={()=>{
            const FilteredData = searchApiData.filter((itemm) =>
              itemm?.info?.name.toLowerCase().includes(searchval.toLocaleLowerCase())
            );
            setApiData(FilteredData);

          }}
        />
        <button
          className="bg-black p-2 rounded-lg text-white mx-2"
          onClick={handleSearchBtn}
        >
          Search
        </button>
        <button
          className="bg-black p-2 rounded-lg text-white mx-2"
          onClick={() => setApiData(searchApiData)}
        >
          Clear
        </button>
      </div>

      <div className="flex flex-wrap justify-between mx-8 mt-5">
        {apiData == "" ? (
          <h1> no such data found</h1>
        ) : (
          apiData.map((d) => (
            <Link to={`/restaurants/${d?.info?.id}`} key={d?.info?.id}>
              <Card d={d} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default Search;
