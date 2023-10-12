import React from 'react'
import ResumeEditor from './ResumeEditor';

function Achievements({ resumeData, setResumeData }) {
  let achievements = resumeData.achievements;
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
          return <li key={achievement.achieveId}>{achievement.achieve}</li>;
        })}
      </ul>
    </>
  );
}

export default Achievements