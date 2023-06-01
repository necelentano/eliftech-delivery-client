import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <Wrapper>
        <Content>Choose your food delivery.</Content>
        <Content>
          Please note. You can only order from one shop. Have a nice shopping.
        </Content>
        <Content>Clear your cart and choose another delivery.</Content>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  //align-items: center;
  padding: 20px;
  font-size: 40px;
  font-weight: 600;
  text-align: center;
`;
