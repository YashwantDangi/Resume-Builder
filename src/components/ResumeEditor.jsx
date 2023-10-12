import React, { useState } from 'react';

function ResumeEditor({ detailOf, resumeData, setResumeData }) {
  const [inputDetails, setInputDetails] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    switch (detailOf) {
      case "exp":
        const expInputArray = inputDetails.split(",");

        let expObj = {
          expId: parseInt(resumeData.experience.length + 1),
          year: expInputArray[0],
          startMonth: expInputArray[1],
          endMonth: expInputArray[2],
          company: expInputArray[3],
          role: expInputArray[4],
          position: expInputArray[5],
        };

        const newExp = [...resumeData.experience, expObj];
        setResumeData({ ...resumeData, experience: newExp });
        break;
      case "edu":
        const eduInputArray = inputDetails.split(",");

        let eduObj = {
          eduId: parseInt(resumeData.education.length + 1),
          qualification: eduInputArray[0],
          specification: eduInputArray[1],
          passOutYear: eduInputArray[2],
          institute: eduInputArray[3],
        };

        const newEdu = [...resumeData.education, eduObj];
        setResumeData({ ...resumeData, education: newEdu });
        break;
      case "skill":
        let skillObj = {
          skillId: parseInt(resumeData.skills.length + 1),
          skill: inputDetails,
        }
        
        const newSkills = [...resumeData.skills, skillObj];
        setResumeData({ ...resumeData, skills: newSkills });
        break;
      case "cert":
        const certInputArray = inputDetails.split(",");

        let certObj = {
          certId: parseInt(resumeData.certificate.length + 1),
          certiName: certInputArray[0],
          platform: certInputArray[1],
          date: certInputArray[2] || "",
          url: certInputArray[3] || "",
        };

        const newCert = [...resumeData.certificate, certObj];
        setResumeData({ ...resumeData, certificate: newCert });
        break;
      case "achieve":
        const achieveObj = {
          achieveId: parseInt(resumeData.achievements.length + 1),
          achieve: inputDetails,
        }
        const newAchieve = [...resumeData.achievements, achieveObj];
        setResumeData({ ...resumeData, achievements: newAchieve });
        break;
      default:
        console.log("defualt switch case");
    }
  };

  const changeHandler = (e) => {
    setInputDetails(e.target.value);
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <input type="text" onChange={changeHandler} />
        <button>Add</button>
      </form>
    </>
  );
}

export default ResumeEditor