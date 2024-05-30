import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  ApolloProvider,
  from,
  HttpLink,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { NavigationContainer } from '@react-navigation/native';

import { AuthProvider } from './src/context/authProvider';
import RootNavigator from './src/navigation/navigators/RootNavigator';

const authLink = new ApolloLink((operation, forward) => {
  // get the authentication token from local storage if it exists
  // const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return forward(operation);
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const httpLink = new HttpLink({ uri: 'http://192.168.64.1:4000/graphql' });

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([authLink, errorLink, httpLink]),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <AuthProvider>
          <RootNavigator />
        </AuthProvider>
      </NavigationContainer>
    </ApolloProvider>
  );
}
