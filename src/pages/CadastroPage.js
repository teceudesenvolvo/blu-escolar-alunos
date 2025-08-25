import React from 'react';
import { Link } from 'react-router-dom';

function CadastroPage() {
  return (
    <div className="login-container">
      <div className="login-left">

        <div className="login-greeting">
          <h1>CRIE SUA <b>CONTA</b></h1>
          <p>E tenha acesso a todos os serviços do Portal.</p>
        </div>
      </div>
      <div className="login-right">
        <div className="login-form-card">
          <h2>Criar Nova Conta</h2>
          <form className="login-form">
            <div className="form-group">
              <label htmlFor="name">Nome Completo</label>
              <input type="text" id="name" name="name" placeholder="Digite seu nome completo" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Digite seu email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Senha</label>
              <input type="password" id="password" name="password" placeholder="Crie sua senha" required />
            </div>
            <div className="form-group">
              <label htmlFor="confirm-password">Confirmar Senha</label>
              <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirme sua senha" required />
            </div>
            <button type="submit" className="btn-login btn-cadastrar">Cadastrar</button>
          </form>
          <div className="register-link">
            <Link to="/login">Já tem uma conta? Entrar</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CadastroPage;
