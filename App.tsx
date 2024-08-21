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
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';

import { AuthProvider } from '@/context/authProvider';
import RootNavigator from '@/navigation/navigators/RootNavigator';
import { _navigationThemeDark, _navigationThemeLight } from '@/theme/colors';
import { useBoundStore } from '@/zustand/store';

/* const authLink = new ApolloLink((operation, forward) => {
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
} */

// apollo commented out for now for deployment without a server

export default function App() {
  const storedTheme = useBoundStore((state) => state.settings.theme);
  const systemTheme = useColorScheme();
  const derivedTheme = storedTheme || systemTheme || 'light';
  // status bar theme is the opposite of the navigation theme
  const statusBarTheme = derivedTheme === 'dark' ? 'light' : 'dark';
  const [theme, setTheme] = useState(
    derivedTheme === 'dark' ? _navigationThemeDark : _navigationThemeLight,
  );

  useEffect(() => {
    setTheme(
      derivedTheme === 'dark' ? _navigationThemeDark : _navigationThemeLight,
    );
  }, [storedTheme]);

  return (
    <NavigationContainer theme={theme}>
      <StatusBar style={statusBarTheme} />
      <AuthProvider>
        <RootNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}
