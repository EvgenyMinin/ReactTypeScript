import * as React from "react";
import { RouteComponentProps } from "@reach/router";

interface IAboutProps extends RouteComponentProps {
  source?: string;
}

const About: React.FC<IAboutProps> = props => (
  <div>
    <p>About</p>
    <p>{props.source}</p>
  </div>
);

export default About;
