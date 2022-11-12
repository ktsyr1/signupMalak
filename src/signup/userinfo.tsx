import IconshowPass from "./icons";

export default function FormUserInfo(props: any) {
    function query(q: string) {
        return document.querySelector(`input[name="${q}"]`) as HTMLInputElement;
    }
    function Password() {
        let password = query("password");
        let repassword = query("repassword");
        function validatePassword1() {
            if (password.value.length > 8) {
                console.log(password.value.length)
                password.setCustomValidity("Passwords length min 8");
                return false
            } else if (repassword.value.length > 8) {
                console.log(password.value.length)

                repassword.setCustomValidity("rePasswords length min 8");
                return false

            } else if (password.value !== repassword.value) {
                repassword.setCustomValidity("Passwords Don't Match");
                return false

            } else {

                console.log(password.value.length)
                repassword.setCustomValidity("");
                password.setCustomValidity("");
                return true
            }
        }
        function validatePassword() {
            if (password.value.length > 8) {
                console.log(password.value.length)
                password.setCustomValidity("Passwords length min 8");
            } else {
                console.log(password.value.length)
                password.setCustomValidity("");
            }

            if (repassword.value.length > 8) {
                console.log(repassword.value.length)
                repassword.setCustomValidity("rePasswords length min 8");
            } else {
                console.log(password.value.length)
                repassword.setCustomValidity("");
            }
            if (password.value !== repassword.value) {
                repassword.setCustomValidity("Passwords Don't Match");

            } else {

                console.log(password.value.length)
                repassword.setCustomValidity("");
                password.setCustomValidity("");
            }
        }
        password.onchange = validatePassword;
        repassword.onkeyup = validatePassword;
        return true
    }
    function Next(e: any) {
        e?.preventDefault();
        let email: any = query("email");
        let first: any = query("first");
        // log
        let _first = first.value.slice(0, 4).match(/[a-zA-Z]/g).length === 4;

        if (!_first) first.setCustomValidity("use carctar english")
        if (email.value.slice(-4, email.value.length) === ".com" && _first) {
            if (Password()) props.Next()
        } else email.setCustomValidity("Email Don't '.com'");
        if (Password()) props.Next()

    }
    function showPass(q: string) {
        let El = query(q);
        if (El.getAttribute("type") === "text") El.setAttribute("type", "password");
        else El.setAttribute("type", "text");
    }
    return (
        <form className={`${props.staps === 33 ? "" : "none"}`} onSubmit={Next} style={{ height: "340px", minWidth: "260px" }}>
            {/* form */}

            <p className="textUi pt-18 p">Your Name</p>
            {/* your name */}
            <div className="box row i2 space">
                <input type="text" name="first" placeholder="First Name" required minLength={3} autoComplete={'false'} />
                <input type="text" name="last" placeholder="Last ame" required minLength={3} autoComplete={'false'} />
            </div>
            {/* email */}
            <p className="textUi">Email</p>
            <input type="email" name="email" placeholder="Email address" required minLength={3}
                autoComplete={'false'}
            />
            {/* password */}
            <p className="textUi">Password</p>
            <input type="password" name="password" placeholder="At least 6 characters." onChange={Password} min={7} minLength={7} required
                autoComplete={'false'}
            />
            <IconshowPass onClick={() => showPass("password")} />

            <input type="password" name="repassword" placeholder="Confirm password" onChange={Password} min={7} minLength={7} required autoComplete={'false'} />
            <IconshowPass onClick={() => showPass("repassword")} />

            <div className=" boxSend">
                <p>Sign in instead</p>
                {/* send */}
                <button type={"submit"}>Next</button>
            </div>
        </form>
    );
}
