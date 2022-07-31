import { StyledButton } from "./styles/Button.styled"
import { StyledClearCart } from "./styles/ClearCart.styled"


const ClearCart = () => {
  return (
    <>
        <StyledClearCart>
            <StyledButton color={'#922b21'}>
                Clear Cart
            </StyledButton>
        </StyledClearCart>
    </>
  )
}

export default ClearCart