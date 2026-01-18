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
          <SheetDescription className="flex flex-col px-0">
            {routes.map((route) => (
              <Button
                key={route.title}
                variant="ghost"
                className="justify-start gap-3 px-5!"
                asChild
              >
                <Link
                  to={route.path}
                  onClick={() => setIsOpen(false)}
                  className="flex "
                >
                  <route.icon className="w-6 h-6 sm:w-8 sm:h-8" />
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
