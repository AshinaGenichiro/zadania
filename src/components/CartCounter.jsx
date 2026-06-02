import { use, useState } from "react"

function CartCounter()
{
    const[itemsCount,SetItemsCount] = useState(0)
    function handleAddition()
    {
        SetItemsCount(itemsCount+1)
    }
    function handlePlusFive(numberToAdd)
    {
        for(let i = 1; i<=numberToAdd; i++)
        {
            SetItemsCount(prev=> prev+1)
        }      

    }
    function handleDouble()
    {
        SetItemsCount(itemsCount*2)
    }
    function handleSubstraction()
    {
        SetItemsCount(itemsCount-1)
    }

    return(
        <>
        <p>Ilość przedmiotów: {itemsCount}</p>
        <button onClick={()=>handleAddition()}>Dodaj (+1)</button>
        <button onClick={()=>handlePlusFive(5)}>Dodaj (+5)</button>
        <button onClick={()=> handleDouble()}>Podwój</button>
        <button onClick={()=> handleSubstraction()}>Usuń</button>
        </>
    )
}
export default CartCounter