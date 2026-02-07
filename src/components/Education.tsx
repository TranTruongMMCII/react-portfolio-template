import "../assets/styles/Education.scss";

function Education() {
  return (
    <div className="education-container" id="education">
      <h1>Education</h1>
      <div className="education-grid">
        <div className="education">
          <h2>Master's Degree - Computer Science</h2>
          <p>The University of Information Technology (UIT) - VNU-HCM</p>
          <p>Dec 2025 - Jan 2028 (Expected)</p>
          <p>
            Focus on Machine Learning, Computer Vision on Edge Devices
            (specifically for Agriculture applications)
          </p>
        </div>
        <div className="education">
          <h2>Bachelor's Degree - English Language Studies</h2>
          <p>The Mekong University (MKU)</p>
          <p>Aug 2023 - Aug 2025</p>
          <p>
            Linguistics, Grammar, Morphology, Syntax, Phonetics, Translation
            Studies, Literature, Cultural Studies, and Business English
          </p>
        </div>
        <div className="education">
          <h2>Bachelor's Degree - Computer Science</h2>
          <p>The Saigon International University (SIU)</p>
          <p>Sep 2018 - Dec 2022</p>
          <p>
            Thesis: Develop a malware behavioral analysis system.
            <br></br>ICPC, Vietnam Olympiad in Informatics, Cisco Networking,
            Naprok Procon
          </p>
        </div>
      </div>
    </div>
  );
}

export default Education;
