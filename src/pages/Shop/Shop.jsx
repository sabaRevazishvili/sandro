import React from "react";
import { collection } from "../../constants/collection";
import CollectionCard from "@/components/CollectionCard";

const Shop = () => {
  return (
    <div className="grid grid-cols-1 px-5 gap-5 py-5">
      {collection.map((item) => (
        <CollectionCard
          key={item.id}
          title={item.title}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default Shop;
