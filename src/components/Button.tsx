import { Button } from '@chakra-ui/react';

interface IButton {
    id: string,
    onClick: () => void,
    text: string
}

export const DButton = ({ id, onClick, text }: IButton) => {
    return (
        <Button id={id} onClick={onClick} colorScheme='pink' variant='solid' size='sm' margin-top='5px'>
            {text}
        </Button>
    )
}