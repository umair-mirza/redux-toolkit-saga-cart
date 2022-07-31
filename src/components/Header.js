import { StyledHeader, Cart, CartCounter } from "./styles/Header.styled"
import { Container } from "./styles/Container.styled"
import { Logo } from "./styles/Header.styled"
import { Flex } from "./styles/Flex.styled"
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <StyledHeader>
        <Container>
            <Flex>
                <div>
                    <Logo>Redux Cart</Logo>
                </div>
                <Cart>
                    <FaShoppingCart size={40} color={'#fff'} />
                    <CartCounter>
                        0
                    </CartCounter>
                </Cart>
            </Flex>
        </Container>
    </StyledHeader>
  )
}

export default Header