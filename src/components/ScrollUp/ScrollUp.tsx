import "./ScrollUp.css"

export const ScrollUp = () => {
  document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      const scrollUp = document.querySelector(".scrollup")

      if (window.scrollY >= 560) {
        scrollUp?.classList.add("show-scroll")
      } else {
        scrollUp?.classList.remove("show-scroll")
      }
    })
  })

  return (
    <a href="#" className="scrollup">
      <i className="uil uil-arrow-up scrollup__icon" />
    </a>
  )
}