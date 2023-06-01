import styled from "styled-components";
import { Link } from "react-router-dom";

import { useGetAllShopsQuery } from "../store/shopsApi";
import { useSelector } from "react-redux";
import { isLinkDisabled } from "../utils";

export default function Sidebar() {
  const { cart } = useSelector((state) => state.cart);
  const { data, error, isLoading } = useGetAllShopsQuery();
  if (error)
    return (
      <Wrapper>
        <Error>
          <p>Shops loading error!</p>
        </Error>
      </Wrapper>
    );

  return (
    <Wrapper>
      {isLoading ? (
        "Loading"
      ) : (
        <ShopsList>
          {data?.map((shop) => (
            <ShopsListItem key={shop._id}>
              <RouterLink
                to={shop.slug}
                active={`${isLinkDisabled(cart, shop.slug)}`}
              >
                {shop.name}
              </RouterLink>
            </ShopsListItem>
          ))}
        </ShopsList>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;

const ShopsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ShopsListItem = styled.li`
  padding: 10px 15px;
  background-color: #eeeeee;
  border: 1px solid #dddddd;
  text-align: center;
  font-size: 26px;
`;

const RouterLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: black;
  pointer-events: ${({ active }) => (active === "false" ? "none" : "auto")};
  opacity: ${({ active }) => (active === "false" ? "0.4" : "1")};
`;

const Error = styled.div`
  width: 100%;
  color: red;
`;
