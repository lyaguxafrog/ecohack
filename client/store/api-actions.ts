import { ApolloError, gql } from '@apollo/client';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { endpoint } from '@/utils/api-uri';
import { AppDispatch, IEvent, IGetEventsOut, SignInInput, SignInOutput, State } from '@/types';

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
				mutation signIn {
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

export const getEvents = createAsyncThunk<IGetEventsOut, void>('PASSWORDS', async (_, { rejectWithValue }) => {
  try {
    const result = await endpoint.query({
      query: gql`
        query AllEvents {
          allEvents {
            edges {
              node {
                date
                description
                isArchive
                latitude
                longtitude
                rating
                title
                id
              }
            }
          }
        }
      `,
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
});

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
