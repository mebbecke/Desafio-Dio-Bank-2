import { ChakraProvider, Card, CardHeader, Heading, Input, Center, CardBody } from "@chakra-ui/react"
import { DButton } from './Button';
// import { login } from './services/login';

interface ICard {
  id: string
}

export const DCard = ({ id }: ICard) => {
  return(
    <ChakraProvider>
      <Card 
        id={id}
        boxSize='sm'
        align='center'
        // paddingLeft='35px' 
        // paddingRight='35px' 
        // paddingBottom='10px'
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
          placeholder='E-mail' 
          _placeholder={{ opacity: 1, color: 'white' }}
          variant='filled'
          marginBottom='10px'
        />
        <Input 
          type='password' 
          placeholder='Senha'
          _placeholder={{ opacity: 1, color: 'white' }}
          variant='filled'
        />
        {/* <DButton id='login' onClick={login} text='Entrar'/> */}
        </CardBody>
        </>
      </Card>
    </ChakraProvider>
  )
}