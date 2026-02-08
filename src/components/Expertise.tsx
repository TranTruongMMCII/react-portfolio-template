import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJava, faDocker, faPython } from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "Java",
  "Spring Boot",
  "MongoDB",
  "Maven",
  "Gradle",
  "MySQL",
  "Redis",
  "Kafka",
  "JUnit / Mockito",
  "Postman",
];

const labelsSecond = [
  "Git",
  "GitHub Actions",
  "Docker",
  "AWS",
  "Linux",
  "Nginx",
  "CI/CD",
  "Jenkins",
  "Kubernetes",
];

const labelsThird = [
  "LLM",
  "Generative AI",
  "Python",
  "PyTorch",
  "Machine Learning",
  "Computer Vision",
  "EDA",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faJava} size="3x" />
            <h3>Back-end Development</h3>
            <p>
              Experienced in building robust and scalable back-end systems using
              Java and Spring Boot framework. Skilled in designing RESTful APIs,
              can work with both SQL and NoSQL databases. Just learnt ReactJS
              recently.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <h3>DevOps & Automation</h3>
            <p>
              Config and manage CI/CD pipelines for different environments to
              streamline deployment and ensure consistent, reliable software
              delivery. Self-taught AWS, cloud architecture, containerization,
              and Kubernetes fundamentals.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h3>Enthusiastic Researcher</h3>
            <p>
              Passionate about exploring the latest advancements in AI and LLMs.
              Hands-on experience in data analysis, model training, and
              evaluation using Python and PyTorch. Focus on ML, CV on Edge
              Devices (specifically for Agriculture applications).
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
