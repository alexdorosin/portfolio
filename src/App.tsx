import "./App.css"

import {
  About,
  Contact,
  Footer,
  Header,
  Home,
  Qualification,
  ScrollUp,
  Services,
  Skills,
  Testimonials,
  Work,
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
        <Work />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  )
}

export default App
