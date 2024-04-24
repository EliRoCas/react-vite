
import './App.css'
import Card from './components/CardComponent'
import languages from './data/languages'


function App() {
  //Se crea una función que recorra el arreglo de lenguajes uno a uno
  // Lleva dos parámetros, "l" que es el contador donde se almacena cada iteracion e "index" que es el iterador 
  const languagesList = languages.map((l, index) => {
    return <Card key={index} title={l.ntitle} description={l.ndescription} />
  })

  return (
    <div className='app'>
      <h1>¡Hola, desde Vite + React!</h1>
      <div className='container'>

        {languagesList}
      </div>
    </div>
  )
}

export default App
