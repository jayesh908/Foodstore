import { MAIN_API } from "../../Utils/Api";
import { useEffect, useState } from "react";

const useMainAPi = () => {
  const [Apidata, setApidata] = useState("");
  const GettingData = async () => {
    const resp = await fetch(MAIN_API);
    const json = await resp.json();
    if (!resp.ok) {
      throw new Error(`API request failed with status ${resp.status}`);
    }
    setApidata(json);
  };

  useEffect(() => {
    GettingData();
  }, []);

  return Apidata;
};

export default useMainAPi;
