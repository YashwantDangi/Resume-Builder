import React, { useState } from 'react';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Certificate from './Certificate';
import Achievements from './Achievements';
import Nav from './Nav';
import Footer from './Footer';
import {resume} from './data/ResumeData';

function ResumeBuilder() {
  const [resumeData, setResumeData] = useState(resume);
  return (
    <>
      <Nav />
      <hr style={{ width: "80%" }} />
      <h1>Resume</h1>
      <Experience resumeData={resumeData} setResume={setResumeData} />
      <Education resumeData={resumeData} setResumeData={setResumeData} />
      {resume.skills && resume.skills.length !== 0 && (
        <Skills resumeData={resumeData} setResumeData={setResumeData} />
      )}
      <Certificate resumeData={resumeData} setResumeData={setResumeData} />
      {resume.achievements && (
        <Achievements resumeData={resumeData} setResumeData={setResumeData} />
      )}
      <hr style={{ width: "80%" }} />
      <Footer />
    </>
  );
}

export default ResumeBuilder