import Header from './assets/components/Header/Header'
import Hero from './assets/components/Hero/Hero'
import './App.css'
import Companies from './assets/components/Companies/Companies'
import Residencies from './assets/components/Residencies/Residencies'
import Value from './assets/components/Value/Value'
import Contact from './assets/components/Contact/Contact'
import GetStarted from './assets/components/GetStarted/GetStarted'
import Footer from './assets/components/Footer/Footer'




function App() {


  return (
   <div className='App'>
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
        <Companies />
        <Residencies />
        <Value />
        <Contact />
        <GetStarted />
        <Footer />
   </div>
  )
}

export default App
