/* eslint-disable react/prop-types */
import { IMAGE_URL } from "../../Utils/Api";

const Card = ({ d }) => {
  return (
    <div>
      <div className="w-64 py-2 cursor-pointer hover:scale-105 ease-in-out duration-300 ">
        <img
          className="w-60 h-40 object-cover rounded-lg bg-gradient-to-t from-black "
          src={IMAGE_URL + d?.info?.cloudinaryImageId}
          alt="Card-box"
        />
        <div>
          <h1 className="font-extrabold text-white -mt-6 px-2 ">
            {d?.info?.aggregatedDiscountInfoV3?.header
              ? d?.info?.aggregatedDiscountInfoV3?.header
              : "use Coupon %"}{" "}
            {d?.info?.aggregatedDiscountInfoV3?.subHeader}
          </h1>
        </div>
        <h1 className="font-bold ">{d?.info?.name}</h1>
        <h2 className="font-semibold">
          ✪ {d?.info?.avgRating} • {d?.info?.sla?.slaString}
        </h2>
        <p className="truncate ... text-sm">{d?.info?.cuisines.join(", ")}</p>
        <h3>{d?.info?.areaName}</h3>
      </div>
    </div>
  );
};

export default Card;
