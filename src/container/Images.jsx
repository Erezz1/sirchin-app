import { useState, useEffect, useContext } from 'react';
import { Box, Text, Image, Link } from '@chakra-ui/react';
import Masonry from 'react-masonry-css';

import Layout from '../layout/Layout';
import SearchContext from '../context/SearchContext';
import Spinner from '../components/Spinner';
import { fetchData } from '../api/fetchData';

const breakpointColumnsObj = {
    default: 8,
    1536: 7,
    1280: 6,
    1024: 5,
    768: 4,
    640: 3,
    500: 2
};

const Result = ({ data }) => {

    const { image, link } = data;

    return (
        <Box padding="1rem">
            <Link
                href={ link.href }
                target="_blank"
                _focus={{ outline: 'none' }}
            >
                <Image
                    src={ image.src }
                    alt={ image.alt }
                    width="100%"
                />

                <Text isTruncated>
                    { link.title }
                </Text>

                <Text
                    fontSize="sm"
                    opacity="0.7"
                >
                    {
                        link.href.length > 22
                            ? link.href.substring(0, 22)
                            : link.href
                    }
                </Text>
            </Link>
        </Box>
    )
}

const Images = () => {

    const { search } = useContext( SearchContext );

    const [ results, setResults ] = useState([]);
    const [ isLoading, setIsLoading ] = useState( false );

    useEffect(() => {
        setIsLoading( true );
        fetchData( search, 'images')
            .then( data => {
                setResults( prev => data.image_results );
                setIsLoading( false );
            })
            .catch( err => console.log( err ));
    }, [ search ]);

    return (
        <Layout>
            {
                isLoading
                ? <Spinner message="Buscando imagenes" />

                : <Masonry
                    breakpointCols={ breakpointColumnsObj }
                    className='my-masonry-grid'
                    style={{ display: 'flex' }}
                >
                    {
                        results.map(( result, i ) => (
                            <Result key={ i } data={ result } />
                        ))
                    }
                </Masonry>
            }
        </Layout>
    )
}

export default Images;
