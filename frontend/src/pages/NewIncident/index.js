import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './style.css';

//importe image
import logoImg from '../../assets/logo.png';

export default function NewIncident(){
    const [title, setTlite] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const personId = localStorage.getItem('personId');

    const history = useHistory();

    async function handleNewIncident(e){
        e.preventDefault();

        const data = {
            title, 
            description,
            value,
        };
        try{
            await api.post('incidents', data,{
                headers:{
                    Authorization: personId,
                }
            })
            history.push('/profile');
        }catch(err){
            alert('Erro ao cadastrar, tente novamente');
        }
    }

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
                <input value={title} onChange={e => setTlite(e.target.value)} placeholder="Title" />
                <textarea  value={description} onChange={e => setDescription(e.target.value)}  placeholder="Description"/>
                <input  value={value} onChange={e => setValue(e.target.value)}  placeholder="Value" />
                <button onClick={handleNewIncident} className="button">Registra-se</button>
            </form>
        </div>
    </div>
    );
}