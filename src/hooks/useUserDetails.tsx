import { useReducer, useEffect, useContext } from 'react';

import useAsyncStorage from './useAsyncStorage';
import { UserContext } from '../context/userProvider';
import { User } from '../types/userTypes';

// Define the actions
const actionTypes = {
  SET_USER: 'SET_USER',
  CLEAR_USER: 'CLEAR_USER',
};

type Action = {
  type: string;
  payload: any;
};

type State = {
  user: User;
};

// Reducer function
const userDetailsReducer = (state: State, action: Action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export function useUserDetails() {
  const [state, dispatch] = useReducer(userDetailsReducer, {
    user: undefined,
  });
  const { getUser } = useContext(UserContext);
  const { storeData, clearData } = useAsyncStorage();

  // get the initial user from contxt
  useEffect(() => {
    (async () => {
      const userFromContext = await getUser();
      dispatch({ type: actionTypes.SET_USER, payload: userFromContext });
    })();
  }, [getUser]);

  const updateUser = (userParam: User) => {
    storeData('user', userParam);
    dispatch({ type: actionTypes.SET_USER, payload: userParam });
  };

  const clearUser = () => {
    clearData('user');
    dispatch({ type: actionTypes.SET_USER, payload: undefined });
  };

  return {
    user: state.user,
    updateUser,
    clearUser,
  };
}
