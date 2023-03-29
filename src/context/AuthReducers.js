const AuthReducers = {
  startLogin: () => {
    return {
      user: null,
      isFetching: true,
      error: null,
    };
  },
  loginSuccess: (user) => {
    return {
      user: user,
      isFetching: false,
      error: null,
    };
  },
  loginFailure: (error) => {
    return {
      user: null,
      isFetching: false,
      error: error,
    };
  },
  logout: () => {
    return {
      user: null,
      isFetching: false,
      error: null,
    };
  },
};

export default AuthReducers;
