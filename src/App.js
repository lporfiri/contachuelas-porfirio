import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      <ItemCount initial={1} stock={5} onAdd={() => console.log("agregado")} />
      <header className="App-header">
        <h1>Contachuelas-Porfirio</h1>
      </header>
    </div>
  );
}

export default App;
