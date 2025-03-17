import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Services from "./components/Services/Services"
import About from "./components/About/About"
import Team from "./components/Team/Team"
import Testimonials from "./components/Testimonials/Testimonials"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import "./App.css"

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

