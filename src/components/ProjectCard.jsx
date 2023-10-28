import React, { useState } from 'react';
import projectImg from '../Assests/prj1.png';
import{Card, Modal, Row, Col, ListGroupItem} from 'react-bootstrap'

function ProjectCard() {
    const [show,setShow]=useState(false)

    const handle_ShowModal=()=>setShow(true)
    const handleClose=()=>setShow(false)
  return (
    <>
      <Card className='shadow mb-5 btn' onClick={handle_ShowModal}>
      <Card.Img variant="top" src={projectImg} />
      <Card.Body>
        <Card.Title>Project Title</Card.Title>
        
      </Card.Body>
    </Card>


    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-primary fw-bolder'>Project Details</Modal.Title>
        </Modal.Header>
        {/* <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body> */}

        <Row className='align-items-center  p-3'>
            <Col md={6}>
                <img style={{height:'200px'}} className='img-fluid' src={projectImg} alt="projectImg" />
            </Col>

            <Col md={6}>
            <h2 style={{fontSize:'24px'}} className='fw-bolder'>Project Title</h2>
          <p>Project Overview : Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos ullam laudantium at dolores maxime debitis? Voluptatibus eum id ea quis vero animi voluptates est dolores repellat? Eius, itaque maxime. Debitis?</p>
          <p>Language used    :<span className='fw-bolder'>HTML, CSS, React</span></p>
            </Col>
        </Row>
        <div className=" mb-3 text-center">
            <a href="https://github.com/Evangelin-philip/video-player"><i class="fa-brands fa-github fa-2x"></i></a>
            <a className='ms-5' href="https://video-player-app-ten.vercel.app/"><i class="fa-solid fa-link fa-2x"></i></a>
        </div>
        
      </Modal>
    </>
  )
}

export default ProjectCard
