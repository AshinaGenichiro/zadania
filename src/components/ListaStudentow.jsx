import React, { useState } from 'react';

function WierszStudenta({ student, onUsun }) {
  return (
    <li>
      {student.Name} {student.Surname} - Grade: {student.Grade}
      <button type="button" onClick={() => onUsun(student.id)}>
        Usuń
      </button>
    </li>
  );
}

function ListaWpisanymStudentow({ studenci, onUsun }) {
  return (
    <ul style={{ listStyleType: "none", padding: 0 }}>
      {studenci.map((student) => (
        <WierszStudenta 
          key={student.id} 
          student={student} 
          onUsun={onUsun} 
        />
      ))}
    </ul>
  );
}

const ListaStudentow = () => {
  const [students, setStudents] = useState([]);
  const [Name, setName] = useState('');
  const [Surname, setSurname] = useState('');
  const [Grade, setGrade] = useState('');

  const addStudent = (e) => {
    e.preventDefault();
    if (!Name.trim() || !Surname.trim() || Grade === '') return;

    const noweId = students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1;

    const newStudent = {
      id: noweId,
      Name: Name.trim(),
      Surname: Surname.trim(),
      Grade: parseFloat(Grade),
    };

    setStudents([...students, newStudent]);
    setName('');
    setSurname('');
    setGrade('');
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const avgGrade = students.length > 0
    ? (students.reduce((sum, student) => sum + student.Grade, 0) / students.length).toFixed(2)
    : '0.00';

  const sortedStudents = [...students].sort((a, b) =>
    a.Name.localeCompare(b.Name, 'pl', { sensitivity: 'base' })
  );

  return (
    <>
      <h2>Lista studentów</h2>
      <form onSubmit={addStudent}>
        <div>
          <label>
            Imię:
            <input value={Name} onChange={(e) => setName(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Surname:
            <input value={Surname} onChange={(e) => setSurname(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Grade:
            <input
              type="number"
              step="0.1"
              min="0"
              max="5"
              value={Grade}
              onChange={(e) => setGrade(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Dodaj studenta</button>
      </form>

      <div>
        <p>Średnia ocen: {avgGrade}</p>
      </div>

      <ListaWpisanymStudentow studenci={sortedStudents} onUsun={deleteStudent} />
    </>
  );
};

export default ListaStudentow;