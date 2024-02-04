import { ReactComponent as ScrollSVG } from "../../assets/scroll.svg"

export const ScrollDown = () => {
  return (
    <div className="home__scroll">
      <a href="#about" className="home__scroll-button button--flex">
        <ScrollSVG />
        <span className="home__scroll-name">Scroll down</span>
        <i className="uil uil-arrow-down home__scroll-arrow" />
      </a>
    </div>
  )
}
