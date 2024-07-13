import React from "react";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section_title">Get in touch</h2>
      <span className="section_subtitle">Contact me</span>

      <div className="contact_container container grid">
        <div className="contact_content">
          <h3 className="contact_title">Talk to me</h3>

          <div className="contact_info">
            <div className="contact_card">
              <i className="bx bx-mail-send contact_card-icon"></i>

              <h3 className="contact_card-title">Email</h3>
              <span className="contact_card-data">ShehanLaksh@gmail.com</span>

              <a href="mailto:ShehanLaksh@gmail.com" className="contact_button">
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
              </a>
            </div>

            <div className="contact_card">
              <i className="bx bxl-whatsapp contact_card-icon"></i>

              <h3 className="contact_card-title">Mobile</h3>
              <span className="contact_card-data">+94774084011</span>

              <a href="" className="contact_button">
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
              </a>
            </div>

            <div className="contact_card">
              <i className="bx bxl-linkedin contact_card-icon"></i>

              <h3 className="contact_card-title">LinkedIn</h3>
              <span className="contact_card-data">Shehan Lakshitha</span>

              <a href="" className="contact_button">
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact_content">
          <h3 className="contact_title">Write your thoughts</h3>

          <form action="" className="contact_form">
            <div className="contact_form-div">
              <label className="contact_form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact_form-input"
                placeholder="Enter your name"
              />
            </div>

            <div className="contact_form-div">
              <label className="contact_form-tag">Email</label>
              <input
                type="email"
                name="email"
                className="contact_form-input"
                placeholder="Enter your email"
              />
            </div>

            <div className="contact_form-div">
              <label className="contact_form-tag">Message</label>
              <textarea
                name="message"
                cols="30"
                rows="10"
                className="contact_form-input"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <button href="#contact" className="button button--flex">
              Send Message <i className="uil uil-message button_icon"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
