import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div style={{paddingLeft:'30px'}} className="container my-5 row ms-4">
      <div className="col-lg-4">
      <Link style={{textDecoration:'none', color:'white', fontSize:'20px', fontWeight:'600'}} to={'/'}>
          <i className="fa-solid fa-music me-2"></i>
        {' '}
          Media Player
        </Link>
        <p className='mt-3' style={{fontWeight:'600', color:'white'}}>Designed and built with all the love in the world by the Luminar team with the help of our contributers.</p>
        <p style={{fontWeight:'600', color:'white'}}>Code licensed Luminar, docs CC By 3.0</p>
        <p style={{fontWeight:'600', color:'white'}}>Currently v5.3.2</p>
      </div>
      <div className="col-lg-2 d-flex flex-column">
        <h5>Links</h5>
        <Link style={{textDecoration:'none', color:'white', fontWeight:'600'}}>Landing Page</Link>
        <Link style={{textDecoration:'none', color:'white', fontWeight:'600'}}>Home Page</Link>
        <Link style={{textDecoration:'none', color:'white',  fontWeight:'600'}}>Watch History Page</Link>
      </div>
      <div className="col-lg-2 d-flex flex-column">
        <h5>Guides</h5>
        <Link style={{textDecoration:'none', color:'white', fontWeight:'600'}}>React</Link>
        <Link style={{textDecoration:'none', color:'white', fontWeight:'600'}}>React Bootstrap</Link>
        <Link style={{textDecoration:'none', color:'white',  fontWeight:'600'}}>React Router</Link>
   
      </div>
      <div className="col-lg-4">
          <h5>Contact Us</h5>
          <input style={{height:'35px'}} className='border rounded ' type="text" placeholder='Enter your email here' />
          <i style={{width:'40px', height:'40px', paddingTop:'10px', paddingLeft:'10px', marginLeft:'20px', borderRadius:'10px'}} className="fa-solid fa-arrow-right bg-info"></i>
          <div style={{color:'white', marginTop:'20px', marginLeft:'-20px'}} className="d-flex justify-content-evenly ">
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-github"></i>
          <i className="fa-solid fa-phone"></i>
          </div>
       
      </div>

      <span style={{textAlign:'center', color:'white'}}>Copyright June 2024 Batch, Media Player.Built with React</span>
    </div>
    </>
  )
}

export default Footer