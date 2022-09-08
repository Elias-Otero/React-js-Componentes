import Navbar from "./components/Navbar"; 
import Course from "./components/Course";
import Footer from "./components/Footer"; 
import ItemsListContainer from "./components/ItemsListContainer";

const App = () => {
  return (
   <>

      <Navbar />
      <ItemsListContainer />
      <Course name="Introduccion al armado de pc" teacher="Elias Otero" duration="1 dia"/>
      <Course name="Armado de pc parte 1" teacher="Elias Otero" duration="2 dias"/>
      <Course name="Armado de pc parte 2" teacher="Elias Otero" duration="2 dias"/>
      <Footer />

   </>
  );
}

export default App; 