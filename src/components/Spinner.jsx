import RingLoader from 'react-spinners/RingLoader';
import { Box, Text } from '@chakra-ui/react';

const Spinner = ({ message = 'Cargando...' }) => {

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            height="70vh"
        >
            <RingLoader
                color="#90cdf4"
                size="150px"
            />
            <Text
                fontSize="xl"
                textAlign="center"
                marginTop="6"
                color="blue.300"
            >
                { message }
            </Text>
        </Box>
    )
}

export default Spinner