import { ChakraProvider, Box } from '@chakra-ui/react';

export const Header  = () => {
  return(
    <ChakraProvider>
      <Box bg='pink' >
        Dio Bank
      </Box>
    </ChakraProvider>
  )
}
