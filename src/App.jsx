import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default function App() {

  let districts = [
    {
        id: 1,
        title: 'Malappuram',
        image: 'https://react.dev/images/og-home.png ',
        desc: 'Land of Teak'
    },

    {
        id: 2,
        title: 'TVM',
        image: ' https://react.dev/images/og-home.png',
        desc: 'Capital of kerala'
    },


    {
        id: 3,
        title: 'Kollam',
        image: ' https://react.dev/images/og-home.png',
        desc: 'Land of Cashew'
    },


    {
        id: 4,
        title: 'Wayanad',
        image: 'https://react.dev/images/og-home.png ',
        desc: 'Paradise of Kerala'
    },


    {
        id: 5,
        title: 'Alappuzha',
        image: ' https://react.dev/images/og-home.png',
        desc: 'Houseboat'
    }
]


  return (
    <div style= {{margin: '50px'}}>
      <h1><center>Districts of Kerala</center></h1>
      <Container>
        <Row>
          {
            districts.map((e)=>(
              <Col key={e.id}>
                <Card style={{ width: '15rem'}}>
                <Card.Img variant="top" src={e.image} />
                  <Card.Body>
                 <Card.Title>{e.title}</Card.Title>
                 <Card.Text>
                     {e.desc}
                  </Card.Text>
                     <Button variant="primary">For More</Button>
                </Card.Body>
                </Card>
              </Col>
            ))
          }
        </Row>
      </Container>
    </div>
  )
}
