import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='app__footer'>
       <div className="app__footer-letf">
            <h3>Fundación Lusaka</h3>
            <div>
                <p>Calle de Ejemplo, 123,</p>
                <p>Nueva York, NY 12345</p>
            </div>
            <p>Hecho por Jeskarin</p>
       </div>
       <div className="app__footer-right">
            <div className="app__footer-right-container">
                <h3>Acerca de</h3>
                <div>
                <a href="">Nuestra visión</a>
                <a href="">Haz una donación</a>
                <a href="" style={{opacity:"0" }}>Haz una donación</a>
                </div>
            </div>
            <div className="app__footer-right-container">
                <h3>Proyectos</h3>
                <div>
                    <a href="">Materiales didácticos</a>
                    <a href="">Educación para docentes</a>
                    <a href="">Apoyo para las comunidades</a>
                </div>
            </div>
       </div>
    </div>
  )
}


            
export default Footer
