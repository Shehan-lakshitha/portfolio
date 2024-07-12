import React from 'react'

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
                        <i className="bx bx contact_card-icon"></i>

                        <h3 className="contact_card-title"></h3>
                        <span className="contact_card-data"></span>
                    </div>
                </div>
            </div>

            <div className="contact_content">
                <h3 className="contact_title">Write your thoughts</h3>
            </div>
        </div>
    </section>
  )
}

export default Contact