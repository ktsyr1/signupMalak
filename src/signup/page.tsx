import { useState } from "react";
import Header, { Dane } from "./mico"
import FormUserInfo from "./userinfo"
import FormMap from "./formmap"
import FormPaymonet from "./formpaymonet"
import "./page.sass"

export default function Signup(): any {
    let [staps, setStaps] = useState(33);

    function Next(e: any) {
        e?.preventDefault();

        setStaps(staps + 33);
    }
    function Back() {
        setStaps(staps - 33);
    }

    let Image;
    if (staps < 100) {
        Image = <img src={`/${staps / 33}.png`} alt="" className="bor img-info" />;
    }
    return (
        <div>
            <div className="contenar">
                {/* sign up */}
                <Header staps={staps} Back={Back} />
                <div className="boxForm box row">
                    {/* content */}

                    <FormUserInfo staps={staps} Next={Next} />
                    <FormMap staps={staps} Next={Next} />
                    <FormPaymonet staps={staps} Next={Next} />
                    {staps > 100 ? <Dane /> : ''}
                    {Image}
                </div>
            </div>
        </div>
    );
}
