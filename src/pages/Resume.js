import React from 'react'
import ResumePic from '../screenshots/resume.png'

export default function Resume() {
    return (
        <div>
            <a href="../resume/linkedin-resume-2.pdf"><img src={ResumePic}></img></a>
            <br></br>
            <a href="../resume/linkedin-resume-2.pdf">My resume</a>
            <br></br>
            <br></br>
        </div>
    )
}