import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import sandro from "../../assets/images/sandro-bg.jpg";

const Collection = () => {
  return (
    <div className="flex justify-center items-center">
      {/* <h1 className="text-4xl">Collection</h1> */}
      <Card className="overflow-hidden">
        <img src={sandro} className="w-full h-64 object-cover" />
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg">wazaaaaa</h3>
          <p className="text-gray-600">$20</p>
        </CardContent>
        {/* <CardFooter>
          <Button className="w-full">Add to Cart</Button>
        </CardFooter> */}
      </Card>
    </div>
  );
};

export default Collection;
