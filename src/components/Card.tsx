import { ChakraProvider, Card, CardHeader, Heading, Input, CardBody } from "@chakra-ui/react"
import { DButton } from './Button';
import { login } from "../services/login";
import { useState, useEffect } from 'react';
import { api } from '../api';

interface ICard {
  id: string
}

interface UserData{
  email: string
  password: string
  name: string
}

export const DCard = ({ id }: ICard) => {
  const [email, setEmail ] = useState<string>('')
  const [userData, setUserData] = useState<null | UserData>()

  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api
      setUserData(data)
    }

    getData()
  }, [])

  console.log(userData)

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
