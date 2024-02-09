import "./Contact.css"

import { ReactComponent as SendSVG } from "../../assets/send.svg"

export const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon" />

              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">alexdorosin@gmail.com</span>

              <a
                href="mailto:alexdorosin@gmail.com"
                className="contact__button"
              >
                Write me
                <i className="bx bx-right-arrow-alt contact__button-icon" />
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon" />

              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">+4076 263 9026</span>

              <a href="" className="contact__button">
                Write me
                <i className="bx bx-right-arrow-alt contact__button-icon" />
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-messenger contact__card-icon" />

              <h3 className="contact__card-title">Messenger</h3>
              <span className="contact__card-data">Alex Dorosin</span>

              <a href="" className="contact__button">
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>

          <form className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Insert your name"
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Mail</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Insert your email"
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Project</label>
              <textarea
                name="project"
                cols={30}
                rows={10}
                className="contact__form-input"
                placeholder="Describe your project"
              />
            </div>

            <button className="button button--flex button__submit">
              Send Message <SendSVG />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
