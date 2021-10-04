import gql from "graphql-tag";

export const FETCH_ANTS = gql`
  query {
    ants {
      name
      length
      color
      weight
    }
  }
`;
