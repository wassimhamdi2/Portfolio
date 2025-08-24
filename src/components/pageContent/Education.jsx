import React from "react";

const Education = () => {
  return (
    <div className="section px-2 px-lg-4 pt-5" id="education">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="marker marker-center">Education</h2>
        </div>
        <div className="text-center">
          <p className="mx-auto mb-5" style={{ maxWidth: "600px" }}>
            My academic journey in computer science and software engineering, 
            building expertise in modern technologies and development practices.
          </p>
        </div>
        
        <div className="row justify-content-center">
          <div className="col-lg-10">
            
            {/* Master's Degree */}
            <div 
              className="education-item mb-5"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="row align-items-center">
                <div className="col-md-3 text-center mb-3 mb-md-0">
                  <img
                    src="images/education/iset-sfax.png"
                    alt="ISET Sfax"
                    className="img-fluid rounded"
                    style={{width: '80px', height: '80px', objectFit: 'contain'}}
                  />
                </div>
                <div className="col-md-9">
                  <div className="education-content">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <div>
                        <h3 className="h4 mb-1 text-primary">Professional Master's Degree</h3>
                        <h4 className="h5 mb-1">Information Systems Development and Networks</h4>
                        <div className="text-muted">Software Engineering and Emerging Technologies</div>
                      </div>
                      <span className="badge bg-primary fs-6">2023 - 2025</span>
                    </div>
                    <div className="institution mb-2">
                      <i className="fas fa-university text-primary me-2"></i>
                      <strong>Higher Institute of Technological Studies of Sfax (ISET Sfax)</strong>
                    </div>
                    <p className="mb-0">
                      Specialized program focused on designing, developing, and implementing complex 
                      information systems and network infrastructures. Covers systems development 
                      lifecycle, network design, data modeling, and emerging digital technologies.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bachelor's Degree */}
            <div 
              className="education-item mb-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="row align-items-center">
                <div className="col-md-3 text-center mb-3 mb-md-0">
                  <img
                    src="images/education/fsg.png"
                    alt="Faculty of Sciences of Gafsa"
                    className="img-fluid rounded"
                    style={{width: '80px', height: '80px', objectFit: 'contain'}}
                  />
                </div>
                <div className="col-md-9">
                  <div className="education-content">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <div>
                        <h3 className="h4 mb-1 text-secondary">National Bachelor's Degree</h3>
                        <h4 className="h5 mb-1">Computer Science</h4>
                        <div className="text-muted">Software Engineering</div>
                      </div>
                      <span className="badge bg-secondary fs-6">2020 - 2023</span>
                    </div>
                    <div className="institution mb-2">
                      <i className="fas fa-university text-secondary me-2"></i>
                      <strong>Faculty of Sciences of Gafsa</strong>
                    </div>
                    <p className="mb-0">
                      Rigorous curriculum covering fundamental computing theories and principles, 
                      software development lifecycles, system architecture, programming languages, 
                      and software engineering methodologies with hands-on project experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>


      </div>
    </div>
  );
};

export default Education;