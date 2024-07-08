// import { Card, CardContent } from "../components/ui/carousel";
import useMainAPi from "@/CustomHooks/useMainAPi";
import { IMAGE_URL } from "../../Utils/Api";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

const Woym = () => {
  const apidata = useMainAPi();
  const title = apidata?.data?.cards[0]?.card?.card?.header?.title;
  const FilteredData =
    apidata?.data?.cards[0]?.card?.card?.imageGridCards?.info;

  return apidata == "" ? (
    <h1>Wait...</h1>
  ) : (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-4/5 mx-auto"
    >
      <h1 className="font-bold text-2xl p-2">{title}</h1>
      <CarouselContent>
        {FilteredData.map((d) => (
          <CarouselItem key={d?.id} className="md:basis-1/2 lg:basis-1/6">
            <div className="p-1">
              <div className="flex aspect-square items-center justify-center p-4">
                <img
                  className="cursor-pointer"
                  src={IMAGE_URL + d?.imageId}
                  alt="Food-Slider"
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Woym;
