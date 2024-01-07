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
      <Box 
        w='100%' 
        minHeight='100vh' 
        // bg='#2f353a'
        bg='#1e192c'
        display='flex'
        flexWrap='wrap'
        alignItems='center'
        justifyContent='center'
      >
        <DCard id='login'/>
      </Box>
    </Layout>
  );
}

export default App;
