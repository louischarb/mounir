import React from "react";
import { HeaderBar } from "../components";

const withHeader = (Component: React.ComponentType): React.ComponentType => {
  return class withHeader extends React.Component {
    render() {
      return (
        <>
          <HeaderBar />
          <Component />
        </>
      );
    }
  };
};

export default withHeader;
