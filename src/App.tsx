import NavbarComponent from "./components/NavbarComponent";
import HomePageGames from "./pages/HomePageGames";
import AsideComponent from "./components/AsideComponent";

function App(){
  return(
    <>
    <div className="container">
    <NavbarComponent/>
      <div className="row mt-5">
        <AsideComponent />
        <div className="col-sm-10">
          <HomePageGames />
        </div>
      </div>
    </div>
    </>
    
  )
}

export default App;