import { createContext, useContext, useReducer } from 'react';

const AuthContext = createContext();

const initialState = { user: null, isAuthenticated: false };

const tmpUser = {
  name: 'Karina Chumak',
  email: 'karinac3011@gmail.com',
  password: '12345678',
  avatar: 'https://i.pravatar.cc/100?u=%D1%96%D1%96',
  level: 'Genius Level 2',
};

const reducer = function (state, action) {
  switch (action.type) {
    case 'login':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case 'logout':
      return { ...state, user: null, isAuthenticated: false };
    default:
      throw new Error('Unknown action');
  }
};

function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function login(email, password) {
    if (email === tmpUser.email && password === tmpUser.password) {
      console.log('should log in');
      dispatch({ type: 'login', payload: tmpUser });
    }
  }

  function logout() {
    if (isAuthenticated) {
      dispatch({ type: 'logout' });
    }
  }
  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === null)
    throw new Error(
      'Trying to reach Auth context outside of the provider'
    );
  return context;
}

export { useAuth, AuthProvider };
