import "./About.css"

import { ReactComponent as FilesSVG } from "../../assets/files.svg"
import AboutImg from "../../assets/profile.jpeg"
import CV from "../../assets/Profile.pdf"
import { Info } from "./Info"

export const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img" />

        <div className="about__data">
          <Info />

          <p className="about__description">
            Frontend developer, I can create web pages with UI / UX user
            interfaces, I have years of experience and many clients are happy
            with the projects carried out
          </p>

          <a download="" href={CV} className="button button--flex">
            Download CV <FilesSVG />
          </a>
        </div>
      </div>
    </section>
  )
}
