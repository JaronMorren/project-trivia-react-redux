const SAVE_AT_LOGIN = 'SAVE_AT_LOGIN';

export function saveAtLogin(email, name) {
  return {
    type: SAVE_AT_LOGIN,
    payload: { email, name },
  };
}

export const test = 'test';
