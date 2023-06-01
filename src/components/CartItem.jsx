import { InputNumber } from "antd";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Button } from "antd";

import { setQuantity, removeItem } from "../store/cartSlice";
import { cartItemSumPrice } from "../utils";

export default function CartItem({ product }) {
  const dispatch = useDispatch();
  const { title, image, quantity, _id } = product;

  const onChange = (value) => {
    dispatch(setQuantity({ id: _id, quantity: value }));
  };

  return (
    <ItemContainer>
      <ImageContainer>
        <ItemImage src={image} />
      </ImageContainer>
      <ItemDetails>
        <ItemName>{title}</ItemName>
        <ItemPrice>Price: {cartItemSumPrice(product)}</ItemPrice>
        <InputNumber
          size="large"
          min={1}
          max={10}
          defaultValue={quantity}
          onChange={onChange}
        />
        <ButtonWrapper>
          <Button
            type="primary"
            danger
            onClick={() => dispatch(removeItem(_id))}
          >
            Delete
          </Button>
        </ButtonWrapper>
      </ItemDetails>
    </ItemContainer>
  );
}

const ItemContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #dfe3eb;
  border-radius: 10px;
  margin-bottom: 10px;
`;
const ImageContainer = styled.div`
  position: relative;
`;

const ItemImage = styled.img`
  width: 100%;
  display: block;
  border-radius: 10px 0 0 10px;
`;

const ItemDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ItemName = styled.p`
  font-weight: 600;
`;

const ItemPrice = styled.p`
  font-weight: 400;
`;

const ButtonWrapper = styled.div`
  padding: 10px;
`;
