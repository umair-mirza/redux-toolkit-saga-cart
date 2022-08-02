import { useSelector, useDispatch } from "react-redux";
import { removeItem, increase, decrease } from "../features/cart/cartSlice";
import { StyledCartItem, StyledDescription, StyledTitle, StyledPrice, StyledRemove, StyledMobile, StyledQuantity } from "./styles/CartItem.styled"
import { EmptyCart } from "./styles/EmptyCart.styled";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { Flex } from "./styles/Flex.styled";
import Total from "./Total";
import ClearCart from "./ClearCart";

const CartItem = () => {
    const {cartItems} = useSelector((state) => state.cart)
    const dispatch = useDispatch()

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
                            <StyledRemove onClick={() => dispatch(removeItem(item.id))}>remove</StyledRemove>
                        </StyledDescription>
                    </StyledCartItem>
                </div>
                <div>
                    <StyledQuantity>
                        <FaAngleUp color={'#839192'} onClick={() => dispatch(increase(item))} />
                            {item.amount}
                        <FaAngleDown color={'#839192'} onClick={() => dispatch(decrease(item))} />
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