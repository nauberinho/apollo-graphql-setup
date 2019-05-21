import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import styled from "styled-components";
import Launches from "./components/Launches";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

const Application = styled.div`
  display: flex;
`;

const Header = styled.div`
  padding: 2rem;
  font-weight: 600;
  margin: auto;
  width: auto;
`;

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Application>
        <Header>SpaceX</Header>
        <Launches />
      </Application>
    </ApolloProvider>
  );
};

export default App;
