import React from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { motion } from "framer-motion";
import { RiRefreshFill } from "react-icons/ri";
import { BiMinus,BiPlus } from "react-icons/bi";

const CardContainer = () => {
  return (
    <div className="w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col fixed top-0 right-0 z-[101]">
      <div className="w-full flex items-center justify-between p-4 cursor-pointer">
        <motion.div whileTap={{ scale: 0.75 }} className="">
          <MdOutlineKeyboardBackspace className="text-textColor text-3xl" />
        </motion.div>
        <p className="text-textColor text-lg font-semibold">Корзина</p>
        <p
          className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md
        hover:drop-shadow-md cursor-pointer text-textColor text-base"
        >
          Очистить <RiRefreshFill />
        </p>
      </div>
      <div className="w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col">
        <div className="w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
          <div className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/ekidos.appspot.com/o/Images%2F1691160857210-cu6.png?alt=media&token=6f2cacf2-63b0-4f85-8d05-85808be4b15a"
              className="w-20 h-20 max-w-[60px] rounded-full
            object-contain"
              alt=""
            />
            <div className="glex flex-col gap-2">
              <p className="text-base text-gray-50">
                naaaameeeeee
              </p>
              <p className="text-sm block text-gray-300 font-semibold">120 сом</p>
            </div>
            <div className="group flex items-center gap-2 ml-auto cursor-pointer">
              <motion.div whileTap={{scale: 0.75}}>
                  <BiMinus className="text-gray-50"/>
              </motion.div>
              <p className="w-5 h-5 rounded-md bg-cartBg text-gray-50 flex items-center justify-center">
                1
              </p>
              <motion.div whileTap={{scale: 0.75}}>
                  <BiPlus className="text-gray-50"/>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly
        px-8 py-2">
          <div className="w-full flex items-center justify-between">
            <p className="text-gray-400 text-lg">Итог</p>
            <p className="text-gray-400 text-lg">120 сомов</p>
          </div>
          <div className="w-full flex items-center justify-between">
            <p className="text-gray-400 text-lg">Доставка</p>
            <p className="text-gray-400 text-lg">50 сомов</p>
          </div>
          <div className="w-full border-b border-gray-600 my-2"></div>
          <div className="w-full flex items-center justify-between">
            <p className="text-gray-200 text-xl font-semibold">Общая сумма</p>
            <p className="text-gray-200 text-xl font-semibold">170 сомов</p>
          </div>
          <motion.button
          whileTap={{scale: 0.8}}
          type="button"
          className="w-full p-2 rounded-full bg-yellow-500 text-gray-50 text-lg my-2">
            Проверить
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
