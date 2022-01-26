import React,{ useEffect, useState }  from 'react';
import { ItemList } from './ItemList';

export const JuntarIdIguales = () => {
    const [arr, setArr] = useState([]);

    const itemsApi=()=> new Promise(function(resolve,reject){
            setTimeout(() => {
                resolve([
                    {grupoId:1,nombre:'Mario'},
                    {grupoId:2,nombre:'Lucia'},
                    {grupoId:1,nombre:'Luis'},
                    {grupoId:1,nombre:'Carmen'},
                    {grupoId:3,nombre:'Boris'},
                    {grupoId:2,nombre:'Oscar'}, 
                ]);
            }, 500);
        });
    
      // acomodar por los que se repiten por id
    useEffect(() =>{
        itemsApi().then((res)=>{
          let resultado= res.reduce((acum,curr)=>{
              //si no existe la misma propiedad id agrega el obj
              if(!acum[curr.grupoId]) acum[curr.grupoId]=[curr]
              //si ya existe la propiedad id lo agrega igual 
              else acum[curr.grupoId].push(curr)
              return acum
          },{})
            setArr(resultado)
          })
        },[])
        
        
  return(
    <ul>
      {
        Object.keys(arr).map((el)=>(
          <>
            <h5>{el}</h5>
              {
                arr[el].map((el,index)=>(
                  <ItemList key={`list-${index}`} data={el} />
                ))
              }
          </>
        ))
      }
    </ul>
  )
};
