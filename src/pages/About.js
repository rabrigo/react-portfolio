import React from 'react'
import Laptop from '../screenshots/laptop-pixabay.png'

export default function About() {
    return (
        <div>
            <ul className="about-text">
                <li>
                    <img className="laptop-pic" src={Laptop}/>
                </li>
                <li className="bio"> 
                {/* <h3>About Me</h3> */}
                    My name is Ronnel and I am a Software Developer. This past March, I received a certificate in Full Stack Development at the University of Washington's Coding Boot Camp. Outside of coding, I am someone that enjoys making music, shooting and editing videos, and dancing.
                </li>
                {/* 
                I believe this plays a huge part in why I enjoy making interfaces.
                <br></br>
                <li>
                During my first group project, I designed a sleek look for our app Furiendr. This was my group's application for a pet adoption API. Click on 'Portfolio' for further details on this project. During this project, I realized that I also enjoyed backend work. I found ways to pass values from the inputs into our request into our API.
                </li> */}
            </ul>
        </div>
    )
}
