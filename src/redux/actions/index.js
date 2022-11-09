import getToken from '../../services/getToken';

export const GET_TOKEN = 'GET_TOKEN';

const receiveToken = (token) => ({
  type: GET_TOKEN,
  payload: {
    token,
  },
});

export const getTokenAct = (dispatch) => async () => {
  try {
    const token = await getToken();
    dispatch(receiveToken(token));
  } catch (error) {
    console.log(error);
  }
};
