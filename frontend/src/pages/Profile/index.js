import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import './style.css';

//importe image
import logoImg from '../../assets/logo.png';

export default function Profile(){
    const [incidents, setIncidents] = useState([]);

    const history = useHistory();
    
    //name
    const personId = localStorage.getItem('personId');
    const personName = localStorage.getItem('personName');

    useEffect(() => {
        api.get('profile',{
            headers:{
                Authorization: personId,
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [personId]);

    //function delete
    async function handleDeleteIncident(id){
        try{
            await api.delete(`incidents/${id}`,{
                headers:{
                    Authorization: personId,
                }
            });

            setIncidents(incidents.filter(incident => incident.id !== id));

        }catch(err){
            alert('Erro ao tentar excluir, tente novamente.');
        }
    }

    //function logout
    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }

    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Vitrine On Vip" />
                <span>Bem vindo(a), {personName}</span>

                <Link className="button" to="/incidents/new">Cadastrar novo item</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#FFF"/>
                </button>
            </header>
            <h1>Itens Cadastrados</h1>
            <ul>
                {incidents.map(incident =>(
                    <li key={incident.id}>
                        <strong>Item:</strong>
                        <p>{incident.title}</p>
                        <strong>Description:</strong>
                        <p>{incident.description}</p>
                        <strong>Value:</strong>
                        <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</p>
                        <button onClick={() =>  handleDeleteIncident(incident.id)} type="button">
                            <FiTrash2 size={20} color="#FD8346" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}