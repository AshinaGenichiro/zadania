import { useState } from "react";

export default function InteractiveCard()
{
    const[cardColorHover,setCardColorHover] = useState('#fff');
    function handleClick()
    {
        return alert('Tytuł')
    }
   

    return(
        <>
        <button onMouseEnter={() => setCardColorHover('#002fff')} onMouseLeave={() => setCardColorHover('#fff')} style={{backgroundColor: cardColorHover}} onClick={handleClick}>
            text
        </button>
        
        
        </>
    );

}
