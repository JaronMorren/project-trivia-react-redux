const INITIALSTATE = {
  name: '', // nome-da-pessoa,
  assertions: 0, // número-de-acertos,
  score: 0, // pontuação,
  gravatarEmail: '', // email-da-pessoa,
};

const player = (state = INITIALSTATE, actions) => {
  switch (actions.type) {
  default:
    return state;
  }
};

export default player;
