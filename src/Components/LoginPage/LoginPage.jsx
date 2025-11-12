import React from "react";
import "../../Components/LoginPage/LoginPage.css";

export default function LoginPage() {
  return (
    <>
      <div>LoginPage</div>

      <div className="login-container">
        <div className="login-fields">
          Lowest Prices Everyday<br></br> in 10 minutes*
          <input type="number" className="userName" placeholder="Enter Phone Number" />
          <button>Continue</button>
        </div>
        <div>
          Right Side Container
          <img src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/13.33.2/tr:w-180,ar-180-46,pr-true,f-auto,q-80//images/app-stores/download-play-store.svg" />
        </div>
      </div>
    </>
  );
}
