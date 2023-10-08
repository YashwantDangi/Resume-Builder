import React from 'react'
import ResumeEditor from './ResumeEditor';

function Achievements({ resumeData, setResumeData }) {
  let achievements = resumeData.achievements;
  let key = 1;
  return (
    <>
      <h2>Achievements</h2>
      <ResumeEditor
        detailOf="achieve"
        resumeData={resumeData}
        setResumeData={setResumeData}
      ></ResumeEditor>
      <ul>
        {achievements.map((achievement) => {
          return <li key={key++}>{achievement}</li>;
        })}
      </ul>
    </>
  );
}

export default Achievements