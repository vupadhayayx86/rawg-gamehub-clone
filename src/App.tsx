import NavbarComponent from "./components/NavbarComponent";
import { BrowserRouter,Route,Routes} from "react-router-dom";
import Paltform from "./pages/Paltform";

function App(){
  return(
    <>
    
    <div className="container mt-3">
    <NavbarComponent/>
      <div className="row mt-5">
        <div className="col-sm-2" style={{border:'1px solid black'}}>
          <h1>Aside</h1>
         <BrowserRouter>
         <Routes>
           <Route path="/platform" element={<Paltform/>}></Route>
          </Routes>
         </BrowserRouter>
        </div>
        <div className="col-sm-10" style={{border:'1px solid black'}}>
          <h1>New & Trending</h1>
        </div>
      </div>
    </div>
    </>
    
  )
}

export default App;