import React, { useEffect, useRef } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import NotFound from '../img/NotFound.svg'

const RowContainer = ({ flag, data, scrollValue }) => {
  console.log(data);
  const rowContainer = useRef();
  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);
  return (
    <div
      ref={rowContainer}
      className={`w-full scroll-smooth gap-3 flex items-center my-12 cartBg ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex-wrap justify-center"
      }`}
    >
      {data && data.length>0 ? 
        data.map((item) => (
          <div
            key={item.id}
            className="w-300 min-w-[300px] md:min-w-[340px] md:w-340 my-12 h-[225px]
            bg-gray-200 rounded-lg p-2 backdrop-blur-lg flex flex-col items-center justify-between"
          >
            <div className="w-full flex items-center justify-between">
              <motion.div whileHover={{scale : 1.2}} className="w-40 h-40 -mt-8 drop-shadow-2xl">
              <img
                src={item?.imageURL}
                alt=""
              />
              </motion.div>
              <div className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer bg-red-600">
                <MdShoppingBasket className="text-white" />
              </div>
            </div>
            <div className="w-full flex flex-col items-end justify-end">
              <p className="text-textColor font-semibold text-base md:text-lg">
                {item?.title}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {item?.calories} Калорий
              </p>
              <div className="flex gap-8 items-center">
                <p className="text-lg text-textColor font-semibold">
                  {item?.price}{" "}
                  <span className="text-red-500 text-sm">Сом</span>
                </p>
              </div>
            </div>
          </div>
        )) : (
          <div className="w-full flex flex-col items-center justify-center">
            <img src={NotFound} className="h-340" alt="" />
            <p className="text-xl text-headingColor font-semibold my-2">Меню недоступно</p>
          </div>
        )}
    </div>
  );
};

export default RowContainer;
