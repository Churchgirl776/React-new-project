
import './App.css'
import Navigation from "./Component/Navigation";
import Footer from './Component/footer'
import ServiceSection from './Component/ServiceSection'
import HeroSection  from "./Component/HeroSection"
import Fleet from './Component/Fleet';
import Chauffeur from './Component/Chaffeur';
import AboutUs from './Component/About';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {

    return (
    <>

     <Navigation/>
     <HeroSection/>
     <AboutUs/>
     <Fleet/>
     <Chauffeur/>
      <ServiceSection/>
     <Footer/>
     
    </>
  )
}

export default App
