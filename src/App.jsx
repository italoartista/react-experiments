import { useState } from 'react'
import Dropdown from './Dropdown'
import Dashboard from './Dashboard'

function App() {
 
  // props e state são os dois principais conceitos do React.


  return (
    <>
    
      <Dashboard />
   
    </>
  )

  
}
let paises = [
  'Brasil', 
  'Argentina', 
  'Uruguai', 
  'Paraguai', 
  'Chile', 
  'Peru', 
  'Colombia', 
  'Venezuela', 
  'Equador', 
  'Bolivia', 
  'Guiana', 
  'Suriname', 
  'Guiana Francesa'
]
let cidades = ['Rio de Janeiro', 
'São Paulo', 
'Belo Horizonte', 
'Curitiba', 
'Porto Alegre', 
'Florianópolis', 
'Cuiabá', 
'Campo Grande', 
'Goiânia', 
'Brasília', 
'Salvador', 
'Recife', 
'Fortaleza', 
'Natal', 
'João Pessoa', 
'Teresina', 
'São Luís', 
'Belém', 
'Macapá', 
'Manaus', 
'Boa Vista', 
'Palmas', 
'Rio Branco', 
'Porto Velho'
]
export default App
