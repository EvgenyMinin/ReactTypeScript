import React from "react";
import { Link, Router, RouteComponentProps } from "@reach/router";
import News from "../News/News";
import { checkAuthStatus, logout } from "../../api/auth";
import Login from "../../pages/Login";

import "./styles.scss";
import Authenticated from "../common/Authenticated";
import Profile from "../../pages/Profile";

interface IAppProps extends RouteComponentProps {
  name: string;
}

const App: React.FC<IAppProps> = ({ name, children }) => {
  return (
    <div className="App">
      <h1 className="App__header">Project with hooks and TypeScript</h1>
      <nav>
        <Link to="/">Домой</Link> <Link to="news">Новости</Link>{" "}
        <Link to="profile">Профиль</Link>
        {checkAuthStatus() ? <button onClick={logout}>Выйти</button> : null}
      </nav>
      <hr />
      <p>Автор: {name}</p>
      <hr />
      {children}
    </div>
  );
};

const RouterApp = () => (
  <Router>
    <App path="/" name="Evgeny Minin">
      <Login path="login" />
      <News path="/news" />
      <Authenticated path="/profile">
        <Profile path="/" />
      </Authenticated>
    </App>
  </Router>
);

export default RouterApp;
