import React, {useState} from 'react';
import api from '../../services/api';



export default function Login({history}){
    const [email, setEmail] = useState('');

    /* funcao para chamar a api */
    async function handleSubmit(event) {
      event.preventDefault();
  
      const response = await api.post('/sessions', { email});
      
  
      const { _id } = response.data;
    
      /* salvar id no banco do navegador*/
      localStorage.setItem('user', _id);
      
     history.push("/dashboard");
    }  
    return (
        <>
        <p>
        Ofereças <strong>spots</strong> para programadores e encontre <strong> talentos</strong> para sua empresa
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email </label>
          <input type="email"
           id ="email" 
           placeholder="Seu melhor email"
           value={email}
           onChange={event => setEmail(event.target.value)}
         />
           
 
           <button className="btn" type="submit">Entrar</button>
        </form>
 </>
    )
}