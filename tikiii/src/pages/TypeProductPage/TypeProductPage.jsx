import React from 'react'
import NavbarCompoment from '../../compoments/NavbarCompoment/NavbarCompoment'
import CardComponent from '../../compoments/CardComponent/CardComponent'
import { Row, Col } from 'antd'
import { WrapperNavbar, WrapperProducts } from './style'
const TypeProductPage = () => {
    return (
        <Row style={{padding:'0 120px',background:'#efefef',flexWrap:'nowrap',padding:"10px"}}>
            <WrapperNavbar span={4}  style={{background:'#fff',marginRight:'10px',padding:"10px",borderRadius:'6px'}}>
                <NavbarCompoment />
            </WrapperNavbar>
            <WrapperProducts span={20}>
                <CardComponent />
                <CardComponent />
                <CardComponent /><CardComponent />
                <CardComponent />
                <CardComponent /><CardComponent />
                <CardComponent />
                <CardComponent />
            </WrapperProducts >
        </Row>
    )
}

export default TypeProductPage