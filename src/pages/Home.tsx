import { Box, CardBody, CardHeader, Heading, Input } from "@chakra-ui/react"
import { DCard } from "../components/Card";
import { useState } from "react";
import { DButton } from "../components/Button";
import { login } from "../services/login";

const Home = () => {
    const [email, setEmail ] = useState<string>('')
    return (
        <Box>
            <DCard id='login'>
            <>
          <CardHeader>
            <Heading size='lg'>Faça o login</Heading>
          </CardHeader>
          <CardBody justifyContent='center'>
            <Input
              color='#73818f'
              placeholder='E-mail'
              _placeholder={{ opacity: 1 }}
              _focus={{ bg: '#e3e5e8' }}
              variant='filled'
              marginBottom='10px'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Input
              color='#73818f'
              type='password'
              placeholder='Senha'
              _placeholder={{ opacity: 1 }}
              _focus={{ bg: '#e3e5e8' }}
              variant='filled'
            />
            <DButton 
              id='login'
              onClick={() => login(email)} 
              text='Entrar' 
            />
          </CardBody>
        </>
            </DCard>
        </Box>
    );
}

export default Home;