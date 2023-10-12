import React from 'react'
import ResumeEditor from './ResumeEditor';

function Certificate({ resumeData, setResumeData }) {
  let certificate = resumeData.certificate;
  return (
    <>
      <h2>Certificates</h2>
      <ResumeEditor
        detailOf="cert"
        resumeData={resumeData}
        setResumeData={setResumeData}
      ></ResumeEditor>
      {certificate.slice(0, 5).map((cert) => {
        return (
          <div key={cert.certId}>
            <p>
              I have done certification in{" "}
              <a href={cert.url} style={{ textDecoration: "none" }}>
                {cert.certiName}
              </a>{" "}
              from {cert.platform} on {cert.date}
            </p>
          </div>
        );
      })}
    </>
  );
}

export default Certificate