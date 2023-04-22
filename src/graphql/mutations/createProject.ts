import { gql } from "@apollo/client";

import projectFragment from "../fragments/projectFragment";

export default gql`
  ${projectFragment}
  mutation CreateProject($input: CreateProjectInput!) {
    createProject(input: $input) {
      errors {
        message
        path
      }
      project {
        ...ProjectInfo
      }
    }
  }
`;
