import {extendTheme} from '@chakra-ui/react'
import { color } from 'framer-motion';

export const theme = extendTheme({
    styles: {
        global: {
            body: {
                bgGradient: "linear(120deg, #1E1E1E 22%, #560B76 95%)",
                color: 'white',
                
            },
        },
    },

});
