import { gql } from '@apollo/client';

export const REGISTER = gql`
  mutation Register(
    $email: String!
    $firstname: String!
    $lastname: String!
    $password: String!
  ) {
    register(
      email: $email
      firstname: $firstname
      lastname: $lastname
      password: $password
    ) {
      id
    }
  }
`;
