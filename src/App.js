import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "./features/cart/cartSlice";
import { ThemeProvider } from "styled-components";
import { Container } from "./components/styles/Container.styled";
import { Heading } from "./components/styles/Heading.styled";
import Header from "./components/Header";
import GlobalStyles from "./components/styles/globalStyles";
import { MainContainer } from "./components/styles/MainContainer.styled";
import CartItems from "./components/CartItems";
import Modal from "./utils/Modal";

const theme = {
  colors: {
    background: '#F0FFFF',
    header: '#7B68EE',
    buttonRed: '#922b21',
    buttonBlue: '#000080',
  },
  backgroundColor: '#F0FFFF',
}

function App() {
  const {cartItems} = useSelector((state) => state.cart)
  const {isOpen} = useSelector((state) => state.modal)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])

  return (
    <>
    <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Header />
    <Container>
      <Heading>
        YOUR BAG
      </Heading>
      <MainContainer>
          <CartItems />
      </MainContainer>
      {isOpen && <Modal />}
    </Container>
    </ThemeProvider>
    </>
  );
}

export default App;
