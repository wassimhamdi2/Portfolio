import React from "react";

const AssociativeExperience = () => {
  return (
    <div className="section px-3 px-lg-4 pt-5" id="associative-experience">
      <div className="container-narrow">
        <div className="text-center mb-5">
          <h2 className="marker marker-center">Associative Experience</h2>
        </div>
        
        {/* Hackathon Achievement */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <div 
              className="card border-0 shadow-sm rounded-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="card-body p-4">
                <div className="row align-items-center">
                  <div className="col-md-8">
                    <div className="d-flex align-items-center mb-3">
                      <i className="fas fa-trophy fa-2x text-warning me-3"></i>
                      <div>
                        <h3 className="h4 mb-1 text-primary">Robotics Competition Winner</h3>
                        <div className="badge bg-warning text-dark px-3 py-2">
                          <i className="fas fa-medal me-1"></i>
                          First Place
                        </div>
                      </div>
                    </div>
                    <p className="mb-3">
                      Participated in a competitive robotics competition where I collaborated 
                      with a multidisciplinary team to design and program robots for challenging 
                      tasks. Our team successfully secured first place and won the monetary prize 
                      through innovative solutions, strategic thinking, and excellent execution.
                    </p>
                    <div className="skills-used">
                      <h6 className="text-muted mb-2">Technologies & Skills Applied:</h6>
                      <span className="badge bg-light text-dark border me-2 mb-1">Robot Programming</span>
                      <span className="badge bg-light text-dark border me-2 mb-1">Strategic Competition</span>
                      <span className="badge bg-light text-dark border me-2 mb-1">Team Coordination</span>
                      <span className="badge bg-light text-dark border me-2 mb-1">Technical Innovation</span>
                    </div>
                  </div>
                  <div className="col-md-4 text-center">
                    <div className="achievement-highlight p-3 rounded-3 bg-primary text-white">
                      <i className="fas fa-trophy fa-3x mb-2"></i>
                      <h6 className="mb-1">First Place</h6>
                      <p className="small mb-0">Monetary Prize Winner</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Event Gallery */}
        <div className="row">
          <div className="col-12">
            <div className="text-center mb-4">
              <h4 className="h5">Event Highlights</h4>
              <p className="text-muted">Key moments from the robotics competition</p>
            </div>
          </div>
        </div>

        <div className="row g-4">
          <div 
            className="col-md-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="card border-0 shadow-sm rounded-3 overflow-hidden">
              <img
                className="card-img-top"
                src="images/competition/team-work.jpg"
                alt="Team Collaboration"
                style={{height: '200px', objectFit: 'cover'}}
              />
              <div className="card-body p-3">
                <h6 className="card-title mb-1">Team Collaboration</h6>
                <p className="card-text text-muted small mb-0">
                  Working together with team members during the competition
                </p>
              </div>
            </div>
          </div>
          
          <div 
            className="col-md-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="card border-0 shadow-sm rounded-3 overflow-hidden">
              <img
                className="card-img-top"
                src="images/competition/robot-action.jpg"
                alt="Robot in Action"
                style={{height: '200px', objectFit: 'cover'}}
              />
              <div className="card-body p-3">
                <h6 className="card-title mb-1">Robot in Action</h6>
                <p className="card-text text-muted small mb-0">
                  Programming and controlling the robot during competition rounds
                </p>
              </div>
            </div>
          </div>
          
          <div 
            className="col-md-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="card border-0 shadow-sm rounded-3 overflow-hidden">
              <img
                className="card-img-top"
                src="images/competition/prize-ceremony.jpg"
                alt="Prize Ceremony"
                style={{height: '200px', objectFit: 'cover'}}
              />
              <div className="card-body p-3">
                <h6 className="card-title mb-1">Prize Ceremony</h6>
                <p className="card-text text-muted small mb-0">
                  Receiving the first place prize and monetary award
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Achievements */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="text-center">
              <div className="row justify-content-center">
                <div className="col-md-3 mb-3" data-aos="fade-up" data-aos-delay="500">
                  <div className="achievement-stat">
                    <i className="fas fa-users fa-2x text-primary mb-2"></i>
                    <div className="h5 mb-1">Team Leadership</div>
                    <p className="text-muted small mb-0">Led cross-functional collaboration</p>
                  </div>
                </div>
                <div className="col-md-3 mb-3" data-aos="fade-up" data-aos-delay="600">
                  <div className="achievement-stat">
                    <i className="fas fa-lightbulb fa-2x text-warning mb-2"></i>
                    <div className="h5 mb-1">Innovation</div>
                    <p className="text-muted small mb-0">Creative technical solutions</p>
                  </div>
                </div>
                <div className="col-md-3 mb-3" data-aos="fade-up" data-aos-delay="700">
                  <div className="achievement-stat">
                    <i className="fas fa-clock fa-2x text-info mb-2"></i>
                    <div className="h5 mb-1">Time Management</div>
                    <p className="text-muted small mb-0">Delivered under pressure</p>
                  </div>
                </div>
                <div className="col-md-3 mb-3" data-aos="fade-up" data-aos-delay="800">
                  <div className="achievement-stat">
                    <i className="fas fa-trophy fa-2x text-success mb-2"></i>
                    <div className="h5 mb-1">Excellence</div>
                    <p className="text-muted small mb-0">First place achievement</p>
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

export default AssociativeExperience;