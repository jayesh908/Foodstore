import ResMenuCard from "@/ResMenuCard";
import { clearCart, removeItem } from "../../Utils/Slice";
import { useDispatch, useSelector } from "react-redux";

function Cart() {
  const store = useSelector((store) => store?.cart?.item);
  const Dispatch = useDispatch();

  console.log("storeeeeee>>>>>", store);

  if (store.length === 0) return <h1>please Add SomeThing First</h1>;

  return (
    <>
      <div className="w-1/2 mt-16 mx-auto text-xs shadow-xl px-4 py-3 rounded-lg">
        {store.map((md) => (
          <ResMenuCard key={md?.info?.id} md={md} />
        ))}
      </div>
      <div>
        <button
          className="bg-black text-white p-2 font-semibold"
          onClick={() => Dispatch(removeItem())}
        >
          Clear
        </button>
        <button
          onClick={() => Dispatch(clearCart())}
          className="bg-black text-white p-2 font-semibold"
        >
          Clear Cart
        </button>
      </div>
    </>
  );
}

export default Cart;
