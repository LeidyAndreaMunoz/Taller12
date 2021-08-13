import { GetData } from "./utils/getData";
import { Button1 } from "./Components/Button1";
import { Button2 } from "./Components/Button2";
import { Button3 } from "./Components/Button3";
import { Fetch } from "./Components/Fetch";
import './Components/global.css'
import { Search } from "./Components/Search";

function App() {
  GetData();
  return (
    <div className="App">
      <div>
        <h3>Ejercicio Botón 1</h3>
        <Button1/>
      </div>
      <div>
      <h3>Ejercicio Botón 2</h3>
        <Button2/>
      </div>
      <div>
        <h3>Ejercicio Botón 3</h3>
        <Button3/>
      </div>
      <div>
        <h3>Ejercicio Fetch</h3>
        <Fetch/>
      </div>
      <div>
        <h3>Ejercicio Fetch 2 </h3>
        <Search/>
      </div>
    </div>
  );
}

export default App;
