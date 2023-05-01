import './Collaborator.css'

const Collaborator = (props) => {

  return (
    <div className='collaborator'>
      <div className='header'style={{backgroundColor:props.cor}}>
        <img src={props.imagem} alt={props.nome}/>
      </div>

     <div className='footer'>
        <h4 style={{color: props.cor}}>{props.nome}</h4>
        <h5>{props.cargo}</h5>
     </div>
    </div>
  )
}

export default Collaborator