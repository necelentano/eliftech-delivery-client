import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { allCartPrice, validForm, transformCart } from "../utils";
import { clearCart } from "../store/cartSlice";
import { useCreateCustomerMutation } from "../store/customerApi";
import { useCreateOrderMutation } from "../store/orderApi";
import { Button, Modal, notification } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useEffect, useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const { confirm } = Modal;

export default function CartSummary({ cart }) {
  const dispatch = useDispatch();
  const recaptchaRef = useRef();
  const { form } = useSelector((state) => state.form);
  const [isOrderValid, setIsOrderValid] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState("");
  const [
    createCustomer,
    {
      isLoading: customerIsLoading,
      isError: customerIsError,
      error: customerError,
    },
  ] = useCreateCustomerMutation();

  const [
    createOrder,
    { isLoading: orderIsLoading, isError: orderIsError, error: orderError },
  ] = useCreateOrderMutation();

  useEffect(() => {
    const formIsValid = validForm(form);

    if (cart.length > 0 && formIsValid) {
      setIsOrderValid(false);
    } else {
      setIsOrderValid(true);
    }
  }, [form, cart]);

  const recapchaOnChange = (value) => {
    setRecaptchaValue(value);
  };

  const handleClearCart = () => {
    confirm({
      title: `Do you want to delete all products from cart?`,
      onOk() {
        dispatch(clearCart());
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const handleCreateOrder = async () => {
    recaptchaRef.current.reset();

    const customerResult = await createCustomer({
      form,
      recaptchaToken: recaptchaValue,
    });

    if (customerResult?.error?.status === 400) {
      return notification.open({
        message: customerResult.error.data.message,
        description: "Sorry, you are not a human!",
        onClick: () => {
          console.log("Notification Clicked!");
        },
      });
    }

    if (customerResult) {
      await createOrder({
        orderedBy: customerResult?.data?._id,
        products: transformCart(cart),
      });
      notification.open({
        message: "SUCCESS! Your order has been processed",
        description: "Please wait your delivery!",
        onClick: () => {
          console.log("Notification Clicked!");
        },
      });
    }
  };

  return (
    <Container>
      {customerIsError && <Error>{customerError.data.message}</Error>}
      {orderIsError && <Error>{orderError.data.message}</Error>}
      <TotalPrice>Total price: {allCartPrice(cart)}</TotalPrice>
      <RecapchaWrapper>
        <ReCAPTCHA
          sitekey={import.meta.env.VITE_SITY_KEY}
          onChange={recapchaOnChange}
          ref={recaptchaRef}
        />
      </RecapchaWrapper>
      <ButtonWrapper>
        <Button
          size="large"
          type="primary"
          danger
          onClick={handleClearCart}
          disabled={cart.length === 0}
        >
          Clear Cart
        </Button>
        <Button
          size="large"
          type="primary"
          onClick={handleCreateOrder}
          disabled={isOrderValid}
          icon={<ShoppingCartOutlined />}
          loading={customerIsLoading || orderIsLoading}
        >
          Buy Food
        </Button>
      </ButtonWrapper>
    </Container>
  );
}

const Container = styled.div`
  //width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TotalPrice = styled.p`
  font-size: 30px;
  font-weight: 600;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const RecapchaWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;

const Error = styled.div`
  width: 100%;
  color: red;
  font-size: 20px;
`;
