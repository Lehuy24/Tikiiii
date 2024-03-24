import { Input } from 'antd'
import React from 'react'

function InputCompoment({size,placeholder,bordered,style,...rest}) {
  return (
    <Input
    size ={size}
    placeholder={placeholder}
    bordered={bordered}
    style={style}
    {...rest}
    />
  )
}

export default InputCompoment

