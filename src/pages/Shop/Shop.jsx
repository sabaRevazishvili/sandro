import React from "react";
import { collection } from "../../constants/collection";
import ShopCard from "@/components/ShopCard";
import { useCart } from "../../context/useCart";

const Shop = () => {
  const { state } = useCart();

  console.log(state);

  return (
    <main className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {collection.map((item) => (
        <ShopCard key={item.id} item={item} />
      ))}
    </main>
  );
};

export default Shop;
