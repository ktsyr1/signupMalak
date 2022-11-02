import { useState } from "react";
import "./page.sass";
export default function Signup(): any {
  let [staps, setStaps] = useState(33);
  let Next = () => setStaps(staps + 33);
  let BtnContext = staps === 99 ? "Signup" : "Next";
  return (
    <div>
      <div className="contenar">
        {/* sign up */}
        <Header />
        <div className="boxForm">
          {/* content */}

          <FormUserInfo display={staps === 33} />
          <FormMap display={staps === 66} />
          <FormPaymonet display={staps === 99} />
          <div className=" boxSend">
            <p>Sign in instead</p>
            {/* send */}
            <button onClick={Next}>{ BtnContext}</button>
          </div>
          <div> {/* image */} </div>
        </div>
      </div>
    </div>
  );
}
function FormPaymonet(props: any) {
  return (
    <form className={props.display ? "" : "none"}>
      <p className="textUi">Card type</p>
      {/* <select display>
        <option></option>
      </select> */}
      {/* image map */}
    </form>
  );
}
function FormMap(props: any) {
  return (
    <form className={props.display ? "" : "none"}>
      <p className="textUi">Mobile</p>
      <input type={"tel"} name="mobile" placeholder="Mobile no." />

      <p className="textUi pt-18 p">Address</p>
      <div className="box row i2 space">
        <input type="text" name="country" placeholder="Country" />
        <input type="text" name="city" placeholder="City" />
      </div>
      {/* image map */}
    </form>
  );
}
function Header() {
  return (
    <div className="box col">
      {/* logo */}
      <div className="box row j-center">
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.42233 19.8203C7.84433 19.8203 8.18733 20.1633 8.18733 20.5853C8.18733 21.0073 7.84433 21.3493 7.42233 21.3493C7.00033 21.3493 6.65833 21.0073 6.65833 20.5853C6.65833 20.1633 7.00033 19.8203 7.42233 19.8203Z"
            stroke="#FF6C18"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            opacity="0.4"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.6747 19.8203C19.0967 19.8203 19.4397 20.1633 19.4397 20.5853C19.4397 21.0073 19.0967 21.3493 18.6747 21.3493C18.2527 21.3493 17.9097 21.0073 17.9097 20.5853C17.9097 20.1633 18.2527 19.8203 18.6747 19.8203Z"
            stroke="#FF6C18"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.74988 3.25L4.82988 3.61L5.79288 15.083C5.87088 16.018 6.65188 16.736 7.58988 16.736H18.5019C19.3979 16.736 20.1579 16.078 20.2869 15.19L21.2359 8.632C21.3529 7.823 20.7259 7.099 19.9089 7.099H5.16388"
            stroke="#FF6C18"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            opacity="0.4"
            d="M14.1254 10.7949H16.8984"
            stroke="#FF6C18"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <h1 className="textUi f-18"> MyShopy </h1>
      </div>
      <b className="f-18 pt-18" style={{ padding: "18px 0 8px 0" }}>
        Create account
      </b>
    </div>
  );
}
function FormUserInfo(props: any) {
  return (
    <form className={props.display ? "" : "none"}>
      {/* form */}

      <p className="textUi pt-18 p">Your Name</p>
      {/* your name */}
      <div className="box row i2 space">
        <input type="text" name="first" placeholder="First Name" />
        <input type="text" name="last" placeholder="Last Name" />
      </div>
      {/* email */}
      <p className="textUi">Email</p>
      <input type="email" name="email" placeholder="Email address" />

      {/* password */}
      <p className="textUi">Password</p>
      <input
        type="password"
        name="password"
        placeholder="At least 6 characters."
      />
      <input type="password" name="repassword" placeholder="Confirm password" />
    </form>
  );
}
