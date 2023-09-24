import React, { useState } from "react";
import './buscador.css'
import {GrSearch} from 'react-icons/gr'
export const BuscarCep = () =>{

    const [input,setInput] = useState('')
    const [cep,setCep] = useState('')
    
    const handleCep = async () =>{

       

        try{
            const apiUrl = `https://viacep.com.br/ws/${input}/json/`
            const response = await fetch(apiUrl)

            if(!response.ok){
                throw new Error(`Erro na requisição: ${response.status}`);
            }
            const data = await response.json()
            console.log(data)
            setCep(data)
            
            

        }catch(error){
            alert(`Erro ao buscar CEP`);
           
            
    }   

         setInput("")
         
        }
    return (
        <div className="container">
            <h1>BUSCA CEP</h1>
         <div className="containerInput">
         <input
            type="text"
            className="input"
            value={input}
            placeholder="Digite o CEP" 
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="button" onClick={handleCep}><GrSearch/></button>
         </div>  
              <div className="containerInfo">
              <span>Cep: {cep.cep}</span>
              <span>Localidade: {cep.localidade}</span>
              <span>Bairro: {cep.bairro}</span>
              <span>Logradouro: {cep.logradouro}</span>
          </div>
        </div>
      );
}


