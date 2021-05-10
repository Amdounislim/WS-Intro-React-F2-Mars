// import logo from './logo.svg';
import "./App.css";
// import Header from "./Header"
import { Header } from "./components/Header/Header";
// import Main from "./components/Main";
// import Footer from "./components/Footer";
import Introduction from "./components/Introduction/Introduction"
import List from "./components/List/List"

function App() {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <List />
      {/* <Main />
      <Footer /> */}
    </div>
  );
}

export default App;
