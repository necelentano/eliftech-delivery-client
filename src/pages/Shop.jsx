import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useGetOneShopQuery } from "../store/shopsApi";
import ProductList from "../components/ProductList";

export default function Shop() {
  const params = useParams();
  const { slug } = params;

  const { data, error, isLoading } = useGetOneShopQuery(slug);

  if (error)
    return (
      <Error>
        <p>Shops loading error!</p>
      </Error>
    );

  return isLoading ? (
    <p>{"Loading"}</p>
  ) : (
    <>
      <ShopDescription>{data?.shop.description}</ShopDescription>
      <ProductList products={data?.products} />
    </>
  );
}

const Error = styled.div`
  width: 100%;
  color: red;
`;

const ShopDescription = styled.h2`
  text-align: center;
`;
