import React from "react";
import { checkAuthStatus } from "../../api/auth";
import { Redirect, RouteComponentProps } from "@reach/router";

// export interface IAuthenticatedProps extends RouteComponentProps {}

const Authenticated: React.FC<RouteComponentProps> = ({ children }) => {
  return checkAuthStatus() ? (
    <>{children}</>
  ) : (
    <Redirect to="/login" noThrow={true} />
  );
};

export default Authenticated;
