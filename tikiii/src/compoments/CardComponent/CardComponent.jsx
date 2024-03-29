import React from "react";
import { Card, Image } from "antd";
import { Meta } from "antd/es/list/Item";
import logo from "../../assets/images/logo.png";
import {
  StyleNameProduct,
  WrapperReportText,
  WrappePriceText,
  WrappeDiscountText,
} from "./style";
import { StarFilled } from "@ant-design/icons";

function CardComponent() {
  return (
    <Card
      hoverable
      headStyle={{ width: "200px", height: "200px" }}
      style={{ width: 200 }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <img
        src={logo}
        style={{
          width: "58px",
          height: "14px",
          position: "absolute",
          top: -1,
          left: -1,
          paddingBottom: "1px",
          borderTopLeftRadius: "3px",
        }}
      />
      <StyleNameProduct>Iphone</StyleNameProduct>
      <WrapperReportText>
        <span style={{ marginRight: "4px" }}>
          <span>4.9</span>
          <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
        </span>
        <span>| Da ban 1000+</span>
        <WrappePriceText>1.00000đ</WrappePriceText>
        <WrappeDiscountText>-5%</WrappeDiscountText>
      </WrapperReportText>
    </Card>
  );
}

export default CardComponent;
