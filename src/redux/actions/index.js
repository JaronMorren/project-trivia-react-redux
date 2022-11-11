import getAnswers from '../../services/getAnswers';

export const SAVE_AT_LOGIN = 'SAVE_AT_LOGIN';
export const GET_ANSWERS = 'GET_ANSWERS';

export function saveAtLogin(email, name) {
  return {
    type: SAVE_AT_LOGIN,
    payload: { email, name },
  };
}

const receiveAnswers = (answers) => ({
  type: GET_ANSWERS,
  payload: {
    answers,
  },
});

export const getAnswersAct = (dispatch) => async () => {
  try {
    const answers = await getAnswers();
    dispatch(receiveAnswers(answers));
  } catch (error) {
    console.log(error);
  }
};
