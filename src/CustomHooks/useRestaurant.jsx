import { useParams } from "react-router-dom";
import { RESTAURANT_DETAILS } from "../../Utils/Api";
import { useEffect, useState } from "react";

const useRestaurant = () => {
  const { resId } = useParams();
  const [data, setData] = useState("");
  const getData = async () => {
    const resp = await fetch(RESTAURANT_DETAILS + resId);
    const json = await resp.json();
    setData(json);
  };
  useEffect(() => {
    getData();
  }, []);
  return data;
};

export default useRestaurant;
