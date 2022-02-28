import { ChakraProvider } from '@chakra-ui/react';

import SearchProvider from './context/SearchProvider';
import Navigation from './routes/Navigation';

const App = () => {
    return (
        <ChakraProvider>
            <SearchProvider>
                <Navigation />
            </SearchProvider>
        </ChakraProvider>
    )
}

export default App;
