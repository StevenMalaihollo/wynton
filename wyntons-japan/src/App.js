import "./App.css";

const japanImg =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Naval_ensign_of_the_Empire_of_Japan.svg/1200px-Naval_ensign_of_the_Empire_of_Japan.svg.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={japanImg} className="App-logo" alt="logo" />
        <p>Welkom in Wyntons app om Japans te leren 😀</p>
      </header>
    </div>
  );
}

export default App;
