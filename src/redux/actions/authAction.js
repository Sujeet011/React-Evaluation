// src/redux/actions/authActions.js
export const login = (credentials) => ({
    type: 'LOGIN_REQUEST',
    payload: credentials,
  });
  
  // Other auth-related actions...
  