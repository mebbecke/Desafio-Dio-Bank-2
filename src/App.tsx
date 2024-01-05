import { 
  Center,
  ChakraProvider,
  Input,
  Box,
  Button
} from '@chakra-ui/react'
import { DCard } from './components/Card';
import { Layout } from './components/Layout'

function App() {
  return (
    // <ChakraProvider>
    //   <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
    //     <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
    //       <Center>
    //         <h1>Faça o login</h1>
    //       </Center>
    //       <Input placeholder="email" />
    //       <Input placeholder="password" />
    //       <Center>
    //         <Button onClick={login} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
    //           Button
    //         </Button>
    //       </Center>
    //     </Box>
    //   </Box>
    // </ChakraProvider>
    <Layout>
      <DCard id='login'/>
    </Layout>
  );
}

export default App;
