import { ApolloClient, InMemoryCache } from '@apollo/client';

export const endpoint = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://ecopass.makridenko.ru/api/',
});
