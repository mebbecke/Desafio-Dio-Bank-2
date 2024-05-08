import { Layout } from './components/Layout';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Conta from './pages/Conta';
import { ChakraProvider } from '@chakra-ui/react';
import ContaInfo from './pages/ContaInfo';
import { AppContextProvider } from './components/AppContext';

function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/conta/:id' element={<Conta />} />
              <Route path='/infoconta' element={<ContaInfo />} />
            </Routes>
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
