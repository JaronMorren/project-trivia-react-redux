import { GET_TOKEN } from '../actions';

const INITIAL_STATE = {
  token: '',
};

const game = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_TOKEN:
    return ({
      ...state,
      token: action.payload.token,
    });
  default:
    return state;
  }
};

export default game;
