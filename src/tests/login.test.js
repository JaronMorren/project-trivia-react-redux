import React from 'react';
import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import Login from '../pages/Login';
import App from '../App';
import Game from '../pages/Game';
import userEvent from '@testing-library/user-event';
afterEach(() => jest.clearAllMocks());
  it('Verifica se existe um input de email na tela e que o tipo seja de email', () => {
    renderWithRouterAndRedux(<Login />);
    const inputEmail = screen.getByLabelText("Email:")
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail.type).toBe("email")
  });
  it('Verifica se existe um input de nome na tela e que o tipo seja de text', () => {
    renderWithRouterAndRedux(<Login />);
    const inputName = screen.getByLabelText("Nome:")
    expect(inputName).toBeInTheDocument();
    expect(inputName.type).toBe("text")
  });
  it('Verifica que ao digitar o email e nome, o botão Play é habilitado', async () => {
      const token ={
        "response_code":0,
        "response_message":"Token Generated Successfully!",
        "token":"f00cb469ce38726ee00a7c6836761b0a4fb808181a125dcde6d50a9f3c9127b6"
      }
      global.fetch = jest.fn(async () => ({
        json: async () => token
      }));
      const { history } = renderWithRouterAndRedux(<App />)
      const inputEmail = screen.getByLabelText("Email:")
      const inputName = screen.getByLabelText("Nome:")
      const button = screen.getByTestId("btn-play")
      expect(button).toBeDisabled();
      userEvent.type(inputEmail, "23"),
      userEvent.type(inputName, "33"),
      expect(button).toBeEnabled();
      userEvent.click(button);
      await waitForElementToBeRemoved(button,{timeout:2000});
      const { pathname } = history.location
      expect(pathname).toBe('/game');
  });
  test('Testa se após clicar no botão a página é redirecionada para configurações', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const button = screen.getByRole('button', {name: 'Configurações'})
    userEvent.click(button);
    const { pathname } = history.location;
    expect(pathname).toBe('/settings');
  });
describe('Testando o componente App.js', () => {
  test('Verifica se existem 2 botões na tela', () => {
    renderWithRouterAndRedux(<App />);
    const button = screen.getAllByRole("button")
    expect(button).toHaveLength(2);
  });
})
describe('Testando a página Game.js', () => {
  test('Verifica se exist uma imagem na tela', () => {
    renderWithRouterAndRedux(<Game />);
    const img = screen.getByRole("img")
    expect(img).toBeInTheDocument();
  });
})
// acessar os elementos na tela
// interagir com os elementos (se for necessário)
// fazer os teste



















