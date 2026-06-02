import { use, useState } from "react"

function ListManger()
{
const [shoppingList,SetShoppingList] = useState(["Zakupy ","Nauka"])
    function addToShoppingList()
    {
        SetShoppingList(prev => [...prev, " zadanie"]);
    }
    function addMultipleItems(numberOfItems)
    {
        for(let i = 1; i <= numberOfItems; i++)
        {
        SetShoppingList(prev => [...prev,  ` zadanie ${i} ` ]);

        }
    }
return(
        <>
        <p>{shoppingList}</p>
        <p>Liczba zadań : {shoppingList.length}</p>
        <button onClick={() => addToShoppingList()}>Dodaj do listy</button>
        <button onClick={() => addMultipleItems(3)}>Dodaj 3 zadania</button>
        </>
    )
}
export default ListManger