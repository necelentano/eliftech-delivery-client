import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
//import Header from "./Header";
//import Footer from "./Footer";

const Layout = () => {
  return (
    <Container>
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </Container>
  );
};
export default Layout;

const Container = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 200px auto;
  max-width: 1200px;
  margin: 0 auto;
`;

const SidebarWrapper = styled.div`
  padding-top: 10px;
  padding-left: 10px;
`;
const OutletWrapper = styled.div`
  padding-top: 10px;
  padding-right: 10px;
`;
