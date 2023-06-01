import styled from "styled-components";
import moment from "moment";
import { orderTotalPrice } from "../utils";
export default function HistoryOrderCard({ order }) {
  return (
    <Container>
      <ItemDetails>Order ID: {order._id}</ItemDetails>
      <ItemDetails>
        Order Date: {moment(order.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
      </ItemDetails>
      <p>Products:</p>
      <List>
        {order?.products.map((product) => (
          <li key={product.product._id}>
            {product.product.title} x {product.quantity}
          </li>
        ))}
      </List>
      <ItemDetails>Total Price: {orderTotalPrice(order)}</ItemDetails>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  background-color: #dfe3eb;
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 10px;
`;
const ItemDetails = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

const List = styled.ul`
  list-style-type: none;
  margin-bottom: 10px;
  padding: 5px;
`;
