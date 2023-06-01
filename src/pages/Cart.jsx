import styled from "styled-components";
import OrderForm from "../components/OrderForm";
import OrderCart from "../components/OrderCart";

export default function Cart() {
  return (
    <Container>
      <OrderForm />
      <OrderCart />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1200px;
  margin: 0 auto;
`;
