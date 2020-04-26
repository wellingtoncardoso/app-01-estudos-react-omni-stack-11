import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './style.css'

//importe image
import logoImg from '../../assets/logo.png';
import painelControlImg from '../../assets/painel.png';


export default function Login(){
    return(
        <div className="login-container">
            <section className="form">
                <img src={logoImg} alt="Vitrine On Vip" />
                <form>
                    <h1>Faça seu login</h1>
                    <input placeholder="Seu ID"/>
                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/register"><FiLogIn size={16} color="#FFF" />Não tenho cadastro</Link>
                </form>
            </section>
            <img src={painelControlImg} alt="Painel" />
        </div>
    );  
}