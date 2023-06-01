import styled from "styled-components";
import { Link as LinkRouter, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { cartQuantity } from "../utils";
import { useEffect } from "react";

export default function Header() {
  const { cart } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const location = useLocation();

  // redirect if the shop already chosen
  useEffect(() => {
    if (cart[0]?.shop.slug) {
      const slug = cart[0].shop.slug;
      // temp hardcoded
      const allowedPaths = [`/${slug}`, "/cart", "/history", "/"];
      if (allowedPaths.includes(location.pathname)) {
        return;
      } else {
        navigate("/");
      }
    }
  }, [cart, location, navigate]);

  return (
    <Nav>
      <NavbarContainer>
        <NavMenu>
          <NavItem>
            <NavLink to="/">Shop</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/cart">Shopping Cart({cartQuantity(cart)})</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/history">History</NavLink>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
}

const Nav = styled.nav`
  background-color: #326da8;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
`;

const NavItem = styled.li`
  height: 80px;
`;

const NavLink = styled(LinkRouter)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 24px;
`;
