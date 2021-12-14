import React, { useState } from "react";
import "./style.scss";

const Footer = (props) => {
  const [email, setEmail] = useState("");
  const [isValidate, setValidate] = useState(true);

  const onChange = (value) => {
    setValidate(true);
    setEmail(value.toLowerCase());
  };

  const onSubmit = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    const validate = reg.test(email);
    setValidate(validate);

    if (validate) {
      props.onChangeEmail(email);
    }
  };

  return (
    <div className="footer-content">
      <div className="footer-title">Sign up for our Newsletter</div>
      <div className="footer-form">
        <input
          className={`footer-input ${
            isValidate ? "black-border" : "red-border"
          }`}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => onChange(e.target.value)}
          color={isValidate ? "#000" : "#FF0000"}
        />
        <button className="footer-submit" onClick={onSubmit}>
          Submit
        </button>
      </div>
      <div className="footer-copyright">
        © 2021 — SPARTA PLAESENT - instagram - facebook - twitter
      </div>
    </div>
  );
};

export default Footer;
