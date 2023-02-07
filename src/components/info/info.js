import React from 'react'

export const Info = ({_src, _nom, _age, _taille}) => {
  return (
    <div className='card'>
        <img src={_src}></img>
        <h1>Nom : {_nom}</h1>
        <p>Age : {_age}</p>
        <p>Taille : {_taille}</p>
    </div>
  )
}
