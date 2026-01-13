import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Shirt } from "lucide-react";
import { routes } from "../constants/routes";
const MobileNavbar = ({ isOpen, setIsOpen }) => {
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full mt-22">
        <SheetHeader>
          <VisuallyHidden>
            <SheetTitle>Navigation Menu</SheetTitle>
          </VisuallyHidden>
          <SheetDescription className="flex flex-col">
            {routes.map((route) => (
              <Button
                key={route.title}
                variant="ghost"
                className="justify-start gap-3"
                asChild
              >
                <Link
                  to={route.path}
                  onClick={() => setIsOpen(false)}
                  className="flex"
                >
                  <route.icon size={20} />
                  {route.title}
                </Link>
              </Button>
            ))}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
