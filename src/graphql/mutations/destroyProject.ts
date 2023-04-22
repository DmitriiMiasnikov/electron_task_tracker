import { gql } from "@apollo/client";

import projectFragment from "../fragments/projectFragment";

export default gql`
  ${projectFragment}
  mutation DestroyProject($input: DestroyProjectInput!) {
    destroyProject(input: $input) {
      project {
        ...ProjectInfo
      }
    }
  }
`;
