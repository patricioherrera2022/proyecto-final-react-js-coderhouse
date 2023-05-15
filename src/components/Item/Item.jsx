import React from 'react';
import './item.css'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export const Item = ({ id, name, description, image, price, category }) => {
  return (
    <div className="item">

      <>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{description}</Card.Title>
            <Card.Text>{name}</Card.Text>
            <Card.Text>$ {price}</Card.Text>
            <Card.Text>Categoria: {category}</Card.Text>

            <Link to={`/detail/${id}`}>
              <Button>Ver más detalles</Button>
            </Link>
          </Card.Body>
        </Card>
      </>


    </div>
  )
}
