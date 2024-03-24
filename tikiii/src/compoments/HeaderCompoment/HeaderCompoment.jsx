import React from 'react'
import {Col,Row}  from 'antd'
import {
    UserOutlined,CaretDownOutlined, ShoppingCartOutlined
  } from '@ant-design/icons';
import { WrapperHeader ,WrapperHeaderAccount,WrapperHeaderSmall,WrapperTextHeader} from './style'
import Search from 'antd/es/transfer/search'
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';
const HeaderCopoment =() =>{
    return (
        <div>
            <WrapperHeader gutter={16}>
                <Col span={6}>
                    <WrapperTextHeader>SHOP KTJ</WrapperTextHeader>
                </Col>
                <Col span={12}>
                    <ButtonInputSearch
                     size ="large"
                     placeholder ="Input search text"
                     textButton ="Tìm kiếm "
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