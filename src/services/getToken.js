const getToken = async () => {
  const tokenRequestLink = 'https://opentdb.com/api_token.php?command=request';
  const response = await fetch(tokenRequestLink);
  const tokenData = await response.json();
  return tokenData;
};

export default getToken;
