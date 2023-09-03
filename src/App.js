import './App.css';
import api from './services/request_api';
import Card from './component/card/card';
import { useState} from 'react';

function App() {

  const [cidade,setcidade] = useState(null);
  const[valorInput,setValorInput] = useState("");


  //Verifica o valor dentro do input e atribui a variavel
  const handleInputChange = (event) => {
    setValorInput(event.target.value);
  };

 async function Pesquisa(valorInput){
    
    const dados_api = await api.get('forecast.json?key=2d31d2b35db14ad690150238230309&q='+ valorInput) // Retorna um JSON com diversos valores
    const clima_cidade = dados_api.data //Pega apenas o 'data' do JSON retornado

   
    setcidade(
      <Card
        nome_cidade = {clima_cidade.location.name}
        nome_estado = {clima_cidade.location.region}
        temp_atual = {clima_cidade.current.temp_c}
      
        img_madrugada = {clima_cidade.forecast.forecastday[0].hour[2].condition.icon} // Pega o icone do tempo das 2:00 da madrugada
        img_manha = {clima_cidade.forecast.forecastday[0].hour[7].condition.icon} // Pega o icone do tempo das 7:00 da manhã
        img_tarde = {clima_cidade.forecast.forecastday[0].hour[13].condition.icon} // Pega o icone do tempo das 13:00 da tarde
        img_noite = {clima_cidade.forecast.forecastday[0].hour[19].condition.icon} // Pega o icone do tempo das 19:00 da noite
        temp_max = {clima_cidade.forecast.forecastday[0].day.maxtemp_c}
        temp_min = {clima_cidade.forecast.forecastday[0].day.mintemp_c}
      
        ultima_att = {clima_cidade.current.last_updated}
      />
    )
  }

  return (
    <div className="App">
      <input
      placeholder='Digite o nome da cidade'
      value={valorInput} 
      onChange={handleInputChange} // Passa as mudanças do input para o handle (e o handle guarda na variavel valorInput)
      />
      <button onClick={() => Pesquisa(valorInput)}>Pesquisar Cidade</button>
      {cidade !== null && cidade}
      
    </div>
  );
}

export default App;
