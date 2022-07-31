import { GlobalStyle } from "./styles/global";

import AdviceCard from "./components/AdviceCard";

import { Center } from "@chakra-ui/react"

function App() {
  return (
    
      <Center bg={"gray.50"} w={"100vw"} h={"100vh"}>
        <header className="App-header">
          <GlobalStyle/>
          <AdviceCard/>
        </header>
      </Center>
    
  );
}

export default App;
