import { Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListNoticias from './components/ListNoticias';

function App() {

  //definir la categoria y noticias
  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  useEffect(()=>{

    const consultarAPI = async() => {
      const url = `http://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=4a22766b9bf84911b54b265ccb2d83ab`;

      const respuesta= await fetch(url);
      const noticias= await respuesta.json();

      guardarNoticias(noticias.articles);
    }
    consultarAPI()

  }, [categoria])

  return (
    <Fragment>
      <Header
        titulo='Buscador de noticias'
      />

      <div className="container white">
        <Formulario
          guardarCategoria={guardarCategoria}
        />

        <ListNoticias
        noticias={noticias}
        />
      </div>
    </Fragment>
  );
}

export default App;
