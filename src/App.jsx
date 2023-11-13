import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./assets/js/meyawo.jsx"
import About from './components/Main/About/about'
import Skills from './components/Main/Skills/skills'
import Hobbies from './components/Main/Hobbies/hobbies'
import Contact from './components/Main/Contact/contact'
import Footer from './components/Footer/footer'
import Header from './components/Header/header'

const App = () => {
  return (
    <div>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <meta name="description" content="Start your development with Meyawo landing page." />
  <meta name="author" content="Devcrud" />
  <title>Meyawo Landing page | Free Bootstrap 4.3.x landing page</title>
  {/* font icons */}
  <link rel="stylesheet" href="assets/vendors/themify-icons/css/themify-icons.css" />
  {/* Bootstrap + Meyawo main styles */}
  <link rel="stylesheet" href="assets/css/meyawo.css" />
  {/* Page Navbar */}
  <nav className="custom-navbar" data-spy="affix" data-offset-top={20}>
    <div className="container">
      <a className="logo" href="#">Front-end</a>
      <ul className="nav">
        <li className="item">
          <a className="link" href="#home">Home</a>
        </li>
        <li className="item">
          <a className="link" href="#about">About</a>
        </li>
        <li className="item">
          <a className="link" href="#skills">Skills</a>
        </li>
        <li className="item">
          <a className="link" href="#hobbies">Hobbies</a>
        </li>
        <li className="item">
          <a className="link" href="#contact">Contact</a>
        </li>
      </ul>
      <a href="javascript:void(0)" id="nav-toggle" className="hamburger hamburger--elastic">
        <div className="hamburger-box">
          <div className="hamburger-inner" />
        </div>
      </a>
    </div>
  </nav>{/* End of Page Navbar */}
  {/* page header */}
  <Header />
  {/* about section */}
  <About />
  {/* skills section */}
  <Skills />
  {/* hobby section */}
  <Hobbies />
  {/* contact section */}
  <Contact />
  {/* footer */}
  <Footer />
  {/* core  */}
  {/* bootstrap 3 affix */}
  {/* Meyawo js */}
</div>

  )
}
  
export default App
