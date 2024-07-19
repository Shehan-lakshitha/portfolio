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
      <span className="section_subtitle">My journey</span>

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
                <h3 className="qualification_title">Undergraduate</h3>
                <span className="qualification_subtitle">Sabaragamuwa University of Sri Lanka</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>2021 - present
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
                  Advanced Level
                </h3>
                <span className="qualification_subtitle">De Mazenod College, Kandana</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>2019
                </div>
              </div>
            </div>

            {/* <div className="qualification_data">
              <div className="">
                <h3 className="qualification_title">Web development</h3>
                <span className="qualification_subtitle">SUSL</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>2021 - present
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div> */}

            {/* <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div className="">
                <h3 className="qualification_title">UX Expert</h3>
                <span className="qualification_subtitle">SUSL</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>2021 - 2023
                </div>
              </div>
            </div> */}
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

            {/* <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div className="">
                <h3 className="qualification_title">Software Engineer</h3>
                <span className="qualification_subtitle">SUSL</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>2021 - present
                </div>
              </div>
            </div> */}

            {/* <div className="qualification_data">
              <div className="">
                <h3 className="qualification_title">Web Designer</h3>
                <span className="qualification_subtitle">Figma</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>2021 - present
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
