import React from 'react'
import ResumePic from '../screenshots/resume.png'
import ResumePdf from '../resume/linkedin-resume-2.pdf'

export default function Resume() {
    return (
        <div>
            <a href={ResumePdf}><img src={ResumePic}></img></a>
            <br></br>
            <a href={ResumePdf}>My resume</a>
            <br></br>
            <br></br>
        </div>
    )
}