import React from "react";

const Experience = () => {
  return (
    <div className="section px-3 px-lg-4 pt-5" id="experience">
      <div className="container-narrow">
        <div className="text-center mb-5">
          <h2 className="marker marker-center">Experience</h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div
              className="card mb-3"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="card-header px-3 py-2">
                <div className="d-flex justify-content-between">
                  <div>
                    <h3 className="h5 mb-1">Full Stack Developer</h3>
                    <div className="text-muted text-small">
                      MOMSOFT <small>(January 2025 - June 2025)</small>
                    </div>
                  </div>
                  <img
                    src="images/services/full-stack.svg"
                    width="48"
                    height="48"
                    alt="full stack"
                  />
                </div>
              </div>
              <div className="card-body px-3 py-2">
                <p>
                  Designed and developed a maintenance dashboard for Industry 4.0 with 
                  interactive visualization of interventions, stoppages, and key indicators 
                  (MTTR, MTBF, availability).
                </p>
                <p>
                  Implemented CI/CD pipeline with Jenkins and SonarQube for continuous 
                  integration and automated deployments using Angular, Spring Boot, and 
                  Azure Kubernetes Service.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="card mb-3"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <div className="card-header px-3 py-2">
                <div className="d-flex justify-content-between">
                  <div>
                    <h3 className="h5 mb-1">Mobile Developer</h3>
                    <div className="text-muted text-small">
                      Faculty of Sciences of Gafsa <small>(February 2023 - May 2023)</small>
                    </div>
                  </div>
                  <img
                    src="images/services/app-development.svg"
                    width="48"
                    height="48"
                    alt="app development"
                  />
                </div>
              </div>
              <div className="card-body px-3 py-2">
                <p>
                  Developed a cross-platform educational mobile application using 
                  Flutter and Firebase, facilitating collaboration between students 
                  and teachers.
                </p>
                <p>
                  Implemented secure authentication, real-time data management with 
                  Firestore, instant messaging, and push notifications in an agile 
                  development environment.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="card mb-3"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="card-header px-3 py-2">
                <div className="d-flex justify-content-between">
                  <div>
                    <h3 className="h5 mb-1">Frontend Web Developer</h3>
                    <div className="text-muted text-small">
                      STAR Assurances <small>(June 2021 - July 2021)</small>
                    </div>
                  </div>
                  <img
                    src="images/services/web-design.svg"
                    width="48"
                    height="48"
                    alt="web design"
                  />
                </div>
              </div>
              <div className="card-body px-3 py-2">
                <p>
                  Developed a modern and responsive landing page for STAR Assurances 
                  using HTML, CSS, Bootstrap, and JavaScript.
                </p>
                <p>
                  Applied best practices in web performance optimization and SEO 
                  techniques to maximize online visibility and user experience.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="card mb-3"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <div className="card-header px-3 py-2">
                <div className="d-flex justify-content-between">
                  <div>
                    <h3 className="h5 mb-1">Backend Development Projects</h3>
                    <div className="text-muted text-small">
                      Academic & Personal <small>(2021 - 2024)</small>
                    </div>
                  </div>
                  <img
                    src="images/services/full-stack.svg"
                    width="48"
                    height="48"
                    alt="backend development"
                  />
                </div>
              </div>
              <div className="card-body px-3 py-2">
                <p>
                  Built library management application with Symfony and PHP, 
                  implementing CI/CD pipelines with Jenkins and SonarQube for 
                  quality assurance.
                </p>
                <p>
                  Developed inventory management system using Angular and Spring Boot, 
                  featuring stock management, product updates, and automated report 
                  generation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;