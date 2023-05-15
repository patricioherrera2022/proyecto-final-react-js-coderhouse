import React, {useState} from 'react'
import {createContext} from 'react'

export const CartContext = createContext()


export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])
 
    const addToCart = (item) =>{
      setCarrito([...carrito, item])
    }
    const removerItem = (itemId) =>{
        const newCart = carrito.filter((prod) => prod.id !== itemId)
        setCarrito(newCart)
    }
  
    const calcularCantidad = () =>{
      return carrito.reduce((acc, prod) => acc + prod.counter, 0)
    }
  
    const precioTotal = () =>{
      return carrito.reduce((acc, prod) => acc + prod.price * prod.counter, 0)
    }
    const vaciarCarrito = () =>{
      setCarrito([])
    }


  return (

    <CartContext.Provider value={{carrito,
        addToCart, 
        removerItem, 
        calcularCantidad,
        precioTotal,
        vaciarCarrito}}>
        {children}
    </CartContext.Provider>

  )
}


