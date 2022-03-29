import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Introduction from "./components/introduction/Introduction";
import ProductList from "./components/productlist/ProductList";
import Skills from "./components/skills/Skills";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";


function App() {
  const theme=useContext(ThemeContext);
  const darkmode=theme.state.darkmode;
  return (
    <div style={{backgroundColor:darkmode?'#222':"white",color:darkmode &&'white'}}>
      <Toggle/>
     <Introduction/>
     <About/>
     <ProductList/>
     <Skills/>
     <Contact/>
    </div>
  );
}

export default App;
