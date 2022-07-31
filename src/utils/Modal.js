import { StyledButton } from "../components/styles/Button.styled"
import { StyledModal, StyledInModal } from "../components/styles/Modal.styled"
import { SimpleFlex } from "../components/styles/SimpleFlex"

const Modal = () => {
  return (
    <>
        <StyledModal>
            <StyledInModal>
                <div>
                    <p>Remove all items from your Shopping Cart?</p>
                </div>
                <div>
                    <SimpleFlex>
                        <StyledButton color={'#000080'}>
                            Confirm
                        </StyledButton>

                        <StyledButton color={'#922b21'}>
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