import React from "react";
import { Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import InputCompoment from "../InputCompoment/InputCompoment";
import ButtonCompoment from "../ButtonCompoment/ButtonCompoment";

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
      <InputCompoment
        size={size}
        placeholder={placeholder}
        bordered={bordered}
        style={{ background: backgroundColorInput }}
      />
      <ButtonCompoment
        textButton={textButton}
        size={size}
        icon={<SearchOutlined color={colorButton} />}
        styleButton={{
          background: backgroundColorButton,
          border: !bordered && "none",
        }}
        styleTextButton={{ color: colorButton }}
      ></ButtonCompoment>
    </div>
  );
};
export default ButtonInputSearch;
