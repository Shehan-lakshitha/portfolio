import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section_title">Qualifications</h2>
      <span className="section_subtitle">// education, experience & research</span>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div
            className={
              toggleState === 1
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualication_icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualication_icon"></i>
            Experience
          </div>

          <div
            className={
              toggleState === 3
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
            onClick={() => toggleTab(3)}
          >
            <i className="uil uil-file-alt qualication_icon"></i>
            Research
          </div>
        </div>

        <div className="qualification_sections">
          <div
            className={
              toggleState === 1
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div className="">
                <h3 className="qualification_title">B.Sc. (Hons) Computing & Information Systems</h3>
                <span className="qualification_subtitle">Sabaragamuwa University of Sri Lanka · GPA 3.71</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>2022 - 2026
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
                <h3 className="qualification_title">
                  G.C.E. Advanced Level, Physical Science
                </h3>
                <span className="qualification_subtitle">De Mazenod College, Kandana</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>2019
                </div>
              </div>
            </div>

          </div>

          <div
            className={
              toggleState === 2
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div className="">
                <h3 className="qualification_title">Associate Software Engineer</h3>
                <span className="qualification_subtitle">IMO Technologies</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>Jan 2026 - Present
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
                <h3 className="qualification_title">Software Engineer Intern</h3>
                <span className="qualification_subtitle">WSO2</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>Aug 2024 - Feb 2025
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div className="">
                <h3 className="qualification_title">Microsoft Student Ambassador</h3>
                <span className="qualification_subtitle">Microsoft</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>2023 - present
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

          </div>

          <div
            className={
              toggleState === 3
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div className="">
                <h3 className="qualification_title">HPSO-GO: A Hybrid Meta-Heuristic Approach for Multi-Objective Real-Time Cloud Resource Scheduling</h3>
                <span className="qualification_subtitle">IEEE — International Research Conference on Smart Computing and Systems Engineering (SCSE)</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>2026
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
