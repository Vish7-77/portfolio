import { useContext } from "react";
import About from "./compos/About/About";
import Cont from "./compos/cont/Cont";
import Intro from "./compos/Intro/Intro";
import Toggle from "./compos/toggle/Toggle"
import ProductList from "./compos/ProductLIst/ProductList"
import "./main.css"
import {  ThemeContext } from "./Context";

function App() {
  const theme = useContext(ThemeContext)
  const darkMode =theme.state.darkMode;
  return (
  <div style={{backgroundColor:darkMode?"#222":"white" ,color:darkMode &&"white"}} >
<Toggle/>
<Intro/>
<About/>
<ProductList/>
<Cont/>
  </div>
  );
}

export default App;
