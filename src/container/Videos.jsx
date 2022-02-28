import { useState, useEffect, useContext } from 'react';
import { Grid, GridItem, useMediaQuery } from '@chakra-ui/react';
import ReactPlayer from 'react-player';

import Layout from '../layout/Layout';
import SearchContext from '../context/SearchContext';
import Spinner from '../components/Spinner';
import { fetchData } from '../api/fetchData';

const Result = ({ data }) => (
    <GridItem colSpan="1">
        <ReactPlayer
            url={ data.link }
            width="100%"
        />
    </GridItem>
)

const Videos = () => {

    const { search } = useContext( SearchContext );

    const [ results, setResults ] = useState([]);
    const [ isLoading, setIsLoading ] = useState( false );

    const [ isPC ] = useMediaQuery('(min-width: 1024px)');
    const [ isTablet ] = useMediaQuery('(min-width: 768px)');

    useEffect(() => {
        setIsLoading( true );

        fetchData( search, 'videos')
            .then( data => {
                setResults( prev => data.results );
                setIsLoading( false );
            })
            .catch( err => console.log( err ));
    }, [ search ]);

    return (
        <Layout>
            {
                isLoading
                ? <Spinner message="Buscando videos" />

                : <Grid
                    width="100%"
                    gap={ isTablet ? '1rem' : '2rem' }
                    padding={ isTablet ? '1rem' : '2rem' }
                    templateColumns={ 
                        isPC
                            ? 'repeat(3, 1fr)'
                            : isTablet
                                ? 'repeat(2, 1fr)'
                                : 'repeat(1, 1fr)'
                    }
                >
                    {
                        results.map(( result, i ) => (
                            <Result key={ i } data={ result } />
                        ))
                    }
                </Grid>
            }
        </Layout>
    )
}

export default Videos;
