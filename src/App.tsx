import LinkComponent from "./components/LinkComponent";
import NavbarComponent from "./components/NavbarComponent";
import { Windows,Playstation,Xbox,NintendoSwitch,Android,Apple,Gift,Collection,People } from "react-bootstrap-icons";
import LogoText from "./components/LogoText";
import ImageText from "./components/ImageText";
import ImagesExport from "./assets/ImagesExport"
import HomePageGames from "./pages/HomePageGames";

function App(){
    const [genreImages,genreText]=ImagesExport()
    
  return(
    <>
   
    <div className="container">
    <NavbarComponent/>
      <div className="row mt-5">
        <div className="col-sm-2">
          <LinkComponent text="Home"/>
          <LinkComponent text="Reviews"/>
          <LinkComponent text="Profile"/>
          <LogoText icon={<Gift />} text="Wishlist" />
          <LogoText icon={<Collection />} text="Library" />
          <LogoText icon={<People />} text="People" />
          <LinkComponent text="Platform"/>
          <LogoText icon={<Windows />} text="PC" />
          <LogoText icon={<Playstation />} text="Play Station" />
          <LogoText icon={<Xbox />} text="Xbox one" />
          <LogoText icon={<NintendoSwitch />} text="Ninetendo" />
          <LogoText icon={<Apple />} text="iOS" />
          <LogoText icon={<Android />} text="Android" />
          <LinkComponent text="Genres"/>
          <ImageText genreImages={genreImages} genreText={genreText}/> 
        </div>
        <div className="col-sm-10">
          <h1 className="mb-4">New & Trending</h1>
          <HomePageGames />
        </div>
      </div>
      <div className="footer">
        Footer

      </div>
    </div>
    </>
    
  )
}

export default App;