import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function AppLayout() {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      const res = await fetch("https://fakestoreapi.com/products");
      if (!res.ok) {
        throw Error("coluldnt find");
      }
      const data = await res.json();
      setProducts(data);
      setIsLoading(false);
    };
    fetchProduct();
  }, []);
  return (
    <div className="bg-yellow-200">
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Navbar />
          <Product products={products} />
        </div>
      )}
    </div>
  );
}

export default AppLayout;
