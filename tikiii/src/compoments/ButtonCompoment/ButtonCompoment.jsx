import React from 'react'
import { Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
function ButtonCompoment({size,styleButton,styleTextButton,textButton,...rests}) {
  return (
    <Button
      size={size}
      style={styleButton}
      {...rests}
      >
      <span style={styleTextButton}>{textButton}</span>
      </Button>
  )
}

export default ButtonCompoment
