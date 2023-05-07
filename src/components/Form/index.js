import { useState } from "react"
import Button from "../Button"
import SuspendesList from "../SuspendedList"
import TextField from "../TextField"
import './Form.css'

const Form = (props)=> {

  const [nome, setNome] = useState('')

  const [cargo, setCargo] = useState('')

  const [admissão, setAdmissão] = useState('')

  const [imagem, setImagem] = useState('')
  
  const [time, setTime] = useState('Programação')

  const whenSaving = (evento) => {
    evento.preventDefault()
    props.toCollaboratorCadastred({
      nome: nome,
      cargo: cargo,
      admissão: admissão,
      imagem: imagem,
      time: time
    })
    setNome('')
    setCargo('')
    setAdmissão('')
    setImagem('')
    setTime('')
  }


  return(
    <section className="form">
      <form onSubmit={whenSaving}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>

        <TextField className = 'input-text' 
          mandatory={true} 
          label = 'Nome' 
          placeholder='Digite seu nome...'
          value={nome}
          ofChanged = {value=> setNome(value)}
        />

        <TextField className = 'input-text' 
          mandatory={true} 
          label ='Cargo' 
          placeholder='Digite seu Cargo...'
          value={cargo}
          ofChanged = {value=> setCargo(value)}
        />

        <TextField className = 'input-text'  
          mandatory={true} 
          label ='Admissão' 
          placeholder='Digite sua data de admissão...' 
          type = 'date'
          value={admissão}
          ofChanged = {value=> setAdmissão(value)}
        />

        <TextField className = 'input-file' 
          label = 'Imagem'  
          placeholder ={'Informe o endereço da imagem...'}
          value={imagem}
          ofChanged = {value=> setImagem(value)}
        />

        <SuspendesList 
          itens = {props.namesOfTeams}
          label = 'Times'
          mandatory={true}
          value={time}
          ofChanged = {value => setTime(value)}
        />

        <Button>Criar Card</Button>
      </form>
    </section>
  )
}

export default Form