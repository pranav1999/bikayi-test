import "./App.css";
import AllWinners from "./AllWinners";
import TopFour from "./TopFour";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Nobel Prize Winners for the last 💯 Years</h1>
        <TopFour />
        <AllWinners />
      </header>
    </div>
  );
}

export default App;
