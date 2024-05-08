import { ChakraProvider, Box } from '@chakra-ui/react';
import { useContext } from 'react';
import { AppContext } from './AppContext';

export const Header  = () => {
  const context = useContext(AppContext)
  console.log('retorno do header', context)

  return(
    <ChakraProvider>
      <Box 
        display='flex'
        bg='#151515' 
        padding='15px' 
        color='white' 
        w='100%' 
        h='70px' 
        alignItems='center'
        fontFamily='Open Sans, sans-serif'
        fontSize='30px'
        fontWeight='bold'
      >
        Dio Bank
      </Box>
    </ChakraProvider>
  )
}
