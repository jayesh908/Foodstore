/* eslint-disable react/prop-types */
// import { IMAGE_URL } from "../Utils/Api";
import ResMenuCard from "./ResMenuCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";

const ResAccordion = ({ dd }) => {
  return (
    <Accordion type="single" collapsible className="w-1/2 mx-auto mt-4">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          {dd?.card?.card?.title} ({dd?.card?.card?.itemCards.length})
        </AccordionTrigger>
        <AccordionContent>
          {dd?.card?.card?.itemCards.map((md) => {
            return <ResMenuCard key={md?.card?.info?.id} md={md} />;
          })}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ResAccordion;
