"use client";

import { Button } from "@/components/shadcnui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/shadcnui/sheet";
import { Menu, XIcon } from "lucide-react";
import Link from "next/link";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon">
          <Menu className="size-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetClose asChild>
            <SheetTitle className="flex items-center justify-center">
              Close <XIcon />
            </SheetTitle>
          </SheetClose>
          <SheetDescription className="sr-only">Navigation</SheetDescription>
        </SheetHeader>

        <nav className="flex flex-col items-center gap-4">
          <SheetClose asChild>
            <Link
              href="/"
              className="hover:text-primary text-lg font-medium transition-colors">
              Home
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href="/"
              className="hover:text-primary text-lg font-medium transition-colors">
              About
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href="/"
              className="hover:text-primary text-lg font-medium transition-colors">
              Services
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href="/demo"
              className="hover:text-primary text-lg font-medium transition-colors">
              Demo
            </Link>
          </SheetClose>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
