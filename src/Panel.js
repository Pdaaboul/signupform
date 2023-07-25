import "./Panel.css";
import React from "react";
export default function Panel() {
  const [obj, setobj] = React.useState({
    email: "",
    password: "",
    passwordConfirm: "",
    checkPoint: false,
  });
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    const inputValue = type === "checkbox" ? checked : value;

    setobj({
      ...obj,
      [name]: inputValue,
    });
    console.log(obj);
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (obj.password === obj.passwordConfirm && obj.checkPoint == true) {
      console.log("Password matches confirmation. Form submitted! \n");
      console.log("Thanks for signing up for our newsletter!");
      // You can perform additional form submission logic here.
    } else if (obj.password === obj.passwordConfirm) {
      console.log("Password matches confirmation. Form submitted!");
    } else {
      console.log("Password does not match confirmation. Please check again.");
      // You can show an error message to the user, etc.
    }
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email address"
          className="form--input"
          onChange={handleChange}
          value={obj.email}
        />
        <input
          type="password"
          placeholder="Password"
          className="form--input"
          name="password"
          onChange={handleChange}
          value={obj.password}
        />
        <input
          type="password"
          name="passwordConfirm"
          placeholder="Confirm password"
          className="form--input"
          onChange={handleChange}
          value={obj.passwordConfirm}
        />

        <div className="form--marketing">
          <input
            id="okayToEmail"
            type="checkbox"
            name="checkPoint"
            checked={obj.checkPoint}
            onChange={handleChange}
          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button className="form--submit">Sign up</button>
      </form>
    </div>
  );
}
