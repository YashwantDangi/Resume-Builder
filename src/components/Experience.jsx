import React from 'react'
import ResumeEditor from './ResumeEditor';

function Experience({ resumeData, setResumeData }) {
  let experiences = resumeData.experience;
  // let key = 1;
  return (
    <>
      <h2>Internship & Training</h2>
      <ResumeEditor
        detailOf="exp"
        resumeData={resumeData}
        setResumeData={setResumeData}
      ></ResumeEditor>
      {experiences.reverse().slice(0,2).map((exp) => {
        return (
          <div key={exp.expId}>
            <p>
              I have done <strong>{exp.position}</strong> from{" "}
              <strong>{exp.company}</strong> as <strong>{exp.role}</strong>
              <br />
              {exp.startMonth} - {exp.endMonth} {exp.year}
            </p>
          </div>
        );
      })}
    </>
  );
}

export default Experience