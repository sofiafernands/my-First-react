import React from "react"; // importo la libreria reac

//declaro mi componente 

function Nav () {
    return( <nav className="navbar navbar-expand-lg bg-body-tertiary w-500px" style={{ backgroundColor: "grey"}}>
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" style={{ color: "white"}} href="#"><b>Start Bootstrap</b></a>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{paddingLeft:"900px"}}>
          <li className="nav-item">
            <a className="nav-link active" style={{ color: "white"}} aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ color: "white"}}>About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" style={{ color: "white"}}>Service</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" style={{ color: "white"}}>Contac</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>


    )
}
export default Nav