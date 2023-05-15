import React from 'react'
import './itemlist.css'
import {Item} from '../Item/Item'

export const ItemList = ({productos=[]}) => {
  return (
    <div className='container'>
        <h3>Ropa de alta calidad y Al mejor precio</h3>
        <hr />
        <div className='fila'>
        {productos.map((item) => <Item {...item} key={item.id}/>)}
        </div>
    </div>
  )
}
