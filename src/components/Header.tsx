import { ChakraProvider, Box, Flex, Spacer, Button } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "./AppContext";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const logout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <ChakraProvider>
      <Flex
        bg="#151515"
        padding="15px"
        color="white"
        w="100%"
        h="70px"
        alignItems="center"
      >
        <Box
          // display='flex'
          fontFamily="Open Sans, sans-serif"
          fontSize="30px"
          fontWeight="bold"
        >
          Dio Bank
        </Box>
        {isLoggedIn && (
          <>
            <Spacer />
            <Button onClick={() => logout()}>Sair</Button>
          </>
        )}
      </Flex>
    </ChakraProvider>
  );
};
