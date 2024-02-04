import "./Home.css"

export const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-instagram" />
      </a>

      <a
        href="https://www.dribbble.com"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-dribbble" />
      </a>

      <a
        href="https://www.github.com"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-github-alt" />
      </a>
    </div>
  )
}
