import { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import SearchContext from '../context/SearchContext';

const Seo = () => {

    const { search } = useContext( SearchContext );
    const navigate = useNavigate();

    if ( search.trim() === '' ) {
        navigate('/');
    }

    return (
        <Helmet>
            <title>{ search } - Buscar con Sirchin</title>
        </Helmet>
    )
}

export default Seo;