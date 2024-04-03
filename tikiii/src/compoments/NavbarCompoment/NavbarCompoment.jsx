import React from "react";
import { Checkbox, Row, Col, Rate } from "antd";
import { WrapperContent, WrapperLableText, WrapperTextPrice, WrapperTextValue } from "./style";

const NavbarCompoment = () => {
  const onChange = (checkedValues) => {
    console.log("Checked values:", checkedValues);
    // Handle the change event here
  };

  const renderContent = (type, options) => {
    switch (type) {
      case "text":
        return options.map((option, index) => {
          return <WrapperTextValue key={index}>{option}</WrapperTextValue>;
        });
      case "star":
        return options.map((option, index) => {
          console.log("check", option);
          return (
            <div style={{dispaly:'flex',gap:'4px'}}>
            <Rate style={{fontSize:'12px'}}disabled defaultValue={option} />
            <span>{`tu ${option} sao`}</span>
            </div>
          )
        });
        case "price":
        return options.map((option, index) => {
          return (
            <WrapperTextPrice>
                <div style={{padding:'4px',color:'rgb(56,56,61)',borderRadius:'10px',backgroundColor:"rgb(238,238,238)",width:'fit-content'}}>{option}</div>
            </WrapperTextPrice>
          )
        });
      case "checkbox":
        return (
          <Checkbox.Group
            style={{
              width: "100%",
              dispaly: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
            onChange={onChange}
          >
            {options.map((option) => {
              return (
                <Checkbox style={{ marginLeft: 0 }} value={options.value}>
                  {option.label}
                </Checkbox>
              );
            })}
          </Checkbox.Group>
        );
      default:
        return null;
    }
  };

  return (
    <div  style={{backgroundColor:'#fff'}}>
      <WrapperLableText>Label</WrapperLableText>
      <WrapperContent>
        {renderContent("text", ["Tu Lanh0", "TV", "MAYGIAT"])}
      </WrapperContent>
      <WrapperContent>
        {renderContent("checkbox", [
          { value: "a", label: "A" },
          { value: "b", label: "B" },
          { value: "c", label: "C" },
        ])}
      </WrapperContent>
      <WrapperContent>{renderContent("star", [1, 2, 3, 4, 5])}</WrapperContent>
      <WrapperContent>
        {renderContent("price", ['duoi 40', 'tren 40'])}
        </WrapperContent>
    </div>
  );
};

export default NavbarCompoment;
