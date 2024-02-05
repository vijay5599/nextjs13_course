import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

const GlobalSearch = () => {
  return (
    <div
      className="relative w-full max-w-[600px] max-lg:hidden"
      // ref={searchContainerRef}
    >
      <div className="background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4">
        <Image
          src="/assets/icons/search.svg"
          alt="search"
          width={24}
          height={24}
          className="cursor-pointer"
        />

        <Input
          type="text"
          placeholder="Search globally"
          //   value={search}/
          // onChange={(e) => {
          //   setSearch(e.target.value);

          //   if (!isOpen) setIsOpen(true);
          //   if (e.target.value === "" && isOpen) setIsOpen(false);
          // }}
          className="paragraph-regular no-focus placeholder text-dark400_light700 border-none bg-transparent shadow-none outline-none"
        />
      </div>
      {/* {isOpen && <GlobalResult />} */}
    </div>
  );
};

export default GlobalSearch;
