/* eslint-disable react/prop-types */
import { X } from "lucide-react";

const FilterPop = ({ onClose, FilteredData, onFilteredData }) => {
  const handleFilterBtn = () => {
    const Filtered = FilteredData.filter(
      (items) => items?.info?.avgRating > 4.0
    );

    onFilteredData(Filtered);
  };

  return (
    <div className="fixed inset-0 bg-white bg-opacity-30 flex justify-center items-center backdrop-blur-sm">
      <div className="mt-10 flex flex-col gap-5 bg-white rounded-lg w-72 h-60 border border-gray-400">
        <button className="place-self-end" onClick={onClose}>
          <X />
        </button>

        <h1 className="font-bold px-2">Filter</h1>
        <div className="flex justify-between mx-4">
          <h1>4.0+ ratings Food</h1>
          <button
            className="bg-gray-800 px-2 py-1 text-sm font-semibold rounded-lg text-white"
            onClick={handleFilterBtn}
          >
            click
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterPop;
