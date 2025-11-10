import React, { useContext, useState } from "react";
import axios from "axios";
import "../MainDashBoard/MainDashBoard.css";
import { arr } from "../../MockData/MockData";
import { PaymentContext } from "../ContextAPI/PaymentSectionContext";

function MainDashBoard(props) {
  const [responseData, updateResponseData] = useState([]);
  const [error, setError] = useState("");

  const { displayStudentList, userName } = useContext(PaymentContext);

  console.log("userName", userName);

  async function getUserData() {
    try {
      const finalData = await axios.get("https://dummyjson.com/productssfsfsd");
      const response = await finalData.data.products;
      updateResponseData(response);
    } catch (error) {
      setError(error);
      console.log("error", error);
    }
  }

  console.log("arr", arr);
  // three states pening flullil rejet
  return (
    <>
      <button onClick={getUserData}>getUserDataaaaaa</button>
      {/* <div>{`${props.userDetails.name || ""}  ${
        props.userDetails.location || ""
      }`}</div> */}

      <div>{props.data}</div>
      <div className="row">
        {responseData.length === 0 && (
          <>
            <span class="loader"></span>
          </>
        )}
        {responseData.map((ele) => {
          return (
            <>
              <div className="col-2">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">{ele.title}</h5>
                    <p class="card-text">{ele.price}</p>
                    <a href="#" class="btn btn-primary">
                      {ele.button || "Click me "}
                    </a>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default MainDashBoard;

// data communication oka place inokoa place data share cheyadam

// State --- single file share cheyali
// Props --- local
// Context API GLOBAL SHARE -- update edit delete add issues

// Redux global State(JS Obj or array) Management Library

// <PAYMENT data={data} name={name}/>

// function Payment(){
//   return <>

//   <cart data={data}/>

//   </>
// }

// function Cart(){
//   return
//   <>

//   <addMe name={name}/>

//   </>
// }

// function addMe(){
//   return <>
//   <component1/>
//     <component1/>
//       <component1/>
//         <component1 name={name}/>
//           <component1/>
//             <component1/>
//               <component1/>
//                 <component1/>  <component1/>

//   </>
// }

// mempry consumtion as well memory leackage prevent context api

// global oka obj or arrar or single value
