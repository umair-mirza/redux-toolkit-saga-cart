import { useDispatch } from "react-redux"
import { clearCart } from "../features/cart/cartSlice"
import { StyledButton } from "./styles/Button.styled"
import { StyledClearCart } from "./styles/ClearCart.styled"


const ClearCart = () => {
  const dispatch = useDispatch()

  return (
    <>
        <StyledClearCart>
            <StyledButton color={'#922b21'} onClick={() => dispatch(clearCart())}>
                Clear Cart
            </StyledButton>
        </StyledClearCart>
    </>
  )
}

export default ClearCart