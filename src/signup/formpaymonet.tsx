import { useState, useEffect } from "react";
import { IconBack, IconShop } from "./icons";

export default function FormPaymonet(props: any) {
    let [rotate, setRot] = useState("rotate(270deg)");
    let [isOpen, setIsOpen] = useState(false);
    let [data, setData] = useState("Enter card type");
    function Open() {
        if (isOpen) {
            setRot("rotate(0deg)");
            setIsOpen(false);
        } else {
            setRot("rotate(270deg)");
            setIsOpen(true);
        }
    }
    function setList(e: any) {
        setData(e.target.textContent);
        Open();
    }

    function Next(e: any) {
        e?.preventDefault();
        let list = ["Master Card", "Visa", "Payoneer"];
        let filter: string[] = list.filter((a) => a === data);

        if (filter.length === 1) {
            console.log(filter.length);
            props.Next();
        }

        // props.Next();
    }
    return (
        <form
            onSubmit={Next}
            className={`paymonet ${props.staps === 99 ? "" : "none"}`}
        >
            <div className={``}>
                <p className="textUi">Card type</p>
                <div className="box row space input-list" onClick={Open}>
                    <div>{data}</div>
                    <IconBack style={{ width: "12px", transform: rotate }} />

                </div>
                <ul className={`box col list ${isOpen ? "" : "none"}`}>
                    <li onClick={setList}>Master Card</li>
                    <li onClick={setList}>Visa</li>
                    <li onClick={setList}>Payoneer</li>
                </ul>
                {/* img card  */}
                <img
                    src="/visa.png"
                    alt=""
                    width={260}
                    height={100}
                    className="bor img-cardPay"
                />
            </div>
            <div className=" boxSend">
                <p>Sign in instead</p>
                {/* send */}
                <button type={"submit"}>Signup</button>
            </div>
        </form>
    );
} 