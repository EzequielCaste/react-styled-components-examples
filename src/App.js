import ComponentesEstilizados from "./components/ComponentesEstilizados";
import {createGlobalStyle} from 'styled-components'


const GlobalStyle = createGlobalStyle`
  h2 {
    color: red;
  }
`;


function App() {
  return (
    <>
      <GlobalStyle />
      <ComponentesEstilizados />
    </>
    
  );
}

export default App;
