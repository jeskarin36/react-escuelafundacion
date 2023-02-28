import React from 'react'
import "./Header.css"
const Header = () => {
  return (
    <div className='app__header'>
        <div className="app__header-container-top">
            <div className="app__header-container-top-title">
              <h3>Apoyamos a docentes y estudiantes para que tengan un futuro mejor.</h3>
            </div>
        </div>
        <div className="app__header-container-bottom">
            <div className='app__header-container-bottom-letf'>
                  <div>
                    <h3>Apoyamos la educación y la innovación.</h3>
                    <button>Nuestra Vision</button>
                  </div>
            </div>
            <div className='app__header-container-bottom-right'>
                <div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt molli.</p>
            
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
