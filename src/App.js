import { ThemeProvider } from "styled-components";
import { Container } from "./components/styles/Container.styled";
import Header from "./components/Header";
import GlobalStyles from "./components/styles/globalStyles";

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
      <div>
        Hello
      </div>
    </Container>
    </ThemeProvider>
    </>
  );
}

export default App;
