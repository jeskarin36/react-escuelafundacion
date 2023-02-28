import React from 'react'
import "./Contacto.css"
function Contacto() {
  return (
    <div className='app__contacto'>
       <div className='app__contacto-letf'>
           <div>
            <h3>Contacto</h3>
                <p>No dudes en comunicarte con nosotros si tienes alguna pregunta.</p>
                <div>
                    <p className='title'>Correo electrónico</p>
                    <p> Jeskarinmartinez36@ejemplo.com</p>
                </div>
                <div>
                    <p className='title'>Teléfono</p>
                    <p>(555) 555-5555</p>
                </div>
           </div>
       </div>
       <div className='app__contacto-right'>
            <form action="">
                <div className='double'>
                    <div className='corto'>
                    <label for="Name" >Nombres*</label>
                    <input type="text" id="Name" name="Name"  />
                    </div>

                    <div className='corto'>
                    <label for="Name" >Apellidos*</label>
                    <input type="text" id="Name" name="Name"  />
                </div>
                </div>

               <div className='largo'>
                <label for="Name" >Correo Electronico*</label>
                <input type="text" id="Name" name="Name"  />
               </div>
                

                <div className='largo'>
                    <label for="Name">Mensaje*</label>
                    <textarea name="textarea" rows="10" cols="30"></textarea>
                </div>
                

                <input type="submit" value="Enviar" />
            </form>
       </div>
    </div>
  )
}

export default Contacto
