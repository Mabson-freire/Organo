import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';


function App() {

  const teams = [ 
   {
    nome: 'Programação',
    corPrincipal: '#57C278',
    corSecundaria: '#D9F7E9'
   },
   {
    nome: 'Front End',
    corPrincipal: '#82CFFA',
    corSecundaria: '#E8F8FF'
   },
   {
    nome: 'Data Science',
    corPrincipal: '#A6D157',
    corSecundaria: '#F0F8E2'
   },
   {
    nome: 'Devops',
    corPrincipal: '#E06B69',
    corSecundaria: '#FDE7E8'
   },
   {
    nome: 'Ux Design',
    corPrincipal: '#DB6EBF',
    corSecundaria: '#FAE9F5'
   },
   {
    nome: 'Mobile',
    corPrincipal: '#FFBA05',
    corSecundaria: '#FFF5D9'
   },
   {
    nome: 'Inovação e Gestão',
    corPrincipal: '#FF8A29',
    corSecundaria: '#FFEEDF'
   },
   
  ]
  const [collaborators, setCollaborators] = useState([]) 

  const toNewCollaboratorAdded = (collaborator) => {
    setCollaborators([...collaborators, collaborator])
  }

  return (
    <div className="App">
      <Banner/>
      <Form namesOfTeams={teams.map(team => team.nome)} toCollaboratorCadastred={collaborator => toNewCollaboratorAdded(collaborator)}/>
      
      {teams.map(team => <Team 
        key={team.nome} 
        nome={team.nome} 
        corPrincipal={team.corPrincipal} 
        corSecundaria={team.corSecundaria}
        collaborators={collaborators.filter(collaborator => collaborator.time === team.nome)}
      />)}

      <Footer/>
    </div>
  );
}

export default App;
