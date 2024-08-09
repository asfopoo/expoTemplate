import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        id
        first_name
        last_name
        email
      }
      authToken
      refreshToken
    }
  }
`;
