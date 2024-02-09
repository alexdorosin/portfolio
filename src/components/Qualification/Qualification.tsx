import "./Qualification.css"

import { useState } from "react"

export const Qualification = () => {
  const [toggleState, setToggleState] = useState(0)

  const toggleTab = (index: number) => {
    setToggleState(index)
  }

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal hourney</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={`qualification__button button--flex ${toggleState === 0 && "qualification__active"}`}
            onClick={() => toggleTab(0)}
          >
            <i className="uil uil-graduation-cap qualification__icon" />
            Education
          </div>

          <div
            className={`qualification__button button--flex ${toggleState === 1 && "qualification__active"}`}
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-briefcase-alt qualification__icon" />
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={`qualification__content ${toggleState === 0 && "qualification__content-active"}`}
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Universitatea din Bucuresti
                </h3>
                <span className="qualification__subtitle">
                  Facultatea de Matematica si Informatica
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt" /> 2017-2020
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Web team lead</h3>
                <span className="qualification__subtitle">Envada</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt" /> 2022 - 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web developer</h3>
                <span className="qualification__subtitle">Softbinator</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt" /> 2020 - 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
              </div>

              <div>
                <h3 className="qualification__title">Frontend developer</h3>
                <span className="qualification__subtitle">Softbinator</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt" /> 2019-2020
                </div>
              </div>
            </div>
          </div>

          <div
            className={`qualification__content ${toggleState === 1 && "qualification__content-active"}`}
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Software Engineer</h3>
                <span className="qualification__subtitle">Revolut</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt" /> 2022 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Web team lead</h3>
                <span className="qualification__subtitle">Envada</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt" /> 2022 - 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web developer</h3>
                <span className="qualification__subtitle">Softbinator</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt" /> 2020 - 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
              </div>

              <div>
                <h3 className="qualification__title">Frontend developer</h3>
                <span className="qualification__subtitle">Softbinator</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt" /> 2019-2020
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
