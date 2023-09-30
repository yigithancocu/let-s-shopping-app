import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { filterBySearch } from "../filterSlice";
import { useState } from "react";

function Navbar() {
  const list = useSelector((store) => store.product.list);
  const dispatch = useDispatch();
  const [search, setSearch] = useState();
  return (
    <div className="flex justify-around h-24 text-lg font-light items-center bg-blue-200">
      <Link to={"/"}>
        <span className="text-xl">Let's Shopping</span>
      </Link>
      <input
        onChange={(e) => {
          dispatch(filterBySearch(e.target.value));
        }}
        className="rounded-lg"
        placeholder="Search by name..."
        type="text"
      />
      <Link to={"/basket"}>
        Basket{" "}
        <span className="bg-yellow-200 rounded-xl font-semibold">
          {list.length}
        </span>{" "}
      </Link>
    </div>
  );
}

export default Navbar;
