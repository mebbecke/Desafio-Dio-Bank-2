import { ChakraProvider, Card, CardHeader, Heading, Input, CardBody } from "@chakra-ui/react"
import { DButton } from './Button';
import { login } from "../services/login";
import { useState } from 'react';

interface ICard {
  id: string
}

export const DCard = ({ id }: ICard) => {
  const [email, setEmail ] = useState<string>('')

  return (
    <ChakraProvider>
      <Card
        id={id}
        boxSize='sm'
        align='center'
        boxShadow='xl'
        bg='#73818f'
        textColor='white'
      >
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
      </Card>
    </ChakraProvider>
  )
}
