import { useDispatch } from "react-redux"
import { openModal } from "../features/modal/modalSlice"
import { StyledButton } from "./styles/Button.styled"
import { StyledClearCart } from "./styles/ClearCart.styled"


const ClearCart = () => {
  const dispatch = useDispatch()

  return (
    <>
        <StyledClearCart>
            <StyledButton color={'#922b21'} onClick={() => dispatch(openModal())}>
                Clear Cart
            </StyledButton>
        </StyledClearCart>
    </>
  )
}

export default ClearCart