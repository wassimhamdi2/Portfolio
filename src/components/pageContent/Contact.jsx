import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

const contactItems = [
  {
    icon: "fas fa-envelope",
    color: "bg-danger", 
    title: "Email",
    link: "mailto:whamdi617@gmail.com",
    text: "whamdi617@gmail.com",
    delay: 300,
    textColor: "text-danger", // match red color
  },
  {
    icon: "fas fa-phone",
    color: "bg-success",
    title: "Phone",
    link: "tel:+21699128589",
    text: "+216 99 128 589",
    delay: 400,
    textColor: "text-success",
  },
  {
    icon: "fab fa-linkedin",
    color: "bg-info",
    title: "LinkedIn",
    link: "https://linkedin.com/in/hamdiwassim/",
    text: "hamdiwassim",
    delay: 500,
    textColor: "text-info",
  },
  {
    icon: "fab fa-github",
    color: "bg-dark",
    title: "GitHub",
    link: "https://github.com/wassimhamdi2",
    text: "wassimhamdi2",
    delay: 600,
    textColor: "text-dark",
  },
];


  return (
    <div
      className="section px-2 px-lg-4 pb-4 pt-5 mb-5 contact-section"
      id="contact"
    >
      <div className="container-narrow">
        <div className="text-center mb-5">
          <h2 data-aos="fade-up" className="marker marker-center">
            Contact Me
          </h2>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div
              className="text-center mb-4 contact-intro"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="h5">Let's work together!</div>
              <p>
                I'm always interested in new opportunities and exciting
                projects. Whether you need a full-stack web application, mobile
                app, or DevOps solutions, I'd love to discuss how I can help
                bring your ideas to life.
              </p>
              <p>Looking forward to hearing from you!</p>
            </div>

            <div className="contact-info">
              <div className="row g-4">
                {contactItems.map((item, i) => (
                  <div key={i} className="col-md-6">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none"
                      style={{ color: "inherit" }}
                    >
                      <div
                        className="contact-item text-center p-4 bg-light rounded-4 h-100"
                        data-aos="flip-left"
                        data-aos-delay={item.delay}
                        style={{
                          boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
                          transition:
                            "transform 0.3s ease, box-shadow 0.3s ease",
                          cursor: "pointer",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform =
                            "translateY(-10px) scale(1.05)";
                          e.currentTarget.style.boxShadow =
                            "0 12px 25px rgba(0,0,0,0.2), 0 6px 12px rgba(0,0,0,0.1)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform =
                            "translateY(0) scale(1)";
                          e.currentTarget.style.boxShadow =
                            "0 6px 15px rgba(0,0,0,0.1)";
                        }}
                      >
                        <div
                          className={`${item.color} text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3`}
                          style={{ width: "60px", height: "60px" }}
                        >
                          <i className={`${item.icon} fa-lg`}></i>
                        </div>
                        <h6 className="mb-2 fw-bold">{item.title}</h6>
                        <p className={`fw-medium mb-0 ${item.textColor}`}>
                          {item.text}
                        </p>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
