import React from 'react'
import {Col,Row}  from 'antd'
import {
    UserOutlined,CaretDownOutlined, ShoppingCartOutlined
  } from '@ant-design/icons';
import { WrapperHeader ,WrapperHeaderAccount,WrapperHeaderSmall,WrapperTextHeader} from './style'
import Search from 'antd/es/transfer/search'
const HeaderCopoment =() =>{
    return (
        <div>
            <WrapperHeader gutter={16}>
                <Col span={6}>
                    <WrapperTextHeader>SHOP KTJ</WrapperTextHeader>
                </Col>
                <Col span={12}>
                    <Search
                    placeholder ='input search text'
                    allowClear
                    enterButton ='Search'
                    size='large'
                    //onSearch={onSearch}
                    />
                    </Col>
                <Col span={6} style={{display:'flex',gap:"20px"}}>
              <WrapperHeaderAccount>
              <UserOutlined style={{fontSize:'30px'}}/>
                <div>
                    <WrapperHeaderSmall>Đăng kí/Đăng nhập</WrapperHeaderSmall>
                    <div>
                    <span>Tài khoản</span>
                    <CaretDownOutlined />
                    </div>
                </div>
              </WrapperHeaderAccount>
              <div>
                <div>
                <ShoppingCartOutlined style={{fontSize:'30px',color:'#fff'}}/>
                <WrapperHeaderSmall>gio hàng</WrapperHeaderSmall>
                </div>

              </div>
                    </Col>
               
            </WrapperHeader>
        </div>
    )
}
export default HeaderCopoment