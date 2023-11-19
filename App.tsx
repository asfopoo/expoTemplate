import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  from,
  HttpLink,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { NavigationContainer } from '@react-navigation/native';

import { AuthProvider } from './src/contextProviders/authProvider';
import { SettingsProvider } from './src/contextProviders/settingsProvider';
import { UserProvider } from './src/contextProviders/userProvider';
import RootNavigator from './src/navigation/navigators/RootNavigator';

// TODO: auth link

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
  link: from([errorLink, httpLink]),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <AuthProvider>
          <UserProvider>
            <SettingsProvider>
              <RootNavigator />
            </SettingsProvider>
          </UserProvider>
        </AuthProvider>
      </NavigationContainer>
    </ApolloProvider>
  );
}
