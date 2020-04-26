import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './style.css'

//importe image
import logoImg from '../../assets/logo.png';

export default function Register(){
    const [name, setName] = useState('');   
    const [email, setEmail] = useState('');   
    const [whatsapp, setWhatsapp] = useState('');   
    const [city, setCity] = useState('');   
    const [uf, setUf] = useState('');   

    //functin cad
    async function handleRegister(e){
        //previnir evento
        e.preventDefault();
        const data = {
            name,
            email,
            whatsapp,
            city,
            uf,
        };
        //send info
        try{
            const response = await api.post('people', data);
            alert(`ID de acesso: ${response.data.id}`);
           
        }catch (err){
            alert('Erro em seu cadastro, tente novamente');
        }
        
    }
    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Vitrine On Vip" />
                    <h1>Registro</h1>
                    <p>Faça seu registro, entre na plataforma e ajude pessoas a encontrarem seus serviços e produtos.</p>
                    <Link className="back-link" to="/"><FiArrowLeft size={16} color="#D0D2D6" />Não tenho cadastro</Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input placeholder="Nome" value={name} onChange={e => setName(e.target.value)} />
                    <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
                    <input placeholder="whastApp" value={whatsapp} onChange={e => setWhatsapp(e.target.value)} />
                    <div className="input-group">
                        <input placeholder="Cidade" value={city} onChange={e => setCity(e.target.value)}/>
                        <input placeholder="UF" style={{ width: 80 }}  value={uf} onChange={e => setUf(e.target.value)}/>
                    </div>
                    <button className="button">Registra-se</button>
                </form>
            </div>
        </div>
    );
}   