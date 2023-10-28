import React from 'react'
import { Row ,Col } from 'react-bootstrap';
import landingImage from '../Assests/project.png'
import ProjectCard from '../components/ProjectCard';
import {Link} from 'react-router-dom'

function Home() {
  return (
    <>
    {/* LAnDING SECTION */}
      <div style={{width:'100%',height:'85vh'}} className='container-fluid rounded bg-primary'> 

      <Row className='align-items-center p-5'>
        <Col sm={12} md={6}>
          <h1 style={{fontSize:'60px'}} className='fw-bolder text-light mb-5'><i class="fa-brands fa-stack-overflow fa-beat me-3"></i>Project Fair</h1>
          <p className='text-light'>One Stop Destination for all Software Development Projects. Where users can add and manage their projects. As well as access all projects available in our website... What are you waiting for !!!</p>
          <Link to={'/login'} className='btn btn-warning '>Start To Explore <i class="fa-solid fa-right-long fa-beat ms-2"></i></Link>
        </Col>
        <Col sm={12} md={6}>
          <img style={{marginTop:'100px'}} className='w-100' src={landingImage} alt=""/>
        </Col>
      </Row>
      </div>

      {/* ALL PROJECTS */}
      <div className='all-projects mt-5'>
        <h1 className='text-center'> Explore Our Projects</h1>
        <marquee scrollAmount={30} className='mt-5'>
          <Row>
            <Col sm={12} md={6} lg={4}>
            <ProjectCard/>
            </Col>
  
            <Col sm={12} md={6} lg={4}>
            <ProjectCard/>
            </Col>
  
            <Col sm={12} md={6} lg={4}>
            <ProjectCard/>
            </Col>
          </Row>
        </marquee>
        <div className='text-center '> <Link to={'/projects'}>View More Projects</Link></div>
      </div>
    </>
  )
}

export default Home
