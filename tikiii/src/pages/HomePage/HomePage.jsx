import React from "react";
import { WrapperTypeProduct } from "./style";
import TypeProduct from "../../TypeProduct/TypeProduct";
import SlideComponent from "../../compoments/SliderCompoment/SlideCompoment";
import slider1 from "../../assets/images/slider1.jpg";
import slider2 from "../../assets/images/slider2.jpg";
import slider3 from "../../assets/images/slider3.jpg";
const HomePage = () => {
  const arr = ["TV", "Tu lanh", "Lap top"];
  return (
    <>
    <div style={{ padding: "0 120px" }}>
      <WrapperTypeProduct>
        {arr.map((item) => {
          return <TypeProduct name={item} key={item} />;
        })}
      </WrapperTypeProduct>

      <div id="container" style={{ backgroundColor: "#efeef" ,padding:'0 120px'}}>
        <SlideComponent arrImages={[slider1, slider2, slider3]} />
      </div>
    </div>
    </>
  );
};
export default HomePage;
