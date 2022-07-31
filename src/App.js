import { ThemeProvider } from "styled-components";
import { Container } from "./components/styles/Container.styled";
import { Heading } from "./components/styles/Heading.styled";
import Header from "./components/Header";
import GlobalStyles from "./components/styles/globalStyles";
import { MainContainer } from "./components/styles/MainContainer.styled";
import CartItems from "./components/CartItems";
import Total from "./components/Total";
import ClearCart from "./components/ClearCart";
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
      <Total />
      <ClearCart />
      <Modal />
    </Container>
    </ThemeProvider>
    </>
  );
}

export default App;
