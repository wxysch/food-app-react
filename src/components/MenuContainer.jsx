import React, { useEffect, useState } from "react";
import { IoFastFood } from "react-icons/io5";
import { categories } from "../utils/data";

const MenuContainer = () => {
  const [filter, setFilter] = useState("Карри");
  return (
    <section id="menu" className="w-full">
      <div className="w-full flex flex-col items-center justify-center">
        <p
          className="text-2xl font-semibold text-headingColor uppercase relative
          before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:bottom-0 before:left-0
          before:bg-orange-500 mr-auto"
        >
          Наше меню
        </p>
        <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none">
          {categories &&
            categories.map((category) => (
              <div
                key={category.id}
                onClick={()=> setFilter(category.urlParamName)}
                className={`group ${
                  filter === category.urlParamName ? "bg-cartNumBg" : "bg-white"
                } hover:bg-cartNumBg w-24 min-w-[94px] h-28 cursor-pointer
                rounded-lg drop-shadow-lg flex flex-col gap-3 items-center justify-center`}
              >
                <div
                  className={`w-10 h-10 rounded-full ${
                    filter === category.urlParamName
                      ? "bg-card"
                      : "bg-cartNumBg"
                  } flex group-hover:bg-white items-center justify-center`}
                >
                  <IoFastFood className={`${filter === category.urlParamName ? 'text-textColor' : 'text-white'} group-hover:text-textColor text-xl`} />
                </div>
                <p className={`text-md ${filter === category.urlParamName ? 'text-white' : 'text-textColor'} group-hover:text-white`}>
                  {category.name}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default MenuContainer;