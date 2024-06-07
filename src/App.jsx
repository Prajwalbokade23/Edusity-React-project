import About from "./Components/About/About"
import Campus from "./Components/Campus/Campus"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import Pragrams from "./Components/Programs/Pragrams"
import Testimonials from "./Components/Testimonials/Testimonials"
import Title from "./Components/Title/Title"


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subtitle="Our Programs" title="What We Offer"/>
        <Pragrams/>
        <About/>
        <Title subtitle="Gallery" title="Campus Photos"/>
        <Campus/>
        <Title subtitle="Testimonials" title="What Students Says"/>
        <Testimonials/>
        <Title subtitle="Contact Us" title="Get in Touch"/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
