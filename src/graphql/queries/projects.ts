import { gql } from "@apollo/client";

import projectFragment from "../fragments/projectFragment";

export default gql`
  ${projectFragment}
  query {
    projects {
      ...ProjectInfo
    }
  }
`;
