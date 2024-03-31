import React from "react";
import Layout from "@/components/Layout/Main";
import HeaderCard from "@/components/HeaderCard";
import SliderCard from "@/components/SliderCard";
import { useState } from "react";

interface Props {}
const Home: React.FC<Props> = ({}) => {
  const [theme, setTheme] = useState<boolean>(false);
  const changeTheme = () => {
    setTheme((prevState) => {
      return !prevState;
    });
  };
  return (
    <>
      <Layout theme={theme}>
        <div
          className={`max-w-[1444px] mx-auto pt-[32px] pb-[44px]  lg:pt-[64px] lg:pb-[88px]`}
        >
          <div className="flex justify-end">
            <button
              className={`p-2 mr-12 ${
                theme ? "bg-slate-500" : "bg-[#F7F7F8]"
              } ${theme ? "text-white" : "text-black"}`}
              onClick={changeTheme}
            >
              {theme ? "Dark" : "Light"}
            </button>
          </div>
          <HeaderCard theme={theme} />
          <SliderCard theme={theme} />
        </div>
      </Layout>
    </>
  );
};

export default Home;
