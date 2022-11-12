import { useState, useEffect } from "react";
import { IconBack, IconShop } from "./icons";

export default function Header(props: any) {
    return (
        <div className="box col">
            {/* logo */}
            <div className="box center-item row space">
                <div className="box row center-item">
                    <IconShop />
                    <h1 className="textUi f-18" style={{ fontWeight: "400" }}> MyShopy </h1>
                </div>
                {props.staps !== 33 ? (
                    <div className="box center-item row space" onClick={props.Back}>
                        <IconBack style={{ width: "12px" }} />
                        <span>Back</span>
                    </div>
                ) : ("")}
            </div>
            <div className="box center-item row space">
                <b className="f-18 pt-18" style={{ padding: "18px 0 8px 0" }}>
                    Create account
                </b>
                <div className="timeline"                >
                    <div style={{ width: props.staps + "%", }} ></div>
                </div>
            </div>
        </div>
    );
}
export function query(q: string) {
    return document.querySelector(`input[name="${q}"]`) as HTMLInputElement;
}
export function Dane() {
    let [name, setN] = useState();
    useEffect(() => {
        let value: any = query("first");
        value = value.value;
        console.log(value);

        setN(value);
    }, [setN]);
    return (
        <div className={` dane `}>
            <b>Welcome,{name} </b>
        </div>
    );
}
