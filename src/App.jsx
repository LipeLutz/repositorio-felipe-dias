import './App.css'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { About } from './components/About me/About'
import { Projects } from './components/Projects/Projects'
import { Contact } from './components/Contact/Contact'
import { useRef } from 'react'

function App() {

  const sectionRef1 = useRef(null)
  const sectionRef2 = useRef(null)
  const sectionRef3 = useRef(null)

  const scrollToSection1 = () =>{
    sectionRef1.current?.scrollIntoView({behavior: 'smooth'})
  }

  const scrollToSection2 = () =>{
    sectionRef2.current?.scrollIntoView({behavior: 'smooth'})
  }

  const scrollToSection3 = () =>{
    sectionRef3.current?.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <>
      <Header scrollToSection1={scrollToSection1} scrollToSection2={scrollToSection2} scrollToSection3={scrollToSection3}/>
      <Main />
      <About sectionRef1={sectionRef1}/>
      <Projects sectionRef2={sectionRef2}/>
      <Contact sectionRef3={sectionRef3}/>
    </>
  )
}

export default App
