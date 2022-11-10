import { GET_ANSWERS } from '../actions';

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
  default:
    return state;
  }
};

export default game;
