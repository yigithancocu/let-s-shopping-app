import { useDispatch, useSelector } from "react-redux";
import { add, getCurrentQuantityById, remove } from "../productSlice";
import { useState } from "react";
import Button from "./Button";

function ProductList({ products }) {
  const [isClicked, setIsClicked] = useState(false);
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(products.id));
  const isInCart = currentQuantity > 0;
  function handleAdd() {
    const newProduct = {
      id: products.id,
      title: products.title,
      image: products.image,
      price: products.price,
      totalPrice: products.price,
      quantity: 1,
    };
    dispatch(add(newProduct));
  }
  function handleRemove() {
    dispatch(remove(products.id));
  }
  return (
    <div className="bg-white rounded-lg h-[360px]">
      <div className="grid grid-rows-3 h-[75%]">
        <div className="text-center">{products.title}</div>
        <div className="flex justify-center">
          <img className="w-48 h-48 " src={products.image} />
        </div>
        <div className="mt-36 text-center">
          {!isInCart ? (
            <Button type="primary" onClick={handleAdd}>
              add
            </Button>
          ) : (
            <Button type="secondary" onClick={handleRemove}>
              REmove
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
