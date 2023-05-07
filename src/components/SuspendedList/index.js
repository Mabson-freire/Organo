import './SuspendedList.css'

const SuspendesList = (props) => {
  return(
    <div className='suspended-list'>

      <label>{props.label}</label>
      
      <select onChange = {evento => props.ofChanged(evento.target.value)}
      value = {props.value} required={props.mandatory}>
        <option value={""}></option>
        {props.itens.map(item => {
          return <option key={item}>{item}</option>
        })}
      </select>
    </div>

  ) 
}

export default SuspendesList