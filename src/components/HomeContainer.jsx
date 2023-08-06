import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import { heroData } from "../utils/data";

const HomeContainer = () => {
  return (
    <section id="home" className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
      <div className="py-4 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-400 rounded-full p-2">
          <p className="text-base">Bike Delivery</p>
          <div className="w-6 h-6 rounded-full overflow-hidden">
            <img
              src={Delivery}
              className="w-full h-full object-contain bg-white"
              alt="delivery"
            />
          </div>
        </div>
        <p className="text-[2.5rem] lg:text-[4rem] font-bold tracking-wide text-headingColor">
          Самая быстрая доставка в
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
            твоём городе
          </span>
        </p>
        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
          veritatis consequatur! Ea, dolorum veniam! Id sequi nemo in eaque
          nostrum neque, qui quasi corporis similique error veritatis repellat
          at illo?
        </p>
        <button
          type="button"
          className="bg-orange-500 w-full px-4 py-2 rounded-lg md:w-auto cursor-pointer"
        >
          Заказать
        </button>
      </div>
      <div className="py-4 flex-1 flex items-center relative">
        <img
          src={HeroBg}
          className="ml-auto h-420 w-full lg:w-auto lg:h-650"
          alt="hero-bg"
        />
        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center px-4 md:px-12 lg:px-32 py-4 md:py-8 flex-wrap gap-4">
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.item}
                className="w-full md:w-[calc(50%-1rem)] p-2 bg-cardOverlay backdrop-blur-md flex rounded-3xl flex-col items-center justify-center"
              >
                <img src={n.imageSrc} alt="icecream" className="w-40 -mt-20" />
                <p className="text-lg font-semibold text-textColor mt-4">
                  {n.name}
                </p>
                <p className="text-sm text-lighttextGray font-semibold my-3">
                  {n.decr}
                </p>
                <p className="text-sm font-semibold text-headingColor">
                  {n.price} 
                   <span className="text-xs text-red-600">Сом</span>
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
