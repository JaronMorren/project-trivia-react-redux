import React from 'react';
import { render, screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import Login from '../pages/Login';
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('Testando o componente Login.js', () => {
  test('Verifica se existe um input de email na tela', () => {
    renderWithRouter(<Login />);
    const inputEmail = screen.getByLabelText("Email:")
  
    expect(inputEmail).toBeInTheDocument();  
  });
  test('Verifica se o tipo do input é email', () => {
    renderWithRouter(<Login />);
    const inputEmail = screen.getByLabelText("Email:")
    
    expect(inputEmail.type).toBe("email")
  });
  test('Verifica se existe um input de nome na tela', () => {
    renderWithRouter(<Login />);
    const inputName = screen.getByLabelText("Nome:")
  
    expect(inputName).toBeInTheDocument();  
  });
  test('Verifica se o tipo do input é text', () => {
    renderWithRouter(<Login />);
    const inputName = screen.getByLabelText("Nome:")
    
    expect(inputName.type).toBe("text")
  });
  test('Verifica se o existe um botão', () => {
    renderWithRouter(<Login />);
    const button = screen.getByRole("button")
    
    expect(button).toBeInTheDocument();
  });
  test('Verifica se o botão está desabilitado', () => {
    renderWithRouter(<Login />);
    const button = screen.getByRole("button")
    
    expect(button).toBeDisabled();
  });  
  test('Verifica que ao digitar o email e clicar em "", o email é renderizado ', async () => {
    renderWithRouter(<Login />);
    const inputEmail = screen.getByLabelText("Email:")
    const inputName = screen.getByLabelText("Nome:")
    const button = screen.getByRole("button")
    
    userEvent.type(inputEmail, "23"), 
    expect(inputEmail.value).toBe("23");
    userEvent.type(inputName, "33"), 
    expect(inputName.value).toBe("33");

    expect(button).toBeEnabled();
  });  
  
})

describe('Testando o componente App.js', () => {
  test('Verifica se o botão está desabilitado', () => {
    renderWithRouter(<App />);
    const button = screen.getByRole("button")
    
    expect(button).toBeDisabled();
  });
})

// acessar os elementos na tela

// interagir com os elementos (se for necessário)

// fazer os teste