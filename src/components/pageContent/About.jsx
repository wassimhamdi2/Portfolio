import React from "react";

const About = () => {
  return (
    <div className="section pt-4 px-3 px-lg-4" id="about">
      <div className="container-narrow">
        <div className="row align-items-center">
          {/* Text Content */}
          <div
            className="col-md-6"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <h2 className="h4 my-2">Hello! I'm Wassim Hamdi</h2>
            <p>
              I am a passionate Full Stack Developer with a Master's in Software Engineering 
              and Emerging Technologies. I specialize in web and mobile development with strong 
              expertise in Angular, Spring Boot, Flutter, PHP/Symfony, and DevOps practices. 
              I have hands-on experience with CI/CD pipelines, cloud technologies, and both 
              SQL and NoSQL databases. I am highly motivated, a quick learner, and always 
              eager to deliver high-quality solutions.
            </p>
            <div className="row mt-3">
              <div className="col-sm-4 fw-bolder">Email:</div>
              <div className="col-sm-8">whamdi617@gmail.com</div>
              <div className="col-sm-4 fw-bolder">Phone:</div>
              <div className="col-sm-8">+216 99 128 589</div>
              <div className="col-sm-4 fw-bolder">Location:</div>
              <div className="col-sm-8">Tunisia</div>
              <div className="col-sm-4 fw-bolder">GitHub:</div>
              <div className="col-sm-8">
                <a href="https://github.com/wassimhamdi2" target="_blank" rel="noopener noreferrer">
                  wassimhamdi2
                </a>
              </div>
              <div className="col-sm-4 fw-bolder">LinkedIn:</div>
              <div className="col-sm-8">
                <a href="https://linkedin.com/in/hamdiwassim/" target="_blank" rel="noopener noreferrer">
                  hamdiwassim
                </a>
              </div>
              <div className="col-sm-4 fw-bolder">Languages:</div>
              <div className="col-sm-8">Arabic (Native), English (Fluent), French (Fluent)</div>
              <div className="col-sm-4 fw-bolder">Status:</div>
              <div className="col-sm-8">Available</div>
            </div>
            {/* Resume Download Button */}
            <div className="mt-4">
              <a
                href="/assets/CV_Wassim_Hamdi_EN.pdf"
                download
                className="btn btn-primary btn-lg"
              >
                Download My Resume
              </a>
            </div>
          </div>
          {/* Avatar */}
          <div
            className="col-md-5 offset-md-1"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <img
              className="avatar img-fluid mt-2 rounded-4 shadow-sm"
              src="images/avatar.jpg"
              width="400"
              height="400"
              alt="Wassim Hamdi"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;