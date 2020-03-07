import React, { useState, SyntheticEvent } from "react";
import { RouteComponentProps, navigate } from "@reach/router";
import { IUserIdentity } from "../models/user";
import { authenticate } from "../api/auth";
import { formErrors } from "../localization/formErrors";

const lang = "ru";

const Login: React.FC<RouteComponentProps> = () => {
  const [user, setField] = useState<IUserIdentity>({
    username: "",
    password: ""
  });
  const [notification, setNotification] = useState<string>("");

  const onInputChange = (fieldName: string) => (
    e: SyntheticEvent<HTMLInputElement>
  ): void => {
    setField({
      ...user,
      [fieldName]: e.currentTarget.value
    });
    setNotification("");
  };

  const onSubmit = (e: SyntheticEvent<HTMLFormElement>): void => {
    e.preventDefault();
    authenticate(user)
      .then(() => {
        navigate("/profile");
      })
      .catch(err => {
        if (err.errorText) {
          setNotification(formErrors[lang][err.errorText]);
        } else {
          // tslint:disable-next-line: no-console
          console.warn("request problem", err);
        }
      });
  };

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        {notification && <p>{notification}</p>}
        <div
          style={{ display: "flex", flexDirection: "column", maxWidth: 300 }}
        >
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={user.username}
            onChange={onInputChange("username")}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 300,
            margin: "20px 0"
          }}
        >
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={user.password}
            onChange={onInputChange("password")}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
