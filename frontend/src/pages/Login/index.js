import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './style.css'

//importe image
import logoImg from '../../assets/logo.png';
import painelControlImg from '../../assets/painel.png';


export default function Login(){
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('sessions', {id});
            //save info 
            localStorage.setItem('personId', id);
            localStorage.setItem('personName', response.data.name);

            history.push('/profile');
        }catch{
            alert('Login não encontrado, tente novamente.');
        }

    }

    return(
        <div className="login-container">
            <section className="form">
                <img src={logoImg} alt="Vitrine On Vip" />
                <form onSubmit={handleLogin}>
                    <h1>Faça seu login</h1>
                    <input value={id} onChange={e => setId(e.target.value)} placeholder="Seu ID"/>
                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/register"><FiLogIn size={16} color="#FFF" />Não tenho cadastro</Link>
                </form>
            </section>
            <img src={painelControlImg} alt="Painel" />
        </div>
    );  
}