import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './style.css';

//importe image
import logoImg from '../../assets/logo.png';

export default function NewIncident(){
    return(
        <div className="new-incident-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="Vitrine On Vip" />
                <h1>Cadastrar novo item</h1>
                <p>Descreva o item detalhadamente para que possa ser encontrado e ajudar alguém.</p>
                <Link className="back-link" to="/profile"><FiArrowLeft size={16} color="#D0D2D6" />Voltar</Link>
            </section>
            <form>
                <input placeholder="Title" />
                <textarea placeholder="Description"/>
                <input placeholder="Value" />
                <button className="button">Registra-se</button>
            </form>
        </div>
    </div>
    );
}