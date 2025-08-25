import React from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
    return (
        <div className="login-container">
            <div className="login-left">
               
                <div className="login-greeting">
                    <h1><b>BEM-VINDO AO</b>  PORTAL</h1>
                </div>
            </div>
            <div className="login-right">
                <div className="login-form-card">
                    <h2>Entrar na sua conta</h2>
                    <form className="login-form">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Digite seu email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Senha</label>
                            <input type="password" id="password" name="password" placeholder="Digite sua senha" required />
                        </div>
                        <div className="form-actions">
                            <Link to="#" className="forgot-password">Esqueceu sua senha?</Link>
                            <button type="submit" className="btn-login">Entrar</button>
                        </div>
                    </form>
                    <div className="register-link">
                        <Link to="/cadastro">Criar Conta</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
