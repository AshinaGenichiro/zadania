import { useState } from "react"

function ContactForm()
{
let isEmailOk = false;
let isMessageOk = false;
const [email,setEmail] = useState("");
const [message,setMessage] = useState("");
const [userMessage,setUserMessage] = useState("")
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
    setUserMessage(message);
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
            <button type="submit" disabled={!email  || !message}>Potwierdź</button>
        </form>
        <p>{userMessage}</p>
    </>
)

}


export default ContactForm