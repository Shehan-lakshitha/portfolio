import React from 'react'
import './skills.css';
import Frontend from './Frontend';
import Backend from './Backend';
import Database from './Database';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section_title">Skills</h2>
        <span className="section_subtitle">// tech stack</span>

        <div className="skills_container container grid">
            <Backend />
            <Frontend />
            <Database />
        </div>
    </section>
  )
}

export default Skills