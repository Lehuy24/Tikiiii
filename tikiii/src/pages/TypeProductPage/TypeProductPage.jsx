import React from 'react'
import NavbarCompoment from '../../compoments/NavbarCompoment/NavbarCompoment'
import CardComponent from '../../compoments/CardComponent/CardComponent'
import { Row, Col } from 'antd'
const TypeProductPage = () => {
    return (
        <Row style={{padding:'0 120px',background:'#efefef',flexWrap:'nowrap',padding:"10px"}}>
            <Col span={4}  style={{background:'#fff',marginRight:'10px',padding:"10px",borderRadius:'6px'}}>
                <NavbarCompoment />
            </Col>
            <Col span={20}>
                <CardComponent />
            </Col>
        </Row>
    )
}

export default TypeProductPage