import { useSelector } from "react-redux";
import BasketList from "./BasketList";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Button from "./Button";

function Basket() {
  const list = useSelector((store) => store.product.list);
  console.log(list);
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      list.reduce((acc, curr) => acc + Number(curr.price) * curr.quantity, 0)
    );
  }, [list]);
  return (
    <div className=" h-screen bg-yellow-200 overflow-y-auto">
      <Navbar />
      <div className="flex justify-around pt-12">
        <div className="text-center font-semibold text-xl ">
          Your Basket {list.length} Products
        </div>
        <div className="flex flex-col-2 space-x-8">
          <Button to={"/"} type="secondary">
            Continue Shopping
          </Button>
          <Button type="primary">Go to payment</Button>
        </div>
      </div>
      <div className="">
        {list.map((l) => (
          <BasketList list={l} />
        ))}
      </div>
    </div>
  );
}

export default Basket;
/*<div className="bg-yellow-200 h-screen">
      <div className="text-center pt-20">Your Basket</div>
      <div className="grid grid-cols gap-y-24 items-center h-screen text-center pl-64 bg-white mt-12 ">
        {list.map((l) => (
          <BasketList list={l} />
        ))}
        <div className=" w-64 ">
          <div className="text-center grid grid-cols gap-y-6 ">
            <h1>Basket {list.length} items</h1>
            {list.map((l) => (
              <div>
                {l.quantity}x{l.title}
              </div>
            ))}
            <h1 className="bg-red-300 rounded-md">Total {total} </h1>
            <Link to={"/"} className=" rounded-md bg-blue-200">
              Continue shopping
            </Link>

            <button className=" rounded-md bg-blue-200">
              Go to the payment
            </button>
          </div>
        </div>
      </div>
    </div>*/

/*      <div className="grid lg:grid-cols-2  pl-48  ">
        <div className="grid grid-cols gap-y-12 items-center text-center   ">
          {list.map((l) => (
            <BasketList list={l} />
          ))}
        </div>
        <div className=" w-64 bg-white rounded-lg h-1/4">
          <div className=" grid pl-4  pt-12 gap-y-6 ">
            <h1 className="text-lg text-center font-medium text-red-400">
              Basket {list.length} items
            </h1>
            {list.map((l) => (
              <div>
                <span className="text-red-400 pr-2">{l.quantity} x</span>
                {l.title}
              </div>
            ))}

            <h1 className="bg-red-300 rounded-md">Total {total} </h1>
            <Link to={"/"} className=" rounded-md bg-blue-200">
              Continue shopping
            </Link>

            <button className=" rounded-md bg-blue-200">
              Go to the payment
            </button>
          </div>
        </div>
      </div>*/
