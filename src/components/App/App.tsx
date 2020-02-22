import React from "react";
import { Link, Router, RouteComponentProps } from "@reach/router";
import News from "../News/News";
import About from "../About/About";

import "./styles.scss";

interface IAppProps extends RouteComponentProps {
  name: string;
  site: string;
}

const App: React.FC<IAppProps> = props => {
  return (
    <div className="App">
      <h1 className="App__header">Project with hooks and TypeScript</h1>
      <nav>
        <Link to="/">Home</Link> <Link to="news">News</Link>{" "}
        <Link to="/about/habr">About habr</Link>
      </nav>
      <hr />
      <p>
        Автор: {props.name} | Сайт: {props.site}
      </p>
      <hr />
      {props.children}
    </div>
  );
};

const RouterApp = () => (
  <Router>
    <App path="/" name="John" site="johnfrontend.ru">
      <News path="/news" />
      <About path="/about/:source" />
    </App>
  </Router>
);

export default RouterApp;
