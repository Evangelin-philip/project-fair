import React from 'react'
import { Link } from 'react-router-dom'
import loginImg from '../Assests/login.png'
import authImg from '../Assests/auth.png'
import {Form,Button} from 'react-bootstrap'

function Auth({register}) {
    const isregisterPage=register?true:false
  return (
    <div style={{width:'100%',hight:'100vh'}} className='d-flex justify-content-center align-items-center flex-column mt-5'>
    {/* <div className='w-75 container'> */}
         <div className='mb-1 w-100 text-end'>
            <Link to={'/'} style={{textDecoration:'none'}}>
                <i class="fa-solid fa-arrow-left fa-beat">
                    <span className='ms-1 fw-normal'>Back to Home</span>
                    </i>
                </Link></div>
         <div className='card shadow p-5 bg-warning'>
             <div className="row align-items-center">
                <div className="col-lg-6">
                    <img className='rounded-start w-75' src={authImg} alt="Auth Image"/>
                </div>
                <div className="col-lg-6">
                    <div className="d-flex align-items-center flex-column">
                        <h1 className='fw-bolder text-light mt-2'>
                        <i class="fa-brands fa-stack-overflow fa-beat me-2"></i>
                        Project Fair
                        </h1>
                        <h className='fw-bolder mt-2 pb-3 text-light  '>{isregisterPage?'Sign up to your Account':'Sign in to Your Account'}</h>
                        <Form>
                            {
                                isregisterPage &&
                                <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Control type="text" placeholder="Enter Username" />
                            </Form.Group>
                            }
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email ID" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Enter Password" />
                            </Form.Group>
                            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button> */}
                            {
                                isregisterPage?
                                <div className='text-center'>
                                    <button className='btn btn-light mb-2 align-items-center'>Register</button>
                                    <p>Already have Account? Click here to <Link to={'/login'}>Login</Link></p>
                                </div> :
                                <div className='text-center'>
                                    <button className='btn btn-light mb-2'>Login</button>
                                    <p>New User? Click here to <Link to={'/register'}>Register</Link></p>
                                </div>
                            }
                        </Form>
                    </div>
                </div>
             </div>
         </div>
    </div>
    // </div>
  )
}

export default Auth
