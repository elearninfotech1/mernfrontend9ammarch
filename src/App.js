import "./App.css";
import Footer from "./footer/Footer";
import Header from "./header/header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Routing from "./Routing";
import { createContext, useState } from "react";
export const Store = createContext();
function App() {
  const [token, setToken] = useState("");
  return (
    <div className="App">
      <Store.Provider value={[token, setToken]}>
        <Header />
        <Routing />
        <Footer />
      </Store.Provider>
    </div>
  );
}

export default App;
