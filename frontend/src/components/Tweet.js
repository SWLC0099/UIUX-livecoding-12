import Card from 'react-bootstrap/Card'

export default function Tweet(){
   return <Card>
    <Card.Header className='d-flex'>
        <img src='https://api.dicebear.com/6.x/lorelei/png/' alt='Profil Billede' style={{width:"3rem", height: "3rem"}}/>
        <div>
        <p className='m-0'>Navn</p>
        <p className='text-muted'>@user</p>
        <small className='m-0'>28/04/2023</small>
        </div>
    </Card.Header>
    <Card.Body>
        <Card.Title>Title</Card.Title>
        <Card.Text>Lorem Ipsum</Card.Text>
        <Card.Img className='rounded' variant='button' src='holder.js'></Card.Img>
    </Card.Body>
   </Card>;
}
