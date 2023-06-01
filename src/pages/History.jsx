import styled from "styled-components";
import HistoryForm from "../components/HistoryForm";

export default function History() {
  return (
    <Container>
      <PageDescription>Orders History</PageDescription>
      <HistoryForm />
    </Container>
  );
}

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const PageDescription = styled.h2`
  text-align: center;
`;
