import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalListQuantity } from "../productSlice";

function Bottom() {
  const totalListQuantity = useSelector(getTotalListQuantity);
  const list = useSelector((store) => store.product.list);

  if (!totalListQuantity) return null;
  return (
    <div className="fixed bottom-0  bg-yellow-300 w-full h-8 text-right sm:pr-28 lg:pr-96 text-stone-800 font-semibold">
      <div className="pt-1">
        <span>You added {list.length} products to basket </span>
        <Link className="bg-white rounded-lg" to={"/basket"}>
          Go to Basket {"-->"}{" "}
        </Link>
      </div>
    </div>
  );
}

export default Bottom;
