import './App.css';
import  Header  from "./components/header/Header";
import  Navbar  from "./components/navbar/Navbar";
import  About  from "./components/about/About";
import  Opinion  from "./components/opinion/Opinion";
import  Fondo  from "./components/fondo/Fondo";
import  Contacto  from "./components/contacto/Contacto";
import  Footer  from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <Opinion></Opinion>
      <Fondo></Fondo>
      <Contacto></Contacto>
      <Footer></Footer>
    </div>
  )
}

export default App;
