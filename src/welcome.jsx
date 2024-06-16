import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Welcome() {
  return (
    <>
    <div style={{display:'flex', justifyContent:'space-around', justifyItems:'center', padding:'150px'}}>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>DashBoard</Card.Title>
        <Card.Text>
          This is my User profile DashBoard
        </Card.Text>
        <Button variant="primary">Click Here!!</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Crud Operation</Card.Title>
        <Card.Text>
          This is Crud Operation
        </Card.Text>
        <Button variant="primary">Click Here!!</Button>
      </Card.Body>
    </Card>
    </div>
    </>
  )
}

export default Welcome;