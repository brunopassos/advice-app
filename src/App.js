import { GlobalStyle } from "./styles/global";

import AdviceCard from "./components/AdviceCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GlobalStyle/>
        <AdviceCard/>
      </header>
    </div>
  );
}

export default App;
