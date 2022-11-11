const getAnswers = async () => {
  const numberOfAnswers = 5;
  const token = localStorage.getItem('token');
  const endPoint = `https://opentdb.com/api.php?amount=${numberOfAnswers}&token=${token}`;
  const response = await fetch(endPoint);
  const answersData = await response.json();
  return answersData;
};

export default getAnswers;
