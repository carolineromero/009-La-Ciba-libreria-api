import { serviceAxios } from "../services/serviceAxios";


function Newbook(){

  return(
  <>
 <div className="containerCreate">
    <div className="containerTitleForm">
            <p className="titleForm">Por favor, complete el formulario para crear un nuevo libro</p>
    </div>
    <form id="miFormulario">
        <div className="allInputs">
          <div className="inputForm">
            <input className="tituloForm" type="text" placeholder="Ingrese Título del libro"/>
          </div>
    
          <div className="inputForm">
            <input className="authorForm" type="text" placeholder="Ingrese el Autor"/>
          </div>

          <div className="inputForm">
            <input className="editorialForm" type="text" placeholder="Ingrese la editorial del libro"/>
          </div>
         
          <div className="inputForm">
            <input className="yearForm" type="text" placeholder="Ingrese Año de publicación"/>
          </div>

          <div className="inputForm">
            <select className="genreForm">
              <option value="">Seleccione el Género</option>
              <option value="Politicas">Políticas de igualdad</option>
              <option value="Cultura">Cultura</option>
              <option value="Ciencias">Ciencias políticas y sociales</option>
              <option value="Historia">Historia Social y cultural</option>
              <option value="Biografias">Biografías</option>
              <option value="Otros">Otros</option>
            </select>
          </div>

          <div className="inputForm">
            <input className="imageForm" type="text" placeholder="Ingrese URL de la imagen de la portada del libro"/>
          </div>

    </div>
    <div className="containerBtn" >
          
            <button className="btnSend">Enviar datos</button>
    
        </div>

    </form>
</div>
        </>
      )
  }
  
  export default Newbook;