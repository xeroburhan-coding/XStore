import React from "react";
import Category from "./Category";

const Catrgories = () => {
  return (
    <div className=" py-10">
      <div className=" pb-8">
        <h1 className=" font-bold text-4xl text-gray-900">CATEGORIES</h1>
        <p className=" font-medium text-gray-400">Choose category wise</p>
      </div>
      <div className=" grid grid-cols-4 gap-8">
        <Category
          title={"MOBILE PHONES"}
          subTitle={"From $399"}
          img={"/assets/mobile.png"}
          type={"mobile"}
        />
        <Category
          title={"AUDIO DEVICES"}
          subTitle={"From $399"}
          img={"/assets/audio.png"}
          type={"audio"}
        />
        <Category
          title={"LAPTOPS"}
          subTitle={"From $399"}
          img={"/assets/laptop.png"}
          type={"laptop"}
        />
        <Category
          title={"GAMING"}
          subTitle={"From $399"}
          img={"/assets/gaming.png"}
          type={"gaming"}
        />
      </div>
    </div>
  );
};

export default Catrgories;
