import React from 'react';

export const ItemList = ({data}) => {
    let{nombre}=data
  return(
    <>
        <li>{nombre}</li>
    </>

  )
};
