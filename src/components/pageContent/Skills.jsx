import React from "react";
import {
  FaTools,
  FaCloud,
  FaSitemap,
  FaWindows,
  FaCode,
  FaGlobe,
  FaMobileAlt,
  FaDatabase,
} from "react-icons/fa";

const Skills = () => {
  const skills = [
    {
      category: "DevOps",
      icon: <FaTools className="me-2 text-primary" />,
      items: ["Git", "Maven", "Docker", "Jenkins", "Nexus", "SonarQube"],
    },
    {
      category: "Cloud Computing",
      icon: <FaCloud className="me-2 text-info" />,
      items: ["Microsoft Azure"],
    },
    {
      category: "Modeling",
      icon: <FaSitemap className="me-2 text-warning" />,
      items: ["UML"],
    },
    {
      category: "Operating Systems",
      icon: <FaWindows className="me-2 text-success" />,
      items: ["Linux", "Windows"],
    },
    {
      category: "Programming Languages",
      icon: <FaCode className="me-2 text-danger" />,
      items: ["Java", "PHP", "JavaScript"],
    },
    {
      category: "Web Technologies & Frameworks",
      icon: <FaGlobe className="me-2 text-primary" />,
      items: [
        "HTML5",
        "CSS3",
        "Bootstrap",
        "Tailwind CSS",
        "Symfony",
        "NodeJs",
        "Angular",
        "Spring Boot",
      ],
    },
    {
      category: "Mobile Technologies",
      icon: <FaMobileAlt className="me-2 text-purple" />,
      items: ["Android Native", "Flutter", "Firebase"],
    },
    {
      category: "Databases",
      icon: <FaDatabase className="me-2 text-dark" />,
      items: ["MySQL", "SQL Server", "PostgreSQL"],
    },
  ];

  return (
    <div className="section px-3 px-lg-4 pt-5" id="skills">
      <div className="container">
        {/* Section Title */}
        <div
          className="text-center mb-5"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="marker marker-center">My Skills</h2>
          <p className="text-muted mt-3">
            A versatile developer with expertise across web, mobile, cloud,
            and DevOps ecosystems.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="row g-4 mt-4">
          {skills.map((skill, index) => (
            <div
              className="col-md-6 col-lg-4"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              data-aos-duration="600"
            >
              <div className="card skill-card h-100 border-0 rounded-4">
                <div className="card-body">
                  <h5 className="card-title d-flex align-items-center fs-5 fw-bold">
                    {skill.icon} {skill.category}
                  </h5>
                  <div className="mt-3">
                    {skill.items.map((item, i) => (
                      <span
                        key={i}
                        className="badge bg-light text-dark border me-2 mb-2"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;