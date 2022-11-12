import { useState } from "react";

export default function FormMap(props: any) {
	let [phone, setPhone] = useState("");
	function Next(e: any) {
		e?.preventDefault();
		if (typeof Number(phone) === "number" && !isNaN(Number(phone))) {
			props.Next();
		}
	}
	return (
		<form onSubmit={Next} className={`box col space ${props.staps === 66 ? "" : "none"}`}		>
			<div>
				<p className="textUi">Mobile</p>
				<input type={"tel"} name="mobile" placeholder="Mobile no." required minLength={7} value={phone}
					onChange={(e: any) => {
						let pat = /[0-9]/g;
						let value = e.target.value;
						let value2 = value?.match(pat);
						if (value2 === "undefined") setPhone("");
						else setPhone(value2?.join(""));
					}}
				/>

				<p className="textUi pt-18 p">Address</p>
				<div className="box row i2 space">
					<input type="text" name="country" placeholder="Country" />
					<input type="text" name="city" placeholder="City" />
				</div>
				{/* image map */}
				<img src="/map.png" alt="" width={260} height={100} className="bor" />
			</div>
			<div className=" boxSend">
				<p>Sign in instead</p>
				{/* send */}
				<button type={"submit"}>Next</button>
			</div>
		</form>
	);
}
