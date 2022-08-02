import { useSelector } from "react-redux";
import { StyledCartItem, StyledDescription, StyledTitle, StyledPrice, StyledRemove, StyledMobile, StyledQuantity } from "./styles/CartItem.styled"
import { EmptyCart } from "./styles/EmptyCart.styled";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { Flex } from "./styles/Flex.styled";
import Total from "./Total";
import ClearCart from "./ClearCart";

const CartItem = () => {
    const {cartItems} = useSelector((state) => state.cart)

  return (
    <>
            {cartItems.length < 1 ? (
                <EmptyCart>
                    Your cart is empty
                </EmptyCart>
            ) : (
            cartItems.map((item, index) => (
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
            )
            }      
            {cartItems.length < 1 ? (null) : (
            <div>
                <Total />
                <ClearCart />
            </div>
            )}
    </>
  )
}

export default CartItem