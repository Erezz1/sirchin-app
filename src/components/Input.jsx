import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Switch, FormLabel, Input, Text, Box, InputGroup, InputRightElement, Button, useColorMode, useToast } from '@chakra-ui/react';

import { FcSearch } from 'react-icons/fc';
import { BsMoonStarsFill } from 'react-icons/bs';
import { RiSunFoggyFill } from 'react-icons/ri';
import { BiSearchAlt2 } from 'react-icons/bi';

import SearchContext from '../context/SearchContext';

const InputContainer = () => {

    const { search, setSearch } = useContext( SearchContext );
    const [ value, setValue ] = useState( search );

    const toast = useToast();
    const { colorMode, toggleColorMode } = useColorMode();

    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();

        if ( value.trim() === '' ) {
            return toast({
                title: 'Error',
                description: 'Debes ingresar una palabra clave',
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: 'bottom-right',
            });
        }

        setSearch( prev => value );
    }

    const handleClickLogo = () => {
        setSearch('');
        setValue('');
        navigate('/');
    }

    return (
        <Box
            as="form"
            onSubmit={ handleSubmit }
            display="flex"
            flexDirection={['column', 'row']}
            alignItems="center"
            width="100%"
            maxWidth="1500px"
            margin="0 auto"
            gap={['1rem', '2rem', '3rem']}
            padding="1rem"
        >
            <Text
                fontSize="3xl"
                display="flex"
                alignItems="center"
                fontWeight="extrabold"
                cursor="pointer"
                onClick={ handleClickLogo }
            >
                SIRCH<FcSearch />N
            </Text>

            <InputGroup>
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
                display={['none', 'flex']}
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
    )
}

export default InputContainer;
