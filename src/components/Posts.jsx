import { useState } from 'react';

export default function Posts() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'Pierwszy post' },
    { id: 2, title: 'Drugi post' },
    { id: 3, title: 'Trzeci post' }
  ]);
  const [error, setError] = useState(null);
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { 
        method: 'DELETE' 
      });
      if (!response.ok) {
        throw new Error('Nie udało się usunąć posta na serwerze.');
      }
      setPosts(posts.filter(post => post.id !== id));
      setError(null); 
    } catch (err) {
   
      setError(err.message);
    }
  };
  return (
    <div>
      <h2>Moje Posty</h2>  
      {error && <p style={{ color: 'red' }}>Błąd: {error}</p>}
      {posts.map(post => (
        <div key={post.id}>
          <span>{post.title}</span>
          <button onClick={() => handleDelete(post.id)}>Usuń</button>
        </div>
      ))}
    </div>
  );
}