import React from "react";
import { TScreen } from "../../types";
import { Caroussel, SlideItem } from "../../components";
import { Projects } from "../../datas";

const HomeScreen: TScreen = (): JSX.Element => {
  return (
    <Caroussel>
      {Projects.map((item, i) => {
        return <SlideItem key={i} title={item.name} background={item.image} />;
      })}
    </Caroussel>
  );
};

export default HomeScreen;
