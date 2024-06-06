import React, { useEffect } from "react";
import CVIyasu_AsnakePDF from "./assets/Iyasu_Asnake_CV.pdf";
import CVIyasu_Asnake1 from "./assets/image.jpg";
import CVIyasu_AsnakePDF from "./assets/image.pdf";
import "./Resume.css"; // Import your CSS file

const Resume = () => {
  const handleDownloadClick = () => {
    const link = document.createElement("a");
    link.href = CVIyasu_AsnakePDF;
    link.click();
  };
  // Scroll to the top of the page when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures this effect runs only once after initial render
  return (
    <div className="container data-container">
      <div className="button-container">
        <button className="btn btn-success" onClick={handleDownloadClick}>
          Download PDF
        </button>
      </div>
      <div>
        <img src={CVIyasu_Asnake1} alt="Resume" className="resume-image" />
      </div>
    </div>
  );
};

export default Resume;
