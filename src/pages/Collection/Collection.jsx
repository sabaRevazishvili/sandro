import React from "react";
import { collection } from "../../constants/collection";
import CollectionCard from "@/components/CollectionCard";

const Collection = () => {
  return (
    <div className="grid grid-cols-4 px-30 gap-5 py-5">
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

export default Collection;
