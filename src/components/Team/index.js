import Collaborator from '../Collaborator'
import './Team.css'

const Team = (props) => {
  
  const css = {backgroundColor: props.corSecundaria}
  return (
    // tratando times com operador ternário.
    // se props.collaborators for maior que 0 então ele exibirá na tela
    (props.collaborators.length > 0) ?
    <section className='team' style={css}>
      
      <h3 style={{borderColor: props.corPrincipal}}>{props.nome}</h3>

      <div className='collaborators'>
        {props.collaborators.map(collaborator => <Collaborator 
        key={collaborator.nome}
        nome={collaborator.nome}
        cargo={collaborator.cargo}
        imagem={collaborator.imagem}
        cor={props.corPrincipal}
        />)}
      </div>
    </section>
    :'' //caso não for maior que zero, retornará uma string vazia
  )
}

export default Team