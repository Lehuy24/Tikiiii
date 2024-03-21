import React from "react";
import HeaderCopoment from "../HeaderCompoment/HeaderCompoment";
const defaultCompoment = ({ children }) => {
  return (
    <div>
      <HeaderCopoment />
      {children}
    </div>
  );
};
export default defaultCompoment;
