import { useState } from "react"

function ValidateForm()
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [login, setLogin] = useState("");
    const isEmailOk = email.includes("@");
    const isPasswordOk = password.length >= 8;
    const isConfirmPasswordOk = confirmPassword === password && confirmPassword !== "";
    const isFormValid = isEmailOk && isPasswordOk && isConfirmPasswordOk;
function handleInputChange(event) {
    setEmail(event.target.value);
}

function handlePasswordChange(event) {
    setPassword(event.target.value);
}

function handleConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value);
}

function handleSumbit(event) {
    event.preventDefault();
    setLogin("Rejestracja pomyślna! Status: OK");
}

return(
    <>
        <form onSubmit={handleSumbit}>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={handleInputChange} type="email"/>
            {email !== "" && isEmailOk ? <p style={{color:'green'}}>Ok</p> : <p style={{color:'red'}}>Musi zawierać @</p>}
            <br/>
           <label htmlFor="password">Hasło</label>
            <input value={password} onChange={handlePasswordChange} type="password" id="password"/>
            {password !== "" && isPasswordOk ? <span style={{ color: "#green" }}> OK</span>: <span style={{ color: "#red"}}> Haslo musi zawierac minimalnie  8 znakow </span>}
            <br/><br/>
            <label htmlFor="confirmPassword">Potwierdź hasło</label>
            <input value={confirmPassword} onChange={handleConfirmPasswordChange} type="password" id="confirmPassword"/>
            {confirmPassword !== "" && isConfirmPasswordOk ? <p style={{ color: "green"}}> OK</p> : <p style={{ color: "red"}}>Hasła muszą się zgadzać</p> }
            <br />
            <button type="submit" disabled={!isFormValid}>Zarejestruj</button>
        </form>
        <p>{login}</p>
    </>
)

}


export default ValidateForm