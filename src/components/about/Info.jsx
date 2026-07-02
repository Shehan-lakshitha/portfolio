import React from "react";

const Info = () => {
  return (
    <div className="about_info grid">
      <div className="about_box">
        <i class="bx bx-briefcase-alt about_icon"></i>
        <h3 className="about_title">Associate SE</h3>
        <span className="about_subtitle">IMO Technologies</span>
      </div>

      <div className="about_box">
        <i class="bx bx-book-alt about_icon"></i>
        <h3 className="about_title">Published</h3>
        <span className="about_subtitle">IEEE SCSE 2026</span>
      </div>

      <div className="about_box">
        <i class="bx bx-graduation about_icon"></i>
        <h3 className="about_title">B.Sc. (Hons)</h3>
        <span className="about_subtitle">GPA 3.71</span>
      </div>
    </div>
  );
};

export default Info;
