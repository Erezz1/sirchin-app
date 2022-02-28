import { useState, useEffect, useContext } from 'react';
import { Grid, GridItem, Link, Text, useMediaQuery, useColorMode } from '@chakra-ui/react';

import Layout from '../layout/Layout';
import SearchContext from '../context/SearchContext';
import Spinner from '../components/Spinner';
import { fetchData } from '../api/fetchData';

const Result = ({ data }) => {

    const { colorMode } = useColorMode();

    const { link, title, description } = data;

    return (
        <GridItem colSpan="1">
            <Link href={ link } target="_blank">
                <Text
                    isTruncated
                    fontSize="sm"
                    opacity="0.7"
                >{
                    link.length > 30
                        ? link.substring(0, 30)
                        : link
                }</Text>

                <Text
                    fontSize="xl"
                    color={ colorMode === 'light' ? 'blue.600' : 'blue.300' }
                >{ title }</Text>
            </Link>

            <Text opacity="0.9">
                { description }
            </Text>
        </GridItem>
    )
}

const All = () => {

    const { search } = useContext( SearchContext );

    const [ results, setResults ] = useState([]);
    const [ isLoading, setIsLoading ] = useState( false );

    const [ isPC ] = useMediaQuery('(min-width: 1024px)');

    useEffect(() => {
        setIsLoading( true );

        fetchData( search )
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
                ? <Spinner message="Buscando resultados" />

                : <Grid
                    width="100%"
                    maxWidth="1200px"
                    margin="0 auto"
                    padding="1rem 0.5rem"
                    templateColumns={ isPC ? 'repeat(2, 1fr)' : '1fr' }
                    gap={ isPC ? '2rem' : '1.5rem' }
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

export default All;
