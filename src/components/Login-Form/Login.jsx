import React from "react";
import "./Login.scss"
import  Input  from "../../utilities/Input/Input";
import Button from "../../utilities/Button/Button";

function Login() {
  return (
    <main className="login_container">
      <div className="login_header">
        <h1 className="login_heading">Login</h1>
        <p>Get aceess to your Order, Wishlist and Recommendations </p>
      </div>
      <form className="login_form">
        <Input const type="email" inputId="login_email" inputClassName="login_email_input" required={true} labelClassName="login_email_label" labelText="Email"/>
        <Input const type="password" inputId="login_password" inputClassName="login_password_input" required={true} labelClassName="login_password_label" labelText="Password"/>
        <Button id="login_button" buttonText="Login" />
      </form>
    </main>
  );
}

export default Login;