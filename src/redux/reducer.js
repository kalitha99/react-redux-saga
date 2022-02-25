import * as types from "./actionType";

const initialstate = {
  users: [],
  loading: false,
  error: null,
};

const userRducer = (state = initialstate, action) => {
  switch (action.type) {
    case types.LOAD_USER_START:
      return {
        ...state,
        loading: true,
      };

    case types.LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };

    case types.LOAD_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userRducer;