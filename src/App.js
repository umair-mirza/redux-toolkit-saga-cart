import { ThemeProvider } from "styled-components";
import { Container } from "./components/styles/Container.styled";
import { Heading } from "./components/styles/Heading.styled";
import Header from "./components/Header";
import GlobalStyles from "./components/styles/globalStyles";
import { MainContainer } from "./components/styles/MainContainer.styled";
import CartItem from "./components/CartItem";
import { StyledCartItem } from "./components/styles/CartItem.styled";

const theme = {
  colors: {
    background: '#F0FFFF',
    header: '#7B68EE',
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
          <CartItem />
      </MainContainer>
    </Container>
    </ThemeProvider>
    </>
  );
}

export default App;
