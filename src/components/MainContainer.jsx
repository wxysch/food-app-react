import React, { useEffect, useState } from "react";
import HomeContainer from "./HomeContainer";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import RowContainer from "./RowContainer";
import { useStateValue } from "../context/StateProvider";
import foodItems from "../context/reducer";
import MenuContainer from "./MenuContainer";
import CardContainer from "./CardContainer";

const MainContainer = () => {
  const [{ foodItems }, dispatch] = useStateValue();
  const [scrollValue, setscrollValue] = useState(0)
  useEffect(()=>{},[scrollValue])


  return (
    <div className="flex w-full h-auto flex-col items-center justify-center">
      <HomeContainer />
      <section className="w-full">
        <div className="w-full flex items-center justify-between">
          <p
            className="text-2xl font-semibold text-headingColor uppercase relative
          before:absolute before:rounded-lg before:content before:w-20 before:h-1 before:bottom-0 before:left-0 before:bg-orange-500"
          >
            Фрукты
          </p>
          <div className="hidden md:flex gap-3 items-center">
            <div className="w-8 h-8 rounded-lg bg-orange-300 items-center flex justify-center hover:cursor-pointer hover:bg-orange-500"
            onClick={()=>setscrollValue(-200)}>
              <MdChevronLeft className="text-white text-2xl" />
            </div>
            <div className="w-8 h-8 rounded-lg bg-orange-300 items-center flex justify-center hover:cursor-pointer hover:bg-orange-500"
            onClick={() => setscrollValue(200)}>
              <MdChevronRight className="text-white text-2xl" />
            </div>
          </div>
        </div>
        <RowContainer
        scrollValue={scrollValue}
          flag={true}
          data={foodItems?.filter((n) => n.category === "Фрукты")}
        />
      </section>
      <MenuContainer/>
      <CardContainer/>
    </div>
  );
};

export default MainContainer;
