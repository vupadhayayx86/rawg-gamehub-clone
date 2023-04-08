import LinkComponent from "./components/LinkComponent";
import NavbarComponent from "./components/NavbarComponent";
import {Link, Route,Routes} from "react-router-dom";
import { Windows,Playstation,Xbox,NintendoSwitch,Android,Apple } from "react-bootstrap-icons";
import LogoText from "./components/LogoText";
import ImageText from "./components/ImageText";
import ImagesExport from "./assets/ImagesExport"

function App(){
    const genreImages=ImagesExport()
  
  return(
    <>
   
    <div className="container mt-3">
    <NavbarComponent/>
      <div className="row mt-5">
        <div className="col-sm-2">
          <LinkComponent text="Home"/>
          <LinkComponent text="Reviews"/>
          <LinkComponent text="Profile"/>
          <LinkComponent text="Platform"/>
          <LogoText icon={<Windows />} text="PC" />
          <LogoText icon={<Playstation />} text="Play Station" />
          <LogoText icon={<Xbox />} text="Xbox one" />
          <LogoText icon={<NintendoSwitch />} text="Ninetendo" />
          <LogoText icon={<Apple />} text="iOS" />
          <LogoText icon={<Android />} text="Android" />
          <LinkComponent text="Genres"/>
          <ImageText genreImages={genreImages} />
         
          
        </div>
        <div className="col-sm-10">
          <h1>New & Trending</h1>
          
        </div>
      </div>
      
    </div>
    </>
    
  )
}

export default App;