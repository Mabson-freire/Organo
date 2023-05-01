import './TextFiel.css'
/* forma de fazer utilizando array com ...rest
que é necessário também realizar a chamada utilizando {} em app.js*/

// const TextField = ({label,...rest}) => {
//   return (
//     <div className="text-field">
//       <label>{label}</label>
//       <input {....rest}/>
//     </div>
//   )
// }

const TextField = (props) => {
  // podemos incluir conteúdos adicionais realizando a concatenação java-script
  const placeholderComplement = `${props.placeholder}`

  const ofDigit = (event) => {
    props.ofChanged(event.target.value)
  }

  return (
    <div className="text-field">
      <label>{props.label}</label>
      <input   
        onChange={ofDigit}
        className={props.className}
        placeholder={placeholderComplement} 
        required={props.mandatory}
        value={props.value}
        type={props.type}
      />
    </div>
  )
}

 export default TextField