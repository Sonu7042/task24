import "./App.css";
import Header from "./components/Header";
import ItemContextProvider from "./context/ItemContextProvider";
import Main from "./components/Main";


function App() {
  return (
    <ItemContextProvider>
      <Header/>
      <Main />
    </ItemContextProvider>
  );
}

export default App;
