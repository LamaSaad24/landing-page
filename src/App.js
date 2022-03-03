import './App.css';
import Home from './components/Home/Home';
import Service from './components/Service/Service';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar'
import Order from './components/Order/Order'
import About from './components/About/About'
function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <Service/>
      <Order/>
      <Projects/>
      <About/>
      <Footer/>
    </>
  );
}

export default App;
