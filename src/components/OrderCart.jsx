import { useSelector } from "react-redux";
import styled from "styled-components";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

export default function OrderCart() {
  const { cart } = useSelector((state) => state.cart);

  return (
    <Container>
      <CartHeading>Shopping Cart</CartHeading>
      {cart?.map((product) => (
        <CartItem key={product._id} product={product} />
      ))}
      <CartSummary cart={cart} />
    </Container>
  );
}

const Container = styled.div`
  padding: 10px;
`;

const CartHeading = styled.h3`
  text-align: center;
`;
