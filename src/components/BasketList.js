import { useDispatch } from "react-redux";
import { descrease, increase, remove } from "../productSlice";
import Button from "./Button";

function BasketList({ list }) {
  const dispatch = useDispatch();
  function handleRemove() {
    dispatch(remove(list.id));
  }
  function handleDescrease() {
    dispatch(descrease(list.id));
  }
  function handleIncrease() {
    dispatch(increase(list.id));
  }
  return (
    <div>
      {list.length === 0 ? (
        "please add smth"
      ) : (
        <div className="grid md:grid-cols-2 sm:grid-cols-1  items-center text-center gap-x-8 bg-white h-96 ml-36 mr-36 mt-12">
          <div className="w-36 pl-8">
            <span className="line-clamp-4">{list.title}</span>
            <img className="h-24 w-24 " src={list.image} />
          </div>
          <div className="grid grid-rows-3 gap-y-4">
            <div className="">{list.totalPrice}</div>
            <div>
              <div>
                <Button type="primary" onClick={handleDescrease}>
                  -
                </Button>
                {list.quantity}{" "}
                <Button type="primary" onClick={handleIncrease}>
                  +
                </Button>
              </div>
            </div>
            <div>
              <Button type="secondary" onClick={handleRemove}>
                remove
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BasketList;
