import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import Bottom from "./Bottom";
import { useSelector } from "react-redux";

function Product({ products }) {
  const searchQuery = useSelector((store) => store.filter.searchQuery);

  let sortedProducts = products;
  if (searchQuery.length > 2) {
    sortedProducts = sortedProducts.filter((prod) =>
      prod.title.toLowerCase().includes(searchQuery)
    );
  }

  return (
    <div>
      <div>
        <ul className="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 mb-12 mt-12 w-full gap-x-8 gap-y-8">
          {sortedProducts.map((products) => (
            <ProductList products={products} key={products.id} />
          ))}
        </ul>
      </div>
      <div>
        <Bottom />
      </div>
    </div>
  );
}

export default Product;
