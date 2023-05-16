import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const UserCard = ({el}) => {
  
    return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
         {el.mail}
        </Card.Text>
        <Card.Link as={Link} to= {`/details/${el.id}`}>More Details</Card.Link>

      </Card.Body>
    </Card>
        </div>
  )
}

export default UserCard