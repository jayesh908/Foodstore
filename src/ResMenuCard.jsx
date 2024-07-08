/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { IMAGE_URL } from "../Utils/Api";
import { addItem } from "../Utils/Slice";

function ResMenuCard({ md }) {
  const Dispatch = useDispatch();
  const handleAddButton = () => {
    Dispatch(addItem(md));
  };

  return (
    <div>
      <div className="flex justify-between">
        <div>
          <h1 className="font-semibold text-gray-700">
            {md?.card?.info?.name}
          </h1>
          <h2 className="font-semibold text-gray-700 text-sm">
            ₹{" "}
            {md?.card?.info?.defaultPrice / 100
              ? md?.card?.info?.defaultPrice / 100
              : md?.card?.info?.price / 100}
          </h2>
          <h1 className="text-gray-500 break-normal w-3/4">
            {md?.card?.info?.description}
          </h1>
        </div>
        <div className="w-3/12 p-4">
          <img
            className="w-full h-32 object-cover rounded-xl "
            src={IMAGE_URL + md?.card?.info?.imageId}
            alt="img-box"
          />
          <button
            className="text-green-400 font-semibold rounded-xl shadow-lg py-2 px-4 mx-10 "
            onClick={handleAddButton}
          >
            Add+
          </button>
        </div>
      </div>
      <hr className="h-px w-full mx-auto my-8 bg-gray-200 border-0 dark:bg-gray-700" />
    </div>
  );
}

export default ResMenuCard;
