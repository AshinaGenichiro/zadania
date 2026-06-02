// SimpleButton.jsx 

function SimpleButton({ label, onClick, color }) { 

 return (
    <>
        <button onClick={onClick} style={{color:color}}>{label}</button>
    </>
 )

} 

 

// App.jsx 

export default function Simple() { 
    function reject()
    {
        alert('Odrzuciłeś')
    }
    function confirm()
    {
        alert('Potwierdziłeś,(denis nie jest dumny)')
    }
 return(
    <>
        <SimpleButton label={"odrzuc"} color={'red'} onClick={reject}/>
        <SimpleButton label={"potwierdź"} color={'green'} onClick={confirm}/>

    </>
 )

} 