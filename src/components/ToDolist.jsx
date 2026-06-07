import { useState } from "react";

function ElementZadania({ zadanie }) {
  return <li>{zadanie.text}</li>;
}

export default function ToDolist() {
  const [zadania, setZadania] = useState([]);
  const [zadanieTekst, setZadanieTekst] = useState("");

  const dodajZadanie = (event) => {
    event.preventDefault();
    const text = zadanieTekst.trim();
    if (!text) return;

    const noweId = zadania.length > 0 ? Math.max(...zadania.map((z) => parseInt(z.id))) + 1 : 1;

    const noweZadanie = {
      id: noweId.toString(),
      text,
    };

    setZadania([...zadania, noweZadanie]);
    setZadanieTekst("");
  };

  const usunZadania = () => {
    setZadania([]);
  };

  return (
    <div>
      <h2>Moja lista zadań</h2>
      <form onSubmit={dodajZadanie}>
        <input
          type="text"
          value={zadanieTekst}
          onChange={(event) => setZadanieTekst(event.target.value)}
        />
        <button type="submit">Dodaj</button>
      </form>
      <button type="button" onClick={usunZadania} disabled={zadania.length === 0}>
        Usuń zadania
      </button>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {zadania.map((zadanie) => (
          <ElementZadania key={zadanie.id} zadanie={zadanie} />
        ))}
      </ul>
    </div>
  );
}