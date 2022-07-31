import cartItems from "../data/cartItems"
import { StyledCartItem, StyledDescription, StyledTitle, StyledPrice, StyledRemove, StyledMobile, StyledQuantity } from "./styles/CartItem.styled"
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { Flex } from "./styles/Flex.styled";

const CartItem = () => {
  return (
    <>
            {cartItems.map((item, index) => (
                <Flex key={index}>
                    <div>
                    <StyledCartItem>
                        <StyledMobile>
                            <img src={item.img} alt="" />
                        </StyledMobile>
                        <StyledDescription>
                            <StyledTitle>{item.title}</StyledTitle>
                            <StyledPrice>{`$${item.price}`}</StyledPrice>
                            <StyledRemove>remove</StyledRemove>
                        </StyledDescription>
                    </StyledCartItem>
                </div>
                <div>
                    <StyledQuantity>
                        <FaAngleUp color={'#839192'} />
                            {item.amount}
                        <FaAngleDown color={'#839192'} />
                    </StyledQuantity>
                </div>
            </Flex>  
            ))
            }      
    </>
  )
}

export default CartItem