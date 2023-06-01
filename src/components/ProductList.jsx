import styled from "styled-components";
import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  return (
    <CardsWrapper>
      {products?.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </CardsWrapper>
  );
}

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  padding: 20px;
  grid-gap: 40px;
`;
