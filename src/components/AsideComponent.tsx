import React from 'react'
import LinkComponent from './LinkComponent'
import LogoText from './LogoText'
import ImagesExport from '../assets/ImagesExport';
import ImageText from './ImageText';
import { Windows,Playstation,Xbox,NintendoSwitch,Android,Apple,Gift,Collection,People } from "react-bootstrap-icons";

const AsideComponent = () => {
    const [genreImages,genreText]=ImagesExport()
  return (
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
  )
}

export default AsideComponent