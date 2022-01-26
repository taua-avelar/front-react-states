import "./App.css";
import burger from "./assets/hamburguer.png"
import { useState } from "react"

function App() {
  const [quantidade, setQuantidade] = useState(0)

  function adicionar () {
    setQuantidade(quantidade + 1)
  }

  function remover () {
    quantidade > 0 && setQuantidade(quantidade - 1)
  }

  return <div className="App">
    <div className="card">
      <img src={burger} alt="burger" />
      <h1>Hamburguer</h1>
      <p>
      Arcu, sagittis, ut lectus 
      congue dapibus semper odio a, lobortis. 
      </p>
      <div className="quantidade">
        <button onClick={remover}>-</button>
        {quantidade}
        <button onClick={adicionar}>+</button>
      </div>
    </div>

  </div>;
}

export default App;
