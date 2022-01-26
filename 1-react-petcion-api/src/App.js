
import { useEffect, useState } from 'react';
import './App.css';
const url='https://jsonplaceholder.typicode.com/posts';
function App() {
  const [post, setPost] = useState(null);
  
//peticion normla a una API
  const get=async (url)=>{
    try {
      const res= await fetch(url);
      const data= await res.json();
  
      setPost(data)
      
    } catch (err) {
      console.error(err)
    }
  }
  useEffect(() => {
    get(url)
  }, [])
  return (
    <>
      <JuntarIdIguales/>
      <br/>
      {/* <button onClick={()=>get(url)}>boton</button> forma para traer la peticionde un boton */}
         {post && post.map(el=>{
          return <div key={`${el.id}`}>
           <p>{el.id}</p>
            <p>{el.title}</p>
           </div>
         })} 
    </>
  );
}

export default App;
