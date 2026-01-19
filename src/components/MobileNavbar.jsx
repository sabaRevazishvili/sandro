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

import { routes } from "../constants/routes";
const MobileNavbar = ({ isOpen, setIsOpen }) => {
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent
        className="w-full"
        style={{ top: "clamp(4rem, 3.75rem + 1.5vw, 5rem)" }}
      >
        <SheetHeader className="p-0">
          <VisuallyHidden>
            <SheetTitle>Navigation Menu</SheetTitle>
          </VisuallyHidden>
          <SheetDescription className="flex flex-col items-start px-0">
            {routes.map((route) => (
              <Link
                key={route.title}
                to={route.path}
                onClick={() => setIsOpen(false)}
                className="button gap-4 text-black "
              >
                <route.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                {route.title}
              </Link>
            ))}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
