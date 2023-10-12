import React from 'react'
import ResumeEditor from './ResumeEditor';

function Skills({ resumeData, setResumeData }) {
  let skills = resumeData.skills;
  return (
    <>
      <h2>Technical Skills</h2>
      <ResumeEditor
        detailOf="skill"
        resumeData={resumeData}
        setResumeData={setResumeData}
      ></ResumeEditor>
      <ul>
        {skills.map((s) => {
          return <li key={s.skillId}>{s.skill}</li>;
        })}
      </ul>
    </>
  );
}

export default Skills