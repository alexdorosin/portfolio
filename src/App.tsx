import "./App.css"

import { Footer, Header, Home } from "./components"

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
      </main>
      <Footer />
    </>
  )
}

export default App
