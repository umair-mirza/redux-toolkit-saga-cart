import { useSelector } from "react-redux"
import { Flex } from "./styles/Flex.styled"
import { StyledTotal, StyledLine } from "./styles/Total.styled"

const Total = () => {
    const {total} = useSelector((state) => state.cart)

  return (
    <>
        <StyledLine />
        <StyledTotal>
            <Flex>
                <div>
                    Total:
                </div>
                <div>
                    ${total.toFixed(2)}
                </div>
            </Flex>
        </StyledTotal>
    </>
  )
}

export default Total