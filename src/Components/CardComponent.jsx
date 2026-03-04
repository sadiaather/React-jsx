
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardComponent({title,img,text}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img src={img}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Button variant="primary">Enrolle Now</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;