import React from 'react'
import { WrapperTypeProduct } from './style'
import TypeProduct from '../../TypeProduct/TypeProduct'
const HomePage = ()=> {
    const arr =['TV','Tu lanh','Lap top']
    return(
        <div  style={{padding: '0 120px'}}>
           
           
            <WrapperTypeProduct>
            {arr.map((item)=>{
            return (<TypeProduct name ={item} key={item}/>)
           })}
            </WrapperTypeProduct>
             
              HomePage
        </div>
      
    )
}
export default HomePage