import "./App.css"

import {
  About,
  Contact,
  Footer,
  Header,
  Home,
  Qualification,
  Services,
  Skills,
  Testimonials,
} from "./components"

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
