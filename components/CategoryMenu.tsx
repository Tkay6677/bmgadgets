// *********************
// Role of the component: Category wrapper that will contain title and category items
// Name of the component: CategoryMenu.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <CategoryMenu />
// Input parameters: no input parameters
// Output: section title and category items
// *********************

import React from "react";
import CategoryItem from "./CategoryItem";
import Image from "next/image";
import { categoryMenuList } from "@/lib/utils";
import Heading from "./Heading";

const CategoryMenu = () => {
  return (
    <div className="py-10 bg-black">
      {/* <Heading title="TOP CATEGORIES" /> */}
      <h2 className="text-white text-7xl font-extrabold text-center mt-20 max-lg:text-5xl">TOP <span className="text-red-500">CATEGORIES</span></h2>
      <div className="max-w-screen-2xl mx-auto py-10 gap-x-5 px-16 max-md:px-10 gap-y-5 grid grid-cols-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-[450px]:grid-cols-1">
        {categoryMenuList.map((item) => (
          <CategoryItem title={item.title} key={item.id} href={item.href} image={item.src}/>
          //   <Image src={item.src} width={48} height={48} alt={item.title} />
          // </CategoryItem>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;