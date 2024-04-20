import React from "react";
import NewChat from "./NewChat";
import RecentChat from "./RecentChat";
import { assets } from "../assets/assets";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const MobileNav = ({ clicked }) => {
  const { menu_icon } = assets;
  return (
    <Sheet>
      <SheetTrigger>
        <div className="top justify-center ">
          <img
            src={menu_icon}
            alt="Menu"
            className="w-10 rounded-full hover:bg-[#E8ECF1] hover:cursor-pointer p-3 "
          />
        </div>
      </SheetTrigger>
      <SheetContent className="bg-[#F0F4F9] w-fit">
        <div className="top  justify-center pt-5 pr-3">
          <NewChat clicked={clicked} />
          <RecentChat clicked={clicked} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
