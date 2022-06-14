import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Link to="/about">About</Link>
      <header className="App-header">
       <h1>Мой заголовок</h1>
        <button>Отправить</button>
      </header>
    </div>
  );
}

export default App;
