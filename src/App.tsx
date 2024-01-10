import { Box } from '@chakra-ui/react';
import { DCard } from './components/Card';
import { Layout } from './components/Layout';

function App() {
  return (
    <Layout>
      <Box 
        w='100%' 
        minHeight='100vh'
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
