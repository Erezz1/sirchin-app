import {
    Box,
    Button,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

import { routes } from '../routes/routes';

const CustomTab = ({ iconactive, iconinactive, isSelected, label }) => (
    <Button
        borderColor={ isSelected ? 'blue.200' : 'transparent' }
        fontWeight={ isSelected ? 'bold' : 'normal' }
        borderBottomWidth="2px"
        borderRadius="none"
        backgroundColor="transparent"
        _focus={{ outline: 'none' }}
    >
        <Box fontSize="xl" as='span' mr='2'>
            { 
                isSelected
                    ? iconactive
                    : iconinactive
            }
        </Box>

        { label }
    </Button>
);

const Tabs = () => (
    <Box
        borderBottomWidth="1px"
        width="100%"
    >
        <Box
            display="flex"
            overflowX="auto"
            overflowY="hidden"
            width="100%"
            maxWidth="1000px"
            margin="0 auto"
        >
            {
                routes.map( tab => (
                    <NavLink
                        key={ tab.label }
                        to={ tab.path }
                    >
                        {({ isActive }) => (
                            <CustomTab
                                iconactive={ tab.iconactive }
                                iconinactive={ tab.iconinactive }
                                isSelected={ isActive }
                                label={ tab.label }
                            />
                        )}
                    </NavLink>
                ))
            }
        </Box>
    </Box>
)

export default Tabs;
