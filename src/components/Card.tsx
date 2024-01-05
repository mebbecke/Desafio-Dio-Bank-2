import { ChakraProvider, Card, CardHeader, Input } from "@chakra-ui/react"
import { DButton } from './Button';
// import { login } from './services/login';

interface ICard {
  id: string
}

export const DCard = ({ id }: ICard) => {
  return(
    <ChakraProvider>
      <Card id={id} align='center'>
        <>
        <CardHeader>
          Faça o login
        </CardHeader>
        <Input placeholder='E-mail'/>
        <Input placeholder='Senha' />
        {/* <DButton id='login' onClick={login} text='Entrar'/> */}
        </>
      </Card>
    </ChakraProvider>
  )
}