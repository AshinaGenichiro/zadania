import { use, useState } from "react";

export default function LoginForm() { 

    const [isPasswordShow, SetisPasswordShown] = useState("password") 
    const [isButtonTextPass, SetIsButtonTextPass] = useState(true)
    const [isLogged, SetIsLogged] = useState(false)
    function handleSetPassword()
    {
        if(isPasswordShow =="password")
        {
            SetisPasswordShown("text")
            SetIsButtonTextPass(false)
            
        }else {
            SetisPasswordShown("password")
            SetIsButtonTextPass(true)

        }
    }
    function handleSetIsLogged()
    {
        SetIsLogged(!isLogged)
    }

    return(
        <>
            <input type={isPasswordShow} />
            <button onClick={() => handleSetPassword()}>{isButtonTextPass ? "Pokaż hasło" : " Ukryj hasło"} </button>
            <p>{isLogged ? "Zalogowany" : "Wylogowany"}</p>
            <button onClick={() => handleSetIsLogged()}>Zaloguj</button>
        </>
    )
} 