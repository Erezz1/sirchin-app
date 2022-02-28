import { useContext, useState } from 'react';
import { Box, Button, FormLabel, Input, InputGroup, InputRightElement, Switch, Text, useColorMode } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { BiSearchAlt2 } from 'react-icons/bi';
import { FcSearch } from 'react-icons/fc';
import { RiSunFoggyFill } from 'react-icons/ri';
import { BsMoonStarsFill } from 'react-icons/bs';

import SearchContext from '../context/SearchContext';

const Home = () => {

    const { setSearch } = useContext( SearchContext );
    const [ value, setValue ] = useState('');

    const { colorMode, toggleColorMode } = useColorMode();

    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        setSearch( value );
        navigate( '/search' );
    }

    return (
        <>
            <Helmet>
                <title>Busca con Sirchin</title>
            </Helmet>

            <Box
                as="form"
                height="100vh"
                width="100vw"
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                padding="1rem"
                onSubmit={ handleSubmit }
                position="relative"
            >
                <Text
                    fontSize={['7xl', '8xl', '9xl']}
                    fontWeight="extrabold"
                    textAlign="center"
                    display="flex"
                    alignItems="center"
                >
                    SIRCH<FcSearch />N
                </Text>
                <InputGroup
                    width="100%"
                    maxWidth="800px"
                    margin="0 auto"
                >
                    <Input
                        onChange={ e => setValue( e.target.value ) }
                        value={ value }
                        placeholder="Busca con Sirchin..."
                        size="lg"
                    />

                    <InputRightElement height="100%" width="3rem">
                        <Button
                            type="submit"
                            padding="0"
                            fontSize="2xl"
                        >
                            <BiSearchAlt2 />
                        </Button>
                    </InputRightElement>
                </InputGroup>

                <Box
                    alignItems="center"
                    display="flex"
                    position="absolute"
                    top="1rem"
                    right="1rem"
                >
                    <FormLabel
                        htmlFor='dark-mode'
                        fontSize="2xl"
                        margin="0"
                        marginRight="0.5rem"
                        cursor="pointer"
                    >
                        { colorMode === 'light' ? <RiSunFoggyFill /> : <BsMoonStarsFill /> }
                    </FormLabel>
                    <Switch
                        size="lg"
                        isChecked={ colorMode === 'dark' }
                        onChange={ toggleColorMode }
                        cursor="pointer"
                        id='dark-mode'
                    />
                </Box>
            </Box>
        </>
    )
}

export default Home;
