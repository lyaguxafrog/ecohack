import { ApolloError, gql } from '@apollo/client';
import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  AppDispatch,
  checkAuthInput,
  checkAuthOutput,
  RegisterInput,
  RegisterOutput,
  SignInInput,
  SignInOutput,
  State,
} from '@/types';
import { endpoint } from '@/utils/api-uri';

type ThunkConfig = {
  dispatch: AppDispatch;
  state: State;
};

let headers = {
  Authorization: 'JWT undefined',
};

function updateHeaders(jwtToken: string) {
  headers = {
    Authorization: `JWT ${jwtToken}`,
  };
}

export const signIn = createAsyncThunk<SignInOutput, { signInInput: SignInInput }, ThunkConfig>(
  'TOKEN_AUTH',
  async ({ signInInput }, { rejectWithValue }) => {
    try {
      const result = await endpoint.mutate({
        mutation: gql`
				mutation SignIn {
					signIn(input: {
							phone: "${signInInput.phone}"
					}){
						phoneToCall
					} 
				}
			`,
        variables: { signInInput },
      });

      return result.data;
    } catch (err) {
      if (err instanceof ApolloError) {
        return rejectWithValue({
          message: err.message,
          networkError: err.networkError,
        });
      }

      return rejectWithValue({ message: 'Unknown error occurred' });
    }
  },
);

export const registerUser = createAsyncThunk<RegisterOutput, { registerUserInput: RegisterInput }, ThunkConfig>(
  'REGISTER_USER',
  async ({ registerUserInput }, { rejectWithValue }) => {
    try {
      const result = await endpoint.mutate({
        mutation: gql`
				mutation RegisterUser {
					registerUser(input: {
							phone: "${registerUserInput.phone}",
							firstName: "${registerUserInput.firstName}",
              lastName: "${registerUserInput.lastName}",
					}){
						phoneToCall
					} 
				}
			`,
        variables: { registerUserInput },
      });

      updateHeaders(result.data.token);

      return result.data;
    } catch (err) {
      if (err instanceof ApolloError) {
        return rejectWithValue({
          message: err.message,
          networkError: err.networkError,
        });
      }

      return rejectWithValue({ message: 'Unknown error occurred' });
    }
  },
);

export const checkAuth = createAsyncThunk<checkAuthOutput, { registerUserInput: checkAuthInput }, ThunkConfig>(
  'CHECK_AUTH',
  async ({ registerUserInput }, { rejectWithValue }) => {
    try {
      const result = await endpoint.mutate({
        mutation: gql`
				mutation CheckAuth {
					checkAuth(input: {
							phone: "${registerUserInput.phone}",
					}){
						token
            profile {
              id
              firstName
              lastName
              phone
              role
            }
					} 
				}
			`,
        variables: { registerUserInput },
      });

      return result.data;
    } catch (err) {
      if (err instanceof ApolloError) {
        return rejectWithValue({
          message: err.message,
          networkError: err.networkError,
        });
      }

      return rejectWithValue({ message: 'Unknown error occurred' });
    }
  },
);

// export const passwords = createAsyncThunk<Passwords, void>('PASSWORDS', async (_, { rejectWithValue }) => {
//   try {
//     const query = `
//         query {
//           passwords {
//             description
//             login
//             url
//             title
//             passwordId
//             password
//           }
//         }
//       `;
//     const passwordsData = await endpoint.request<Passwords>(query, {}, headers);

//     return passwordsData;
//   } catch (err) {
//     return rejectWithValue(err);
//   }
// });

// export const savePassword = createAsyncThunk<SavePasswordOutput, { savePasswordInput: SavePasswordInput }, ThunkConfig>(
//   'SAVE_PASSWORD',
//   async ({ savePasswordInput }, { rejectWithValue }) => {
//     try {
//       const mutation = `
//         mutation {
//           savePassword (
//             password: "${savePasswordInput.password}",
//             description: "${savePasswordInput.description}",
//             login: ${savePasswordInput.login}
//             title: "${savePasswordInput.title}",
//             url: "${savePasswordInput.url}"
//           ) { success }
//         }
//       `;
//       const success = await endpoint.request<SavePasswordOutput>(mutation, {}, headers);

//       return success;
//     } catch (err) {
//       return rejectWithValue(err);
//     }
//   },
// );
