import React from "react";
// icons
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
// charts and buttons
import { Button, Pie, SparkLine, Stacked } from "../components";
// dummy and charts data
import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";
// context
import { useStateContext } from "./../context/ContextProvider";

const Ecommerce = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="mt-12 ">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="bg-white dark:text-gray-200 dark:bg-secondry-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-400 font-bold">Earnings</p>
              <p className="text-2xl">$323,323.32</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgcolor={currentColor}
              text="Download"
              borderradius="10px"
              size="md"
            />
          </div>
        </div>

        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((card) => (
            <div
              key={card.title}
              className="bg-white dark:text-gray-200 dark:bg-secondry-dark-bg md:w-56 p-4 pt-9 rounded-2xl"
            >
              <button
                type="button"
                style={{ color: card.iconColor, backgroundColor: card.iconBg }}
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
              >
                {card.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{card.amount}</span>
                <span className={`text-sm text-${card.pcColor} ml-2`}>
                  {card.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-1">{card.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className=" flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondry-dark-bg m-3 p-4 rounded-2xl md:w-780">
          <div className="flex justify-between">
            <p className="font-semibold text-xl capitalize">revenue updates</p>
            <div className="flex itemes-center gap-4 ">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center text-green-400 gap-2 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className="border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$85,235</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                    34%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>
              <div className="mt-8">
                <p>
                  <span className="text-3xl font-semibold">$69,122</span>
                </p>
                <p className="text-gray-500 mt-1">Expense</p>
              </div>
              <div className="mt-5 ">
                <SparkLine
                  currentColor={currentColor}
                  id="line-sparkLine"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color={currentColor}
                />
              </div>
              <div className="mt-10">
                <Button
                  color="white"
                  bgcolor={currentColor}
                  text="Download Report"
                  borderradius="10px"
                  size="md"
                />
              </div>
            </div>
            <div>
              <Stacked width="320px" height="360px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
