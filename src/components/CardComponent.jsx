import '../components/Card.css';

function Card(props) {
    return (
        <div className="card">
            <h2> {props.title} </h2>
            <p> {props.description} </p>
        </div>
    )

}

// Se utiliza para que al momento de llamar la función, se pueda, por un lado, crear el objeto con datos 
// datos, por otro, modificar en caso de ser necesario la información que llevan las propiedades. 
// function Card({ title = "Lenguaje HTML", description = "Lenguage de marcación para páginas web" }) {
//     return (
//         <div className="card">
//             <h2> {title} </h2>
//             <p> {description} </p>
//         </div>
//     )

// }

export default Card; 