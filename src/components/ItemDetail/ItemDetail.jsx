import React, { useContext, useState } from 'react';
import { Card, Button } from 'react-bootstrap'
import { ItemCount } from '../ItemCount/ItemCount';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import "./detail.css"

export const ItemDetail = ({id, name, description, image, price, category, stock }) => {

  const navigate = useNavigate()

  const volverHaciaAtras = () => {
    navigate(-1)
  }

  const { addToCart } = useContext(CartContext)

  const [counter, setCounter] = useState(0)

  const sumarAlCarrito = () => {
    const newItem = {id,name,description,image,price,category,counter}
    addToCart(newItem)
  }


  return (
    <div className="item">
      <>
        <Card style={{ width: '30rem' }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{description}</Card.Title>
            <Card.Text>{name}</Card.Text>
            <Card.Text>${price}</Card.Text>
            <Card.Text>Categoria: {category}</Card.Text>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nobis eaque minima itaque, delectus iste illo? Vero dolorem accusantium debitis obcaecati recusandae, optio quibusdam commodi ipsum quisquam nobis repudiandae architecto!</p>
            <ItemCount max={stock} modify={setCounter} cantidad={counter} />
            <Button onClick={sumarAlCarrito}>Agregar al carrito</Button>
            <Link to='/cart' className='btn btn-success'>
              Finalizar
            </Link>
          </Card.Body>
          <button className='btn btn-success' onClick={volverHaciaAtras}>⬅ Seguir viendo productos</button>
        </Card>
      </>
    </div>
  )
}
