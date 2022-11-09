const INITIALSTATE = {
  name: '', // nome-da-pessoa,
  assertions: 0, // número-de-acertos,
  score: 0, // pontuação,
  gravatarEmail: '', // email-da-pessoa,
};

const player = (state = INITIALSTATE, actions) => {
  switch (actions.type) {
  case 'SAVE_AT_LOGIN':
    return { ...state, gravatarEmail: actions.payload.email, name: actions.payload.name };
  default:
    return state;
  }
};

export default player;
