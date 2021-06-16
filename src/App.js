import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer>
      <header className="App-header">
        <h1>Contachuelas-Porfirio</h1>
      </header>
    </div>
  );
}

export default App;