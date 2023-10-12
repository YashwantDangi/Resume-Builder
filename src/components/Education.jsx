import React from 'react'
import ResumeEditor from './ResumeEditor';

function Education({ resumeData, setResumeData }) {
  let education = resumeData.education;
  return (
    <>
      <h2>Education</h2>
      <ResumeEditor
        detailOf="edu"
        resumeData={resumeData}
        setResumeData={setResumeData}
      ></ResumeEditor>
      {education.reverse().slice(0,2).map((edu) => {
        return (
          <div key={edu.eduId}>
            <p>
              I have completed {edu.qualification} in {edu.specification} from{" "}
              {edu.institute} in {edu.passOutYear}
            </p>
          </div>
        );
      })}
    </>
  );
}

export default Education