import './App.css'
import AboutSection from './Components/AboutSection'
import BackgroundImage from './Components/BackgroundImage'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Portfolio from './Components/Portfolio'
import ResumeSection from './Components/ResumeSection'
function App() {
  

  return (
    <>
     <BackgroundImage imageUrl={"/images/bgpic.png"}>
      <Header></Header>
      <Hero></Hero>
     </BackgroundImage>
     <AboutSection></AboutSection>
     <ResumeSection></ResumeSection>
     <Portfolio></Portfolio>
    </>
  )
}

export default App
