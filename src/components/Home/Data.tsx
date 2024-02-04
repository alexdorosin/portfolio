import { ReactComponent as HandSVG } from "../../assets/hand.svg"
import { ReactComponent as SendSVG } from "../../assets/send.svg"

export const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Alex <HandSVG />
      </h1>

      <h3 className="home__subtitle">Web developer</h3>
      <p className="home__description">
        I&apos;m a creative developer based in Romania, and I&apos;m very
        passionate and dedicated to my work.
      </p>

      <a href="#contact" className="button button--flex">
        Say hello <SendSVG />
      </a>
    </div>
  )
}
