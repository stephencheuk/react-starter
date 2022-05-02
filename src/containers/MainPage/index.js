import Header from './Header/Header'
import Nav from './Nav/Nav'
import About from './About/About'
import Experience from './Experience/Experience'
import Services from './Services/Services'
import Portfolio from './Portfolio'
import Testimonials from './Testimonials'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

import "./mainpage.css"

const MainPage = () => {
  return (
    <div className='MainPage'>
      <div className='container'>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default MainPage