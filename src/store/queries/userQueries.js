import {gql} from "@apollo/client";

export const GET_USER_BY_ID = gql`
  query GetUserById($userId: ID!) {
    getUser(id: $userId) {
      id
      userName
    }
  }
`;