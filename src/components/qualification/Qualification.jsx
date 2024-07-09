import React from "react";
import "./qualification.css";

const Qualification = () => {
  return (
    <section className="qualification section">
      <h2 className="section_title">Qualifications</h2>
      <span className="section_subtitle">My journey</span>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div className="qualification_button qualification_active button--flex">
            <i className="uil uil-graduation-cap qualication_icon"></i>{" "}
            Education
          </div>

          <div className="qualification_button button--flex">
            <i className="uil uil-briefcase-alt qualication_icon"></i>{" "}
            Experience
          </div>
        </div>

        <div className="qualification_sections">
          <div className="qualification_content">
            <div className="qualification_data">
              <div className="">
                <h3 className="qualification_title">Undergraduate</h3>
                <span className="qualification_subtitle">SUSL</span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i>2021 - present
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div className="">
                <h3 className="qualification_title">Higher Education</h3>
                <span className="qualification_subtitle">SUSL</span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i>2021 - present
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
