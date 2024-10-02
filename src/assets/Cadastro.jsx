import React, {useState, useEffect} from 'react'
import axios from 'axios'


const Cadastro = () => {
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [codigoBarras, setCodigo] = useState("");
    const [preco, setPreco] = useState("");
    const [statusProd, setStatusProd] = useState("");

    
    const onSubmit =() => alert((nome));
  return (
    <div>
        <form>
            <input type="text" onChange={(e) => setNome(e.target.value)} />
            <input type="text" onChange={(e) => setDescricao(e.target.value)} />
            <input type="text" onChange={(e) => setCodigo(e.target.value)} />
            <input type="text" onChange={(e) => setNome(e.target.value)} />
            <input type="text" onChange={(e) => setNome(e.target.value)} />
           
            <input type="button" value="Cadastrar" onClick={()=>onSubmit()} />
        </form>
    </div>
  )
}

export default Cadastro