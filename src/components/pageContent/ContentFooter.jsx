import React from "react";

const ContentFooter = () => {
  return (
    <footer className="pt-4 pb-4 text-center bg-light">
      <div className="container">

        <div className="text-small text-secondary">
          <div className="mb-1">&copy; {new Date().getFullYear()} Wassim Hamdi. All rights reserved.</div>
          <div>
            Design By{" "}
            <a
              href="#about"
              rel="noreferrer"
            >
              Wassim hamdi
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContentFooter;