import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item.jsx'
const ShopCategory = (props) => {
  const {all_product}  = useContext()
  return (
    <div className='shop-category'>
        <img src={props.banner} alt="" />
        
    </div>
  )
}

export default ShopCategory
