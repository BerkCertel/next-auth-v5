import React from "react";
import CardWrapper from "./card-wrapper";

const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel="Welcome"
      backButtonLabel="Dont have an Account ?"
      backButtonHref="/auth/register"
      ShowSocial
    ></CardWrapper>
  );
};

export default LoginForm;
