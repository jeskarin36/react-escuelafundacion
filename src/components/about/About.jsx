import React from 'react'
import "./About.css"
import  Container  from "../../components/container/Container";
import image1 from "../../assets/photo-1490424660416-359912d314b3.avif"
import image2 from "../../assets/photo-1548102268-3d7dc56b01e1.avif"
import image3 from "../../assets/photo-1488521787991-ed7bbaae773c.avif"


const About = () => {
  return (
    <div className='app__about'>
       <Container title="Materiales didácticos" content="Con frecuencia, muchos materiales pedagógicos en los idiomas locales están desactualizados. Trabajamos con líderes educativos y editoriales para garantizar que los estudiantes tengan acceso a libros de texto actuales, adecuados para cada edad y escritos en su idioma nativo." img={image1}></Container>
       <Container title="Educación permanente para docentes" content="Creamos programas de educación permanente a medida que cubren las necesidades de las comunidades de docentes y estudiantes. Desde la capacitación sobre la última tecnología " idd="app_contenedor-reverse" img={image2}></Container>
       <Container title="Apoyo para las comunidades" content="La educación sucede en el contexto de una comunidad más amplia. Nuestro enfoque se extiende más allá de la escuela para garantizar que los estudiantes tengan el apoyo necesario para aprender de la mejor manera." img={image3}></Container>
      
    </div>
  )
}

export default About
