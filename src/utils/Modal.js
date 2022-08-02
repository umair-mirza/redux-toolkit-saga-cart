import { useSelector, useDispatch } from "react-redux"
import { clearCart } from "../features/cart/cartSlice"
import { closeModal } from "../features/modal/modalSlice"
import { StyledButton } from "../components/styles/Button.styled"
import { StyledModal, StyledInModal } from "../components/styles/Modal.styled"
import { SimpleFlex } from "../components/styles/SimpleFlex"

const Modal = () => {
    const dispatch = useDispatch()
  return (
    <>
        <StyledModal>
            <StyledInModal>
                <div>
                    <p>Remove all items from your Shopping Cart?</p>
                </div>
                <div>
                    <SimpleFlex>
                        <StyledButton color={'#000080'} onClick={() => {
                            dispatch(clearCart())
                            dispatch(closeModal())
                        }}>
                            Confirm
                        </StyledButton>

                        <StyledButton color={'#922b21'} onClick={() => dispatch(closeModal())}>
                            Cancel
                        </StyledButton>
                    </SimpleFlex>
                </div>

            </StyledInModal>
        </StyledModal>
    </>
  )
}

export default Modal