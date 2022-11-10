import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import Login from '../pages/Login';
import App from '../App';
import Game from '../pages/Game';
import userEvent from '@testing-library/user-event';

describe('Testando a pagina Login.js', () => {
  
  test('Verifica se existe um input de email na tela e que o tipo seja de email', () => {
    renderWithRouterAndRedux(<Login />);
    const inputEmail = screen.getByLabelText("Email:")
  
    expect(inputEmail).toBeInTheDocument();  
    expect(inputEmail.type).toBe("email")
  });  
  test('Verifica se existe um input de nome na tela e que o tipo seja de text', () => {
    renderWithRouterAndRedux(<Login />);
    const inputName = screen.getByLabelText("Nome:")
  
    expect(inputName).toBeInTheDocument();  
    expect(inputName.type).toBe("text")
  });
    test('Verifica que ao digitar o email e nome, o botão Play é habilitado', async () => {
    renderWithRouterAndRedux(<App />)
    const inputEmail = screen.getByLabelText("Email:")
    const inputName = screen.getByLabelText("Nome:")
    const button = screen.getByRole("button", {
      name: /play/i
    })

    expect(button).toBeDisabled();
    userEvent.type(inputEmail, "23"), 
    expect(inputEmail.value).toBe("23");
    userEvent.type(inputName, "33"), 
    expect(inputName.value).toBe("33");
    expect(button).toBeEnabled();

    userEvent.click(button)    

    const gamePage = await screen.findByText(/game/i)

    expect(gamePage).toBeInTheDocument()
    expect(pathname).toBe('/game');   
    
    expect(global.localStorage.setItem).toHaveBeenCalled()
  }); 

  
  test('Testa se após clicar no botão a página é redirecionada para configurações', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const button = screen.getByRole('button', {name: 'Configurações'})
    userEvent.click(button);
    const { pathname } = history.location;
    expect(pathname).toBe('/settings');
  }); 
  
})

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