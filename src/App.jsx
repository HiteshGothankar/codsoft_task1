
import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/skills'
import { BrowserRouter as Main, Route, Routes } from 'react-router-dom'

function App() {

  return (

    <div>
      <Main>
        <Navbar />

        <Routes>

          <Route exact path='/' element={<Hero/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>
          
        </Routes>
        
      </Main>
    </div>
  )
}

export default App

