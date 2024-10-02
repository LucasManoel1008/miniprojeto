import React, {useState, useEffect} from 'react';
import axios from 'axios';
import FlatList from 'flatlist-react/lib';

const Lista = () => {
    const [dados, setDados] = useState([])
    const Busca =() =>
    {
        axios.get("http://localhost:8080/produto")
        .then((response)=>{
            setDados(response.data)
        })
        .catch(e=>console.log(e.message))
    }
    useEffect(()=>{
        Busca()
    }, [])

    const Item = (item,idx) =>{
        return(
            <li
            style={{margin: "20px", color: "yellowgreen", background:"white"}}
            key={idx}> {/* Identifica de forma separada cada item da lista */}
                <p>{item.nome}</p>
                <p>{item.descricao}</p>
            
            </li>
           
        )
    }

    return (
        <div>
            <ul>
               <FlatList
               list={dados}
               renderItem={Item}
               />
            </ul>
        </div>
    )
}
export default Lista;