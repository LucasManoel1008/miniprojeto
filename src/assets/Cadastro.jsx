import React, {useState, useEffect} from 'react'
import axios from 'axios'


const Cadastro = () => {
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [codigoBarras, setCodigo] = useState("");
    const [preco, setPreco] = useState("");
    const [statusProd, setStatusProd] = useState("");

    
    const onSubmit =() => {
      axios.post("http://localhost:8080/produto",
      
       {nome: nome, 
        descricao: descricao,
        codigoBarras: codigoBarras, 
        preco: preco, 
        statusProd: statusProd
      })
      .then((response)=>{
        if(response.status==200 || response.status==201) alert('cadastro com sucesso')
        else alert('CADASTRO NÃO REALIZADO')
      })
    .catch(e=>console.log(e.message))
    }
    
    
  return (
    <div>
        <form>
            <input type="text" onChange={(e) => setNome(e.target.value)} />
            <input type="text" onChange={(e) => setDescricao(e.target.value)} />
            <input type="text" onChange={(e) => setCodigo(e.target.value)} />
            <input type="text" onChange={(e) => setPreco(e.target.value)} />
            <input type="text" onChange={(e) => setStatusProd(e.target.value)} />
           
            <input type="button" value="Cadastrar" onClick={()=>onSubmit()} />
        </form>
    </div>
  )
}

export default Cadastro