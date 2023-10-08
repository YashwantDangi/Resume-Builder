import React from 'react'
import ResumeEditor from './ResumeEditor';

function Skills({ resumeData, setResumeData }) {
  let skills = resumeData.skills;
  let key = 1;
  return (
    <>
      <h2>Technical Skills</h2>
      <ResumeEditor
        detailOf="skill"
        resumeData={resumeData}
        setResumeData={setResumeData}
      ></ResumeEditor>
      <ul>
        {skills.map((skill) => {
          return <li key={key++}>{skill}</li>;
        })}
      </ul>
    </>
  );
}

export default Skills