import React,{useState} from 'react'
import "./Navbar.css";
import {RiCloseLine, RiMenu3Line} from "react-icons/ri";



const Navbar = () => {

  const [ToggleMenu,setToggleMenu]= useState(false);

  const Menu=()=>(
      <>
      <p><a href="#home">Proyectos</a></p>
      <p><a href="#wgpt3">Nuestra Vision</a></p>
      <p><a href="#possibility">Nuestro Equipo</a></p>
      <p><a href="#features">Blog</a></p>
      <p><a href="#blog">Donar</a></p>
      </>
  )


  return (
    <div className='app__navbar'>
      <div className="app__navbar-letf">
        <h3>Jeskarin</h3>  
      </div>
      <div className="app__navbar-right">
          <ul className="app__navbar-right-ul">
                <li> <a href="">Proyectos</a> </li>
                <li> <a href="">Nuestra Vision</a> </li>
                <li> <a href="">Nuestro Equipo</a> </li>
                <li> <a href="">Blog</a> </li>
               <li><button>Donar</button></li>
          </ul>
          <div className="app__navbar-menu">
            {ToggleMenu ? <RiCloseLine color="#fff" size={27} onClick={()=>{setToggleMenu(false)}}/>
            : <RiMenu3Line color="#fff" size={27} onClick={()=>{setToggleMenu(true)}}/>
            }

            {ToggleMenu && ( <div className="app__navbar-menu_container">
                <div className="app__navbar-menu_container-links">
                   <Menu></Menu>
                  
                </div>
            </div>)}

            </div>
      </div>
      
    </div>
  )
}

export default Navbar
