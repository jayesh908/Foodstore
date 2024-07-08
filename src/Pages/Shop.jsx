import ResAccordion from "../ResAccordion";
import useRestaurant from "../CustomHooks/useRestaurant";

const Shop = () => {
  const data = useRestaurant();
  if (!data?.data) {
    // Handle missing data
    return [];
  }
  const FilteredData = data?.data?.cards[2]?.card?.card?.info;
  const AccordionTitle =
    data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (e) =>
        e.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log("accordion title>>>>>>>", AccordionTitle);
  return AccordionTitle.length === 0 ? (
    <h1>wait...</h1>
  ) : (
    <>
      <div>
        <h1 className="font-bold text-lg mx-auto w-1/2 mt-14 ">
          {FilteredData?.name}
        </h1>
        <div className="w-1/2 mx-auto py-3 shadow-2xl rounded-xl mt-2">
          <div className="ml-3">
            <h1 className="font-semibold ">
              ✪ {FilteredData?.avgRating} ({FilteredData?.totalRatingsString}) •{" "}
              {FilteredData?.costForTwoMessage}
            </h1>
            <h1 className="font-semibold text-orange-500 truncate ... text-sm">
              {FilteredData?.cuisines.join(", ")}
            </h1>
            <h2 className="text-sm font-semibold py-2">
              {FilteredData?.areaName}
            </h2>
            <h2 className="text-sm font-semibold pb-4">
              {FilteredData?.sla?.slaString}
            </h2>
            <h3 className="text-xs font-semibold text-gray-600">
              {FilteredData?.sla?.lastMileTravelString} | ₹37 Delivery fee will
              apply
            </h3>
          </div>
        </div>
      </div>

      {/* -------Accordion Menu------------------------- */}
      <hr className="h-[2px] w-1/2 mx-auto my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <h1 className="text-gray-600 font-semibold text-center">MENU</h1>
      {AccordionTitle.map((dd, ind) => {
        return <ResAccordion key={ind} dd={dd} />;
      })}
    </>
  );
};

export default Shop;
