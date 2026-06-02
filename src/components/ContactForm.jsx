import { useState } from "react"

function ContactForm()
{
let isEmailOk = false;
let isMessageOk = false;
const [email,setEmail] = useState("");
const [message,setMessage] = useState("");
function handleInputChange(event)
{
    setEmail(event.target.value)
}
function handleMessageChange(event)
{
    setMessage(event.target.value)
}
function handleSumbit()
{
    event.preventDefault();
}
return(
    <>
        <form onSubmit={handleSumbit}>
            <label htmlFor="input">Email</label>
            <input value={email} onChange={handleInputChange} type="email"/>
            <br/>
            <label  htmlFor="Textarea" >Wpisz wiadomość</label>
            <textarea value={message} onChange={handleMessageChange} ></textarea>
            <br />
            <button disabled={!email  || !message}>Potwierdź</button>
        </form>
    </>
)

}


export default ContactForm