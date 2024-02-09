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
      <ScrollUp />
    </>
  )
}

export default App
