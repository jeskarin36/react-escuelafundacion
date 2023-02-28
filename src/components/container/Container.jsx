import React from 'react';
import imagee from "../../assets/photo-1490424660416-359912d314b3.avif"
import "./Container.css";

function Container({title,content,idd,img}) {
  return (
    <div className="app_contenedor" id={idd}>
            <div className="app_contenedor-img">
                <div>
                    <img src={img} alt="" />
                </div>
            </div>
            <div className="app_contenedor-text">
               <div>
                    <h3>{title}</h3>
                    <p>{content}</p>
                    <button>Ver mas</button>
               </div>
            </div>
        </div>
  )
}

export default Container
