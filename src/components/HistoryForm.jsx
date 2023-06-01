import styled from "styled-components";
import { Form, Input, Button } from "antd";
import { useGetAllOrdersByCustomerMutation } from "../store/orderApi";
import HistoryOrderList from "./HistoryOrderList";

export default function HistoryForm() {
  const [form] = Form.useForm();
  const [getAllOrdersByCustomer, { data, isLoading, error, isError }] =
    useGetAllOrdersByCustomerMutation();

  const onFinish = async (values) => {
    await getAllOrdersByCustomer(values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Container>
      {isError && <Error>{error.data.message}</Error>}
      <Form
        form={form}
        name="history"
        layout="vertical"
        size="large"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              message: "Please input your valid email!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone"
          rules={[
            {
              required: true,
              message: "Please input your valid phone number!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
      <hr />
      <HistoryOrderList data={data} />
    </Container>
  );
}

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const Error = styled.div`
  width: 100%;
  color: red;
  font-size: 20px;
`;
