import { useSelector } from "react-redux"
import { StyledHeader, Cart, CartCounter } from "./styles/Header.styled"
import { Container } from "./styles/Container.styled"
import { Logo } from "./styles/Header.styled"
import { Flex } from "./styles/Flex.styled"
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
    const {amount} = useSelector((state) => state.cart)
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
                            {amount}
                        </CartCounter>
                    </Cart>
                </Flex>
            </Container>
        </StyledHeader>
    )
}

export default Header