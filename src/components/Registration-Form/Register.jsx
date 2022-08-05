import React from 'react'
import Input from '../../utilities/Input/Input';
import Button from '../../utilities/Button/Button';
import "./Register.scss"
function Register() {
  return (
    <main className="registration_container">
    <div className="registration_header">
      <h1 className="registration_heading">Signup</h1>
      <p>We do not share your personal details with anyone</p>
    </div>
    <form className="registration_form">
      <Input const type="text" inputId="registration_first_name" inputClassName="registration_first_name" required={true} labelClassName="registration_first_name_label" labelText="First Name"/>
      <Input const type="text" inputId="registration_last_name" inputClassName="registration_last_name" required={true} labelClassName="registration_last_name_label" labelText="Last Name"/>
      <Input const type="email" inputId="registration_email" inputClassName="registration_email_input" required={true} labelClassName="registration_email_label" labelText="Email"/>
      <Input const type="password" inputId="registration_password" inputClassName="registration_password_input" required={true} labelClassName="registration_password_label" labelText="Password"/>
      <Input const type="password" inputId="registration_cpassword" inputClassName="registration_cpassword_input" required={true} labelClassName="registration_cpassword_label" labelText="Confirm Password"/>
      <Button id="registration_button" buttonText="Signup" />
    </form>
  </main>
  )
}

export default Register