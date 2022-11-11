import { GET_ANSWERS, UPDATE_SCORE } from '../actions';

const INITIAL_STATE = {
  answers: [],
};

const game = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
  case GET_ANSWERS:
    return {
      ...state,
      answers: actions.payload.answers,
    };
  case UPDATE_SCORE:
    return {
      ...state,

    };
  default:
    return state;
  }
};

export default game;
