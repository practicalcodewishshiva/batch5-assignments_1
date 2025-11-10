import React from 'react'

export default function NewInStore() {
   const displayStudentList = [
    { name: "Niharika Component", price: 17, button: "add me " },
  
  ];


  
  return (
    <div className="row">
        {displayStudentList.map((ele) => {
          return (
            <>
              <div className="col-2">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">{ele.name}</h5>
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
  )
}


{/* <button>
  
</button> */}

{/* <NewInStore></NewInStore> */}
