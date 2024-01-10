import { ChakraProvider, Card, CardHeader, Heading, Input, CardBody } from "@chakra-ui/react"
import { DButton } from './Button';
import { login } from "../services/login";

interface ICard {
  id: string
}

export const DCard = ({ id }: ICard) => {
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
            />
            <Input
              color='#73818f'
              type='password'
              placeholder='Senha'
              _placeholder={{ opacity: 1 }}
              _focus={{ bg: '#e3e5e8' }}
              variant='filled'
            />
            <DButton id='login' onClick={login} text='Entrar' />
          </CardBody>
        </>
      </Card>
    </ChakraProvider>
  )
}
