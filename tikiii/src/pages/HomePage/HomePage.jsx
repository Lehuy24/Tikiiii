import React from "react";
import CardComponent from "../../compoments/CardComponent/CardComponent";
import { WrapperTypeProduct, WrappperButtonMore } from "./style";
import TypeProduct from "../../TypeProduct/TypeProduct";
import SlideComponent from "../../compoments/SliderCompoment/SlideCompoment";
import slider1 from "../../assets/images/slider1.jpg";
import slider2 from "../../assets/images/slider2.jpg";
import slider3 from "../../assets/images/slider3.jpg";
import NavbarCompoment from "../../compoments/NavbarCompoment/NavbarCompoment";
import ButtonCompoment from "../../compoments/ButtonCompoment/ButtonCompoment"
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

        <div
          id="container"
          style={{
            backgroundColor: "#efeef",
            padding: "0 120px",
            height: "1000px",
            width:"100%",
            justifyContent:"center"
          }}
        >
          <SlideComponent arrImages={[slider1, slider2, slider3]} />
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              alignItems: "center",
              flexWrap:'wrap',
              gap:"30px"
            }}
          >
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </div>
          <div style={{width:"100%",display:'flex',alignItems:'center',marginTop:'10px',justifyContent:"center"}}>
          <WrappperButtonMore textButton ="Xem thêm" type="outline"
          styleButton={{
            border:'1px solid rgb(11,116,229)',
            color:'rgb(11,116,229)',
            width:'240px',height:'28px',borderRadius:"4px"
          }}
           styleTextButton={{fontWeight :500}} />
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
