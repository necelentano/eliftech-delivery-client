import styled from "styled-components";
import { addToCart } from "../store/cartSlice";
import { useDispatch } from "react-redux";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  const { title, description, image, price } = product;
  return (
    <Card>
      <CardImageContainer>
        <CardImage src={image} />
      </CardImageContainer>
      <CardDetails>
        <CardHeading>{title}</CardHeading>
        <CardDescription>{description}</CardDescription>
        <Price>Price: {price}</Price>
      </CardDetails>
      <ButtonWrapper>
        <AddButton onClick={() => dispatch(addToCart(product))}>
          Add To Cart
        </AddButton>
      </ButtonWrapper>
    </Card>
  );
}

const Card = styled.div`
  background-color: #1c1b29;
  border-radius: 20px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.18);
`;

const CardImageContainer = styled.div`
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
`;

const CardImage = styled.img`
  width: 100%;
  display: block;
  border-radius: 20px 20px 0 0;
`;

const CardDetails = styled.div`
  padding: 10px;
`;

const CardHeading = styled.h3`
  color: #ffffff;
  font-weight: 600;
  font-size: 18px;
  margin: 10px 0 15px 0;
`;

const CardDescription = styled.p`
  color: #a0a0a0;
  font-size: 15px;
  line-height: 30px;
  font-weight: 400;
`;

const Price = styled.p`
  color: #34eb6e;
  font-size: 26px;
  margin: 0 auto;
`;

const AddButton = styled.button`
  background-color: #44c767;
  border-radius: 20px;
  border: 1px solid #18ab29;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 17px;
  padding: 12px 26px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #2f6627;

  &:hover {
    background-color: #5cbf2a;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
`;
