import React from 'react'
import NavbarComponent from "../components/NavbarComponent";
import AsideComponent from "../components/AsideComponent";

const Review = () => {
  return (
    <>
    <div className="container">
    <NavbarComponent/>
      <div className="row mt-5">
        <AsideComponent />
        <div className="col-sm-10">
        <h1 className="heading-top">Reviews</h1>
        </div>
      </div>
    </div>
    </>
  )
}

export default Review