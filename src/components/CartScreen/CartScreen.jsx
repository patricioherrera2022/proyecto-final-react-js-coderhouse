import React, { useContext } from 'react'
import './CartScreen.css'
import { BsFillTrashFill } from 'react-icons/bs'
import { CartContext } from '../context/CartContext'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const CartScreen = () => {

  const { carrito, precioTotal, vaciarCarrito, removerItem } = useContext(CartContext)

  return (
    <div className="container my-5">
      {
        carrito.length === 0
          ? <>
            <h3>Carrito vacio</h3>
            <Link to='/' className='btn btn-success'>Volver a comprar</Link>
          </>
          :
          <><h3>Resumen de compra</h3>
            <hr />
            {
              carrito.map((prod) => (
                <>
                  <div className='listado'>
                    <p>Producto: {prod.description}</p>
                    <p>${prod.price}</p>
                    <p>cantidad: {prod.counter}</p>
                    <Button className='btn btn-danger' onClick={() => removerItem(prod.id)}>
                      <BsFillTrashFill />
                    </Button>
                  </div>
                </>
              ))
            }
            <strong>Precio total: $ {precioTotal()}</strong>
            <hr />
            <button className='btn btn-danger' onClick={vaciarCarrito}>
              Vaciar carrito
            </button>
            <Link to='/checkout' className='btn btn-success'>
              Terminar compra
            </Link>
          </>
      }
    </div>
  )
}
