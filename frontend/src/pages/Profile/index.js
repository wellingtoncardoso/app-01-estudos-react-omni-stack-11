import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import './style.css';

//importe image
import logoImg from '../../assets/logo.png';

export default function Profile(){
    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Vitrine On Vip" />
                <span>Bem vindo(a), PaperYou</span>

                <Link className="button" to="/incidents/new">Cadastrar novo item</Link>
                <button type="button">
                    <FiPower size={18} color="#FFF"/>
                </button>
            </header>
            <h1>Itens Cadastrados</h1>
            <ul>
                <li>
                    <strong>Item:</strong>
                    <p>Item cadastro 01</p>
                    <strong>Description:</strong>
                    <p>descriçao do serviço oferedico</p>
                    <strong>Value:</strong>
                    <p>R$ 59,00</p>
                    <button type="button">
                        <FiTrash2 size={20} color="#FD8346" />
                    </button>
                </li>
                <li>
                    <strong>Item:</strong>
                    <p>Item cadastro 01</p>
                    <strong>Description:</strong>
                    <p>descriçao do serviço oferedico</p>
                    <strong>Value:</strong>
                    <p>R$ 59,00</p>
                    <button type="button">
                        <FiTrash2 size={20} color="#FD8346" />
                    </button>
                </li>
                <li>
                    <strong>Item:</strong>
                    <p>Item cadastro 01</p>
                    <strong>Description:</strong>
                    <p>descriçao do serviço oferedico</p>
                    <strong>Value:</strong>
                    <p>R$ 59,00</p>
                    <button type="button">
                        <FiTrash2 size={20} color="#FD8346" />
                    </button>
                </li>
                <li>
                    <strong>Item:</strong>
                    <p>Item cadastro 01</p>
                    <strong>Description:</strong>
                    <p>descriçao do serviço oferedico</p>
                    <strong>Value:</strong>
                    <p>R$ 59,00</p>
                    <button type="button">
                        <FiTrash2 size={20} color="#FD8346" />
                    </button>
                </li>
            </ul>
        </div>
    );
}