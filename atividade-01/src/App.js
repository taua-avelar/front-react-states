import "./App.css";
import close from "./assets/close.svg"
import cookie from "./assets/cookie.svg"
import { useState } from "react";

function App() {

  const [alert, setAlert] = useState(true)

  function esconderAlert() {
    setAlert(!alert)
  }

  return <div className={!alert && 'escondido'}>
    <div className="alert">
      <img className="close-btn" src={close} alt="close" />
      <img src={cookie} alt="cookie" />
      <p>
        Nós utilizamos cookies para melhorar nossa UX, analytics e marketing.
      </p>
      <button onClick={esconderAlert} >Tudo Bem!</button>
    </div>
  </div>;
}

export default App;
