import useMainAPi from "@/CustomHooks/useMainAPi";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import Card from "../Card/Card";
import { Link } from "react-router-dom";

const Trc = () => {
  const apidata = useMainAPi();
  const FilteredData =
    apidata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants;

  return apidata == "" ? (
    <h1>Wait...</h1>
  ) : (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-4/5 mx-auto"
    >
      <h1 className="font-bold text-2xl p-2">Top restaurant chains in Delhi</h1>
      <CarouselContent>
        {FilteredData.map((d) => (
          <Link key={d?.info?.id} to={`/restaurants/${d?.info?.id}`}>
            <CarouselItem className="md:basis-1/2 lg:basis-1/4">
              <Card d={d} />
            </CarouselItem>
          </Link>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
export default Trc;
