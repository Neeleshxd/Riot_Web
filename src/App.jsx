import About from "./componenets/About"
import Hero from "./componenets/hero"
import Navbar from "./componenets/Navbar"
import Features from "./componenets/Features"
import Story from "./componenets/Story"
import Footer from "./componenets/Footer"
const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden '>
     <Navbar/>
     <Hero/>
     <About/>
     <Features/>
     <Story/>
     <Footer/>
    </main>
  )
}

export default App
