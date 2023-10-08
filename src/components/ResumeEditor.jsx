import React, { useState } from 'react';

function ResumeEditor({ detailOf, resumeData, setResumeData }) {
  const [inputDetails, setInputDetails] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    switch (detailOf) {
      case "exp":
        const expInputArray = inputDetails.split(",");
        let expObj = {
          expId: parseInt(++resumeData.experience.length),
          year: expInputArray[0],
          startMonth: expInputArray[1],
          endMonth: expInputArray[2],
          company: expInputArray[3],
          role: expInputArray[4],
          position: expInputArray[5],
        };
        // const newExp = [ ...resumeData.experience, expObj ];
        resumeData.experience.push(expObj);
        const newExp = [ ...resumeData.experience];
        console.log(resumeData.experience);
        setResumeData(...resumeData, newExp);
        break;
      case "edu":
        const eduInputArray = inputDetails.split(",");
        let eduObj = {
          qualification: eduInputArray[0],
          specification: eduInputArray[1],
          passOutYear: eduInputArray[2],
          institute: eduInputArray[3],
        };
        const newEdu = [...resumeData.education, eduObj];
        console.log(newEdu);
        setResumeData(...resumeData, newEdu);
        break;
      case "skill":
        const newSkills = [...resumeData.skills, inputDetails];
        console.log(newSkills);
        setResumeData(...resumeData, newSkills);
        break;
      case "cert":
        const certInputArray = inputDetails.split(",");
        let certObj = {
          certiName: certInputArray[0],
          platform: certInputArray[1],
          date: certInputArray[2] || "",
          url: certInputArray[3] || "",
        };
        const newCert = [...resumeData.certificate, certObj];
        console.log(newCert);
        setResumeData(...resumeData, newCert);
        break;
      case "achieve":
        // setAchieve(...achieve, inputDetails);
        // console.log(achieve);
        // setFunc(...data, achieve);
        const newAchieve = [...resumeData.achievements, inputDetails];
        console.log(newAchieve);
        setResumeData(...resumeData, newAchieve);
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