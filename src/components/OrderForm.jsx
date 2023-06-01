import { useEffect } from "react";
import { Form, Input } from "antd";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setForm, clearForm } from "../store/formSlice";

export default function OrderForm() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  useEffect(
    () => () => {
      dispatch(clearForm());
    },
    []
  );

  const onFieldsChange = (changedFields, allFields) => {
    let formObject = {};

    allFields.forEach((fild) => {
      formObject[fild.name] = fild.value;
    });

    dispatch(setForm(formObject));
  };

  return (
    <Container>
      <FormHeading>Customer Data For Order</FormHeading>
      <Form
        form={form}
        name="product"
        layout="vertical"
        size="large"
        onFieldsChange={onFieldsChange}
      >
        <Form.Item
          name="address"
          label="Address"
          rules={[
            {
              required: true,
              message: "Please input your address for delivery!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
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
              message: "Please input your phone number!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  padding: 10px;
`;

const FormHeading = styled.h3`
  text-align: center;
`;
