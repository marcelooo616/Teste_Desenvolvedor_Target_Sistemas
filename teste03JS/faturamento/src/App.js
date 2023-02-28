
import { useContext } from 'react';
import './App.css';

function App() {
  const faturamentoMes = [];
  const aa = [];
 
  
  const data_db = [
    {
      "dia": 1,
      "valor": 22174.1664
    },
    {
      "dia": 2,
      "valor": 24537.6698
    },
    {
      "dia": 3,
      "valor": 26139.6134
    },
    {
      "dia": 4,
      "valor": 0.0
    },
    {
      "dia": 5,
      "valor": 0.0
    },
    {
      "dia": 6,
      "valor": 26742.6612
    },
    {
      "dia": 7,
      "valor": 0.0
    },
    {
      "dia": 8,
      "valor": 42889.2258
    },
    {
      "dia": 9,
      "valor": 46251.174
    },
    {
      "dia": 10,
      "valor": 11191.4722
    },
    {
      "dia": 11,
      "valor": 0.0
    },
    {
      "dia": 12,
      "valor": 0.0
    },
    {
      "dia": 13,
      "valor": 3847.4823
    },
    {
      "dia": 14,
      "valor": 373.7838
    },
    {
      "dia": 15,
      "valor": 2659.7563
    },
    {
      "dia": 16,
      "valor": 48924.2448
    },
    {
      "dia": 17,
      "valor": 18419.2614
    },
    {
      "dia": 18,
      "valor": 0.0
    },
    {
      "dia": 19,
      "valor": 0.0
    },
    {
      "dia": 20,
      "valor": 35240.1826
    },
    {
      "dia": 21,
      "valor": 43829.1667
    },
    {
      "dia": 22,
      "valor": 18235.6852
    },
    {
      "dia": 23,
      "valor": 4355.0662
    },
    {
      "dia": 24,
      "valor": 13327.1025
    },
    {
      "dia": 25,
      "valor": 0.0
    },
    {
      "dia": 26,
      "valor": 0.0
    },
    {
      "dia": 27,
      "valor": 25681.8318
    },
    {
      "dia": 28,
      "valor": 1718.1221
    },
    {
      "dia": 29,
      "valor": 13220.495
    },
    {
      "dia": 30,
      "valor": 8414.61
    }
  ];

  const maiorFaturamentoMes = data_db.reduce(function(prev, current){
    return (prev.valor > current.valor) ? prev : current;
  });

  const menorFaturamentoMes = data_db.reduce(function(prev, current){
    return (prev.valor < current.valor && prev.valor > 0) ? prev : current;
  });

  faturamentoMes.push(maiorFaturamentoMes);
  faturamentoMes.push(menorFaturamentoMes);
  console.log("Maior e menor faturamento do Mes" + faturamentoMes);

 
  
  function getTotalFaturamento(){
    return data_db.reduce((total, data_db) => {
      total += data_db.valor;
      return total;
    },0)
  }

  function inde(){
    return data_db.reduce((total, data_db) => {
      total += data_db.valor;
      return total;
    },0)
  }

  const total = getTotalFaturamento();
  const media = total / data_db.length;
  const qts = data_db.length;

 

  

  const faturamentoMaiorQueAMedia = data_db.filter(function(data_db) {
    return data_db.valor > media;        
});
   console.log(faturamentoMaiorQueAMedia);





  return (
    <div className="App">
      <h1>Faturamento do Mes</h1>
          <h2>Maior e menor valor respectivamente</h2>
          <h2>Total do Faturamento do mes: {getTotalFaturamento().toFixed(2)}</h2>
          <h2>Media do mes: {media.toFixed(2)}</h2>
          <h2>Media do mes: {qts}</h2>

          
     {faturamentoMes.map((item) =>{
      return(
        <div>
          <h4>Dia: {item.dia}, Valor: R${item.valor}</h4>
        </div>
      )
     })}
    </div>
  );
}

export default App;
