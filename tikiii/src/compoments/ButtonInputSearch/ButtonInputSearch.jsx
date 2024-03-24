import React from "react";
import { Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const ButtonInputSearch = (props) => {
  const {
    size,
    placeholder,
    textButton,
    bordered,
    backgroundColorInput = "#fff",
    backgroundColorButton = "rgb(13,92,182)",
    colorButton = "#ff",
  } = props;
  return (
    <div style={{ display: "flex", backgroundColor: "#fff" }}>
      <Input
        size={size}
        placeholder={placeholder}
        bordered={bordered}
        style={{ background: backgroundColorInput }}
      />
      <Button
        size={size}
        bordered={bordered}
        icon={<SearchOutlined />}
        style={{ background: backgroundColorButton, color: colorButton ,border: !bordered && 'none' }}
      >
        <span style={{ color: colorButton }}>{textButton}</span>
      </Button>
      
    </div>
  );
};
export default ButtonInputSearch;
