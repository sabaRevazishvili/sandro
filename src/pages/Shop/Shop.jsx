import React from "react";
import { collection } from "../../constants/collection";
import ShopCard from "@/components/ShopCard";

const Shop = () => {
  return (
    <main className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {collection.map((item) => (
        <ShopCard
          key={item.id}
          title={item.title}
          price={item.price}
          image={item.image}
        />
      ))}
    </main>
  );
};

export default Shop;
