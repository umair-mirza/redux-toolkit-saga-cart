import { Flex } from "./styles/Flex.styled"
import { StyledTotal, StyledLine } from "./styles/Total.styled"

const Total = () => {
  return (
    <>
        <StyledLine />
        <StyledTotal>
            <Flex>
                <div>
                    Total:
                </div>
                <div>
                    $2199.86
                </div>
            </Flex>
        </StyledTotal>
    </>
  )
}

export default Total