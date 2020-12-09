import React from 'react';
import Noticias from './Noticias';
import PropTypes from 'prop-types';

const ListNoticias = ({noticias}) =>{
    return(
        <div className="row">
            {noticias.map(noticia=>(
                <Noticias
                    key={noticia.url}
                    noticia={noticia}
                />
            ))}
        </div>
    )
}

ListNoticias.protoTypes = {
    noticias: PropTypes.array.isRequired
}

export default ListNoticias;