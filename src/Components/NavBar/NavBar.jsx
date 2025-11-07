import React from "react";
import MainDashBoard from "../MainDashBoard/MainDashBoard";
import Payment from "../Payment/Payment";

function NavBar() {
  const name ="Niharika"

  PaymentContext


  const data = "hello some sample data"
  return (
    <div>
      {" "}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Zepto
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Super Saver
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                4 Minutes
              </a>
            </li>
          </ul>
          <form
            className="form-inline my-2 my-lg-0"
            style={{ display: "flex", gap: "20px" }}
          >
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              style={{ width: "45vw" }}
            />
            <div>Profile</div>
            <div>Cart</div>

            <p>{name}</p>
          </form>
        </div>
      </nav>
      <MainDashBoard name={name} data={data} />
      <Payment name={name}/>
    </div>
  );
}

export default NavBar;

// react props obj = {
//     name = "NIharika",
//     location:"Hydrabad"
// }



// context API 

// YOU CAN ASK WHENEVER ITS REQUIRED DATA OR NAME