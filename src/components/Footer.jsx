import React from 'react';
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <div style={{ backgroundColor: "#9ca576", width: "100%",marginTop:"10rem" }}>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-md-3 mb-3'>
                <h5 style={{color:"white",marginTop:"1rem"}}>Quick Links</h5>
                <ul className="list-unstyled quick-links" style={{color:"white", cursor:"pointer"}}>
                  <li><Link to="/home" className="nav-link">Home</Link></li>
                  <li><Link to="/recipes" className="nav-link">Recipes</Link></li>
                  <li><Link to="/about" className="nav-link">About</Link></li>
                  <li><i className="fa fa-angle-double-right"></i>Get Started</li>
                </ul>
              </div>
              <div className='col-md-3 mb-3'>
                <h5 style={{color:"white",marginTop:"1rem"}}>Social Media</h5>
                <ul className="list-unstyled quick-links" style={{color:"white", cursor:"pointer"}}>
                  <li><i className="fa-brands fa-instagram"></i>Instagram</li>
                  <li><i className="fa-brands fa-x-twitter"></i>X</li>
                  <li><i className="fa-brands fa-facebook-f"></i> Facebook</li>
                  <li><i className="fa-brands fa-linkedin-in"></i>LinkedIn</li>
                </ul>
              </div>
              <div className='col-md-4 mb-3'>
                <p style={{ fontFamily: 'Pacifico, sans-serif', fontSize: '2rem', color: 'white', marginTop:"2rem" }}>RecipeGem</p>
                <div className="credit" style={{color:"white"}}> created by  Yaren Şenöz | all rights reserved | </div>
              </div>
            </div>
          </div>
        </div>
      );
      
}

export default Footer;
