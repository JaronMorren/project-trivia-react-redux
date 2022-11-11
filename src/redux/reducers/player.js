import { SAVE_AT_LOGIN, UPDATE_SCORE } from '../actions';

const INITIAL_STATE = {
  name: '', // nome-da-pessoa,
  assertions: 0, // número-de-acertos,
  score: 0, // pontuação,
  gravatarEmail: '', // email-da-pessoa,
};

const player = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
  case SAVE_AT_LOGIN:
    return {
      ...state,
      gravatarEmail: actions.payload.email,
      name: actions.payload.name,
    };
  case UPDATE_SCORE:
    return {
      ...state,
      score: state.score + actions.payload,
    };
  default:
    return state;
  }
};

export default player;
