import React from 'react'

export default function Info(){
    return(
        <div className="about-container">
            <img src='./images/ashito.jpg'/>
            
            <div className="bio">
                <h2 id="nama">Fadhil Akbar</h2>
                <h4 id="role">Frontend Developer</h4>
                <h6 id="website-porto">lilbee.com</h6>
            </div>
            
            
           
                <button className="email">
                <i className="fas fa-envelope" ></i>
                Email
                </button>
                <button className="linkedin">
                <i className="fab fa-linkedin"></i>
                LinkedIn
                </button>
            
            
        </div>
    )
}