import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Feedback from '../pages/Feedback';

describe('testa a tela de feedback',()=>{
  beforeEach(()=>{
    // const token ={
    //     "response_code":0,
    //     "response_message":"Token Generated Successfully!",
    //     "token":"f00cb469ce38726ee00a7c6836761b0a4fb808181a125dcde6d50a9f3c9127b6"
    //   }
    //   global.fetch = jest.fn(async () => ({
    //     json: async () => token
    //   }));
    //   const { history } = renderWithRouterAndRedux(<App />)
    //   const inputEmail = screen.getByLabelText("Email:")
    //   const inputName = screen.getByLabelText("Nome:")
    //   const button = screen.getByTestId("btn-play")
    //   expect(button).toBeDisabled();
    //   userEvent.type(inputEmail, "23"),
    //   userEvent.type(inputName, "33"),
    //   expect(button).toBeEnabled();
    //   userEvent.click(button);
  } 
  )
  test('sem nenhuma resposta certa',()=>{
    const state={
    player:{
  name: '', // nome-da-pessoa,
  assertions: 0, // número-de-acertos,
  score: 0, // pontuação,
  gravatarEmail: '', // email-da-pessoa,
  correctAnswers: 0,
}};
    renderWithRouterAndRedux(<Feedback />,state)
    const img = screen.getByTestId("header-profile-picture");
    expect(img).toBeInTheDocument();
    const name = screen.getByTestId("header-player-name");
    expect(name).toBeInTheDocument();
    const score = screen.getByTestId("header-score");
    expect(score).toBeInTheDocument();
    const text = screen.getByTestId("feedback-text");
    expect(text).toBeInTheDocument();
    expect(text).toHaveTextContent('Could be better...')
    const total =screen.getByTestId('feedback-total-score')
    expect(total).toHaveTextContent('0')
  })
  test('com 3 resposta certa',()=>{
    const state={
    player:{
  name: '', // nome-da-pessoa,
  assertions: 0, // número-de-acertos,
  score: 100, // pontuação,
  gravatarEmail: '', // email-da-pessoa,
  correctAnswers: 3,
}};
    renderWithRouterAndRedux(<Feedback />,state)
    const img = screen.getByTestId("header-profile-picture");
    expect(img).toBeInTheDocument();
    const name = screen.getByTestId("header-player-name");
    expect(name).toBeInTheDocument();
    const score = screen.getByTestId("header-score");
    expect(score).toBeInTheDocument();
    const text = screen.getByTestId("feedback-text");
    expect(text).toBeInTheDocument();
    expect(text).toHaveTextContent('Well Done!')
    const totalscore =screen.getByTestId('feedback-total-score')
    expect(totalscore).toHaveTextContent('100')
    const totalquestion =screen.getByTestId('feedback-total-question')
    expect(totalquestion).toHaveTextContent('3')
  })
  test('butao do play again',async()=>{
    const {history}=renderWithRouterAndRedux(<Feedback />);
    const playAgain =screen.getByTestId('btn-play-again');
    expect(playAgain).toHaveTextContent('Play Again');
    userEvent.click(playAgain);
    await waitForElementToBeRemoved(playAgain,{timeout:2000});
    const { pathname } = history.location;
    expect(pathname).toBe('/');
  })
  test('butao do ranking',async()=>{
    const {history}=renderWithRouterAndRedux(<Feedback />);
    const ranking =screen.getByTestId('btn-ranking');
    expect(ranking).toHaveTextContent('Ranking');
    userEvent.click(ranking);
    await waitForElementToBeRemoved(ranking,{timeout:2000});
    const { pathname } = history.location;
    expect(pathname).toBe('/ranking');
  })
})