import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Experience from './components/Experience'
import OJT from './components/OJT' // Import the OJT component
import Education from './components/Education' // Import the Education component
import Seminars from './components/Seminars'

function App() {

  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <OJT /> {/* Add the OJT component here */}
        <Education /> {/* Add the Education component here */}
        <Projects />
        <Seminars />
        <Contact />
        <Footer />
    </div>
  )
}

export default App;
