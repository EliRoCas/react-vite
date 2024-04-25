import React from "react"; // Se importa la biblioteca React para poder utilizar sus componentes y funcionalidades
import "../views/LanguagesViews.css" // Se importa el archivo CSS para aplicar estilos al componente

function LanguagesViews({ lang }) { // Se define el componente de función LanguagesViews y se recibe el objeto 'e' como argumento
    return (
        <div className="langViews"> {/* Se crea un contenedor div con la clase "langViews" */}
            <h2> {lang.ntitle} </h2> {/* Se muestra el título del lenguaje contenido en la propiedad 'ntitle' del objeto 'e' */}
            <h3> {lang.ndescription} </h3> {/* Se muestra la descripción del lenguaje contenido en la propiedad 'ndescription' del objeto 'e' */}
            <img src={lang.image} alt={lang.image + "image"}></img> {/* Se muestra la imagen del lenguaje contenido en la propiedad 'image' del objeto 'e', con un texto alternativo que incluye el nombre de la imagen */}
        </div>
    )
}

export default LanguagesViews; // Se exporta el componente LanguagesViews para que pueda ser utilizado en otros archivos
