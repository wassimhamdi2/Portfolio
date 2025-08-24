import React from "react";

const Services = () => {
  return (
    <div className="section px-3 px-lg-4 pt-5" id="services">
      <div className="container-narrow">
        <div className="text-center mb-5">
          <h2 className="marker marker-center">My Services</h2>
        </div>
        <div className="text-center">
          <p className="mx-auto mb-3" style={{ maxWidth: "600px" }}>
            I provide comprehensive software development services with expertise 
            in modern technologies and best practices. From web applications to 
            mobile solutions, I deliver scalable and efficient digital solutions.
          </p>
        </div>
        <div className="row py-3">
          <div
            className="col-md-3 text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img
              className="mb-2"
              src="images/services/full-stack.svg"
              width="96"
              height="96"
              alt="full stack development"
            />
            <div className="h5">Full Stack Development</div>
            <p className="text-muted small">
              Angular, React, Spring Boot, PHP/Symfony
            </p>
          </div>
          <div
            className="col-md-3 text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img
              className="mb-2"
              src="images/services/app-development.svg"
              width="96"
              height="96"
              alt="mobile development"
            />
            <div className="h5">Mobile Development</div>
            <p className="text-muted small">
              Flutter, Android Native, Firebase
            </p>
          </div>
          <div
            className="col-md-3 text-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <img
              className="mb-2"
              src="images/services/web-design.svg"
              width="96"
              height="96"
              alt="backend development"
            />
            <div className="h5">Backend Development</div>
            <p className="text-muted small">
              Java, Spring Boot, MySQL, PostgreSQL, MongoDB
            </p>
          </div>
          <div
            className="col-md-3 text-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img
              className="mb-2"
              src="images/services/ui-ux.svg"
              width="96"
              height="96"
              alt="devops"
            />
            <div className="h5">DevOps & Cloud</div>
            <p className="text-muted small">
              Docker, Jenkins, Azure, CI/CD Pipelines
            </p>
          </div>
        </div>
        
        {/* Additional Services Row */}
        <div className="row py-3">
          <div
            className="col-md-4 text-center"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <img
              className="mb-2"
              src="images/services/graphic-design.svg"
              width="96"
              height="96"
              alt="database design"
            />
            <div className="h5">Database Design</div>
            <p className="text-muted small">
              MySQL, PostgreSQL, MongoDB, Firestore
            </p>
          </div>
          <div
            className="col-md-4 text-center"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <img
              className="mb-2"
              src="images/services/web-design.svg"
              width="96"
              height="96"
              alt="api development"
            />
            <div className="h5">API Development</div>
            <p className="text-muted small">
              RESTful APIs, Microservices, Spring Boot
            </p>
          </div>
          <div
            className="col-md-4 text-center"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <img
              className="mb-2"
              src="images/services/ui-ux.svg"
              width="96"
              height="96"
              alt="code quality"
            />
            <div className="h5">Code Quality & Testing</div>
            <p className="text-muted small">
              SonarQube, Unit Testing, Code Review
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;