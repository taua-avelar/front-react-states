import "./App.css";
import kevin from "./assets/kelvin-costa.png";
import { useState } from "react";

const users = [
  {
    foto: kevin,
    nome: "kelvin Costa",
    usuario: "@costa",
    seguidores: 200,
    seguindo: 133,
  },
];

function App() {
  const [estaSeguindo, setEstaSeguindo] = useState(false);

  function seguir() {
    estaSeguindo ? setEstaSeguindo(false) : setEstaSeguindo(true);
  }

  function RenderizarPerfis({ foto, nome, usuario, seguidores, seguindo }) {
    return (
      <div className="card" key={usuario}>
        <div className="perfil">
          <img className="perfil-img" src={foto} alt="perfil" />
          <h2>{nome}</h2>
          <span>{usuario}</span>
          <p>
            {estaSeguindo ? seguidores + 1 : seguidores} Seguidores <br />
            {seguindo} Seguindo
          </p>
        </div>
        <button className={estaSeguindo ? "seguindo" : null} onClick={seguir}>
          {estaSeguindo ? "Seguindo" : "Seguir"}
        </button>
      </div>
    );
  }

  return (
    <div className="App">{users.map((user) => RenderizarPerfis(user))}</div>
  );
}

export default App;
