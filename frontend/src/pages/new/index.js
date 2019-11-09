import React, {useState, useMemo} from 'react';
import camera from "../../assets/camera.svg";
import './style.css';
import api from "..//../services/api"



export default function New({history}){
    const [conpany, setConpany] = useState('');
    const [techs, setTechs] = useState('');
    const [price, setPrice] = useState('');
    const [thunbnail, setThunbnail] = useState(null);

    
    const preview = useMemo(() =>{
        return thunbnail ? URL.createObjectURL(thunbnail) : null
    }, [thunbnail]
    )


    async function handleSubmit(event){
        event.preventDefault();
        const data = new FormData();
        const user_id = localStorage.getItem('user')
        data.append('thunbnail', thunbnail);
        data.append ('conpany', conpany);
        data.append('techs', techs);
        data.append('price', price);


         await api.post('./spots', data, {
            headers: {user_id}
                })
            history.push("/dashboard");
    }


    return(
        <form onSubmit={handleSubmit}>
            <label id="thunbnail" style={{backgroundImage: `url(${preview})`}} >
        <input type="file" onChange={event => setThunbnail(event.target.files[0])} />            
        <img src = {camera} alt='Selecione a foto'/>
            </label>
        <label htmlFor="conpany">Empresa</label>            
        <input
        id ="conpany"
        placeholder ="Sua empresa incrível"
        value ={conpany}
        onChange ={event => setConpany(event.target.value)}
        /> 
        <label htmlFor="techs">TECNOLOGIAS  <span>(Separadas por virgula)</span> </label>            
        <input
        id ="techs"
        placeholder ="Quais tecnologias"
        value ={techs}
        onChange ={event => setTechs(event.target.value)}
        /> 

        <label htmlFor="price">PREÇO</label>            
        <input
        id ="techs"
        placeholder ="Qual o valor"
        value ={price}
        onChange ={event => setPrice(event.target.value)}
        /> 


        <button type="submit" className="btn"> Criar Spot</button>
        </form>
    )
}