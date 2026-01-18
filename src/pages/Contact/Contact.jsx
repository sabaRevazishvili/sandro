import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Facebook, AtSign, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-shop-now flex justify-center items-center min-h-screen">
      <Card>
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-2 justify-center">
          <Button variant="outline" size="icon" asChild>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="mailto:contact@example.com">
              <AtSign />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </a>
          </Button>
        </CardContent>
        <CardFooter className="justify-center">
          <Button asChild variant="secondary">
            <Link to="/Main">Go Back To Main</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Contact;
